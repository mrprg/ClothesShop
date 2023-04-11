import clientPromise from "../lib/mongodb";

export default function Movies({ product }) {
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

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("clothes-next13");

    const movies = await db
      .collection("products")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();

    return {
      props: {
        product: JSON.parse(JSON.stringify(movies)),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
