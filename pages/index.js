import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";

export async function getServerSideProps(context) {
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

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
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to{" "}
          <a href="https://nextjs.org">
            Next.js with MongoDB!
          </a>
        </h1>

        {isConnected ? (
          <h2 className="subtitle">
            You are connected to MongoDB
          </h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the{" "}
            <code>README.md</code> for instructions.
          </h2>
        )}

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <a
            href="https://nextjs.org/docs"
            className="card">
            <h3>Documentation &rarr;</h3>
            <p>
              Find in-depth information about Next.js
              features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="card">
            <h3>Learn &rarr;</h3>
            <p>
              Learn about Next.js in an interactive course
              with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="card">
            <h3>Examples &rarr;</h3>
            <p>
              Discover and deploy boilerplate example
              Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="card">
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public
              URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{" "}
          <img
            src="/vercel.svg"
            alt="Vercel Logo"
            className="logo"
          />
        </a>
      </footer>
    </div>
  );
}
