import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@gmail.com",
        },

        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        // {
        //   id: "1",
        //   name: "J Smith",
        //   email: "jsmith@gmail.com",
        //   password: "123456",
        // };

        if (dbUser) {
          if (dbUser.password == password) return dbuser;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: { signIn: "/auth/signin" },
};

export default NextAuth(authOptions);
