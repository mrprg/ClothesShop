import { Document, MongoClient, WithId } from "mongodb";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../lib/mongodb";
// import User from "../../../model/schema";

// connect();
// authOptions
const authOptions = {
  session: {
    strategy: "jwt",
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials;

        const client = await MongoClient.connect(
          `mongodb+srv://mrprg:asadi23577@cluster0.dh2ry2j.mongodb.net/clothes-next?retryWrites=true&w=majority`,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        );
        const db = client.db("clothes-next13");

        const user = await db.collection("users").findOne({ email });
        if (user && user.password === password) {
          return user;
        } else {
          return user;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
