import GoogleProvider from "next-auth/providers/google";
import NextAuth, {NextAuthOptions} from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";

import {prisma} from "@/libs/prisma";
import {PrismaAdapter} from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_ID ?? "",
            clientSecret: process.env.TWITTER_SECRET ?? "",
            version: "2.0",
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {label: "Email",  type: "text",  placeholder: "maurilio@gmail.com"},
                username: {label: "Username",  type: "text",  placeholder: "Maurílio"},
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials) {
                const user = {
                    id: "1",
                    name: "Maurílio",
                    email: "maurilio@gmail.com",
                };
                return user;
            },
        }),
    ],
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
    },
    debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
