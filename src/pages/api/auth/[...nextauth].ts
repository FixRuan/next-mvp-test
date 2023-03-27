/* eslint-disable @typescript-eslint/no-non-null-assertion */

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const clientId = process.env.GITHUB_ID!;
const clientSecret = process.env.GITHUB_SECRET!;

export const authOptions = {
  providers: [
    GithubProvider({
      clientId,
      clientSecret,
    }),
  ],
};

export default NextAuth(authOptions);