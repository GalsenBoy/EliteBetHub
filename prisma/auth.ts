import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/prisma/db"


export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [GoogleProvider({
        clientId: "46479331334-acbrjjgr6vu6p0p78ipub35mlp6c8e7d.apps.googleusercontent.com",
        clientSecret: "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"
    })],
    adapter: PrismaAdapter(prisma)
})