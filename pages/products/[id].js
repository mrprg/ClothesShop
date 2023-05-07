import { MongoClient, ObjectId } from "mongodb";
import Image from "next/image";
import { useRouter } from "next/router";

function Product({ product }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Image
        src={product.imageUrl}
        width={500}
        height={500}
        alt="product-image"
      />
    </div>
  );
}

const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    process.env.MONGODB_URI
  );
  const db = client.db("clothes-next13");
  return db;
};

export async function getStaticPaths() {
  const db = await connectToDatabase();
  const products = await db
    .collection("products")
    .find({}, { _id: 1 })
    .toArray();

  // Get the paths we want to pre-render based on product
  const paths = products.map((product) => ({
    params: { id: product._id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const db = await connectToDatabase();

  const product = await db
    .collection("products")
    .findOne({ _id: ObjectId(params.id) });

  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
}

export default Product;
