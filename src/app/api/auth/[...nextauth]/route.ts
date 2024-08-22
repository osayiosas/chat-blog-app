import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

import GithubProvider from "next-auth/providers/github";

import GoogleProvider from "next-auth/providers/google";

const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: "process.env.GITHUB_ID",
      clientSecret: "process.env.GITHUB_SECRET",
    }),

    GoogleProvider({
      clientId: "process.env.GOOGLE_CLIENT_ID",
      clientSecret: "process.env.GOOGLE_CLIENT_SECRET",

      authorization: {
        params: {
          access_type: "offline",
          prompt: "consent",
          response_type: "code",
        },
      },
    }),
  ],

  callbacks: {
    async session({ session, token }: any) {
        console.log(session, token);
      session.user.name = `${session?.user?.name}_${token?.sub}`;

      return session;
    },
  },

  secret: process.env.SECRET,
};

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST };
