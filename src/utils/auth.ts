import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./connect";

console.log(process.env.GOOGLE_ID);
console.log(process.env.GOOGLE_SECRET);

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
            // clientId: process.env.GOOGLE_ID!,
            // clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
    // secret: "hello1234567890",
};

export const getAuthSession = () => getServerSession(authOptions);
