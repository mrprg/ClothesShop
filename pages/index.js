import Head from "next/head";
import clientPromise from "../lib/mongodb";
import Layout from "../src/components/LayoutComponent/Layout";
import SliderComponent from "../src/components/SliderComponent";
import Category from "../src/components/Category";
import Discount from "../src/components/Discount";
import OurBlog from "../src/components/OurBlog";
import AccordionMenu from "../src/components/AccordionMenu";
import Shipping from "../src/components/Shipping";

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
        <Discount />
        <OurBlog />
        <AccordionMenu />
        <Shipping />
      </Layout>
    </div>
  );
}
