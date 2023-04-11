import clientPromise from "../lib/mongodb";

export default function Movies({ product }) {
  return (
    <div>
      <h1>Best Clothes Shop Ever 🗿</h1>
      <ul>
        {product.map((product) => (
          <li>
            <h2>{product.title}</h2>
            <h3>{product.metacritic}</h3>
            <p>{product.desc}</p>
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
      props: { product: JSON.parse(JSON.stringify(movies)) },
    };
  } catch (e) {
    console.error(e);
  }
}
