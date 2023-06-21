import Image from "next/image";
import clientPromise from "../lib/mongodb";
import Link from "next/link";
import FilterProduct from "../components/FilterProduct";

export default function Product({
  products,
  currentPage,
  totalPages,
}) {
  return (
    <div className="w-100">
      <h1 className="text-red-500 text-5xl">
        Best Clothes Shop Ever 🗿
      </h1>
      <ul>
        {product.map((product) => (
          <li>
            <h2 className="mt-5 ml-5 text-2xl">{product.title}</h2>
            <p className="mt-2 ml-5 text-xl text-slate-600">{product.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const client = await clientPromise;
    const db = client.db("clothes-next13");

    // retrieve query parameters
    const page = parseInt(query?.page ?? 1);
    const pageSize = 3;

    // calculate skip value based on page and page size
    const skip = (page - 1) * pageSize;

    // retrieve a page of products based on skip and limit values
    const products = await db
      .collection("products")
      .find({})
      .sort({ metacritic: -1 })
      .skip(skip)
      .limit(pageSize)
      .toArray();

    // count total number of products in the collection
    const totalProducts = await db
      .collection("products")
      .countDocuments({});

    // calculate total number of pages based on page size and total products
    const totalPages = Math.ceil(totalProducts / pageSize);

    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
        currentPage: page,
        totalPages,
      },
    };
  } catch (e) {
    console.error(e);

    return {
      props: {
        products: [],
        currentPage: 1,
        totalPages: 1,
      },
    };
  }
}
