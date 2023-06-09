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
    <div className="rounded-l-lg w-full h-[100vh] flex items-center justify-center">
      <div
        className="rounded-lg flex bg-slate-200">
        <div className="flex flex-col items-center w-[500px] h-[400px] pt-[20px]">
          <h1 className="text-[22px] font-bold mb-4">
            {product.title}
          </h1>
          <p className="w-[250px] text-center font-semibold text-[17px] mb-4">{product.description}</p>
          <p><span>Size: </span><button>{product.size}</button></p>
          <p>Price: ${product.price}</p>

        </div>
        <Image
          className="rounded-r-lg"
          src={product.imageUrl}
          width={500}
          height={500}
          alt="product-image"
        />
      </div>
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
