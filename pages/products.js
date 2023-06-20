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
    <div className="flex justify-between px-[150px]">
      <FilterProduct />

      <div>
        <h1 className="font-bold text-2xl my-[40px]">
          All products
        </h1>
        {/* main div that contains all of the products */}
        <div className="w-[1200px] grid grid-cols-3">
          {products.map((item) => (
            <div className="w-[330px] mb-[35px] ml-[10px] shadow-xl hover:scale-105 transition-all">
              <Image
                className="object-cover rounded-md rounded-b-none w-[330px] h-[380px]"
                src={item.imageUrl}
                width={300}
                height={500}
                alt="fashion-clothe"
              />
              <div className="w-[330px] h-[230px] bg-slate-100 pl-3 pt-2">
                <h1 className="w-[100px] font-[600] text-l mb-3">
                  {item.title}
                </h1>
                <p className="w-[300px] font-[500] mb-[15px] text-slate-500">
                  {item.description}
                </p>
                <p className="text-[15px] font-[500] mb-[15px]">
                  Size:{" "}
                  <span className="text-[18px] text-slate-500">
                    {item.size}
                  </span>
                </p>
                <p className="text-[15px] font-[500] mb-[25px]">
                Price :{" "}
                  <span className="text-[18px] text-red-800">
                    {item.price}
                  </span>{" "}
                  <span className="text-[13px] font-[500]">
                  $</span>
                </p>
                <div className="flex">
                  <button className="bg-red-700 h-[35px] ml-[10px] rounded-md text-white text-[15px] font-[500] pb-1 w-[120px] hover:border hover:border-red-700 hover:bg-white hover:text-red-700 transition-all active:scale-95">
                  Buy
                  </button>
                  <Link href={`product/${item._id}`}>
                    <button className="bg-white h-[35px] ml-[10px] rounded-md text-red-700 text-[15px] font-[500] pb-1 w-[160px] border hover:border-red-700 hover:scale-105 transition-transform">
                    View Product
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* pagination links */}
        <div className="flex justify-center my-8">
          {Array.from({ length: totalPages }).map(
            (_, index) => (
              <Link
                href={{
                  pathname: "/products",
                  query: { page: index + 1 },
                }}
                key={index}>
                <p
                  className={`rounded-full w-10 h-10 flex items-center justify-center mx-2 text-lg font-bold ${
                    currentPage === index + 1
                      ? "bg-red-700 text-white"
                      : "text-gray-500 hover:text-red-700"
                  }`}>
                  {index + 1}
                </p>
              </Link>
            )
          )}
        </div>
      </div>
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
