import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: "46479331334-acbrjjgr6vu6p0p78ipub35mlp6c8e7d.apps.googleusercontent.com",
            clientSecret: "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",
        }),
        // ...add more providers here
    ],
}

export default NextAuth(authOptions)