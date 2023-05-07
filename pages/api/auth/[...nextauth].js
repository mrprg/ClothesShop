import { Document, MongoClient, WithId } from "mongodb";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../lib/mongodb";

// authOptions
const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials;
        const client = new MongoClient(
          "mongodb+srv://mrprg:asadi23577@cluster0.dh2ry2j.mongodb.net/clothes-next?retryWrites=true&w=majority"
        );

        const dbUser = await clientPromise;
        const db = dbUser.db("clothes-next13");
        async () => {
          try {
            const users = await db
              .collection("users")
              .find({})
              .sort({ metacritic: -1 })
              .limit(10)
              .toArray();

            res.json(users);
          } catch (e) {
            console.error(e);
          }
        };

        if (dbUser) {
          if (dbUser.password == password) {
            return dbUser;
          }
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
