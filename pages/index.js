import Head from "next/head";
import clientPromise from "../lib/mongodb";
import Layout from "../src/components/LayoutComponent/Layout";

export async function getServerSideProps(context) {
  try {
    await clientPromise;

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export default function Home(isConnected) {
  return (
    <div className="container mx-auto max-w-full">
      <Layout>
        <Head>
          <title>E-Commerce Store</title>
          <link rel="icon" href="" />
        </Head>
        <p>content here</p>
      </Layout>
    </div>
  );
}
