import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
      
        if (email !== "john@gmail.com" || password !== "12345678") {
          throw new Error("invalid credentials");
        }

        return {
          id: "1",
          name: "John Doe",
          email: "john@gmail.com",
          role: "admin",
          password:"12345678",
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
};

export default NextAuth(authOptions);