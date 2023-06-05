import Head from "next/head";
import clientPromise from "../lib/mongodb";
import Layout from "../src/components/LayoutComponent/Layout";
import SliderComponent from "../src/components/SliderComponent";
import Category from "../src/components/Category";
import Header from "../src/components/Header";

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

        <SliderComponent />

        <Category />
      </Layout>
    </div>
  );
}
