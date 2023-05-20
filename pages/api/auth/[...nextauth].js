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
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        // MongoDB connection
        const client = await MongoClient.connect(
          `mongodb+srv://mrprg:asadi23577@cluster0.dh2ry2j.mongodb.net/clothes-next?retryWrites=true&w=majority`,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        );
        const db = client.db("clothes-next13");

        const existingUser = await db.collection("users").findOne({ email });
        if (existingUser) {
          await client.close();
          return existingUser;
        }

        const newUser = {
          email,
          password,
        };

        const result = await db.collection("users").insertOne(newUser);

        newUser._id = result.insertedId;

        await client.close();

        return newUser;
      },
    }),
  ],
  pages: {
    // signIn: "/auth/signup",
    signIn: "/dashboard",
    signUp: "/auth/login",
    // newUser: "/admin",
  },
};

export default NextAuth(authOptions);
