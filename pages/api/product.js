import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("clothes-next13");

    const products = await db
      .collection("products")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    res.json(products);
  } catch (e) {
    console.error(e);
  }
};
