import NextAuth, { NextAuthConfig } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
// id:                '104134337431995573496',
// providerAccountId: '104134337431995573496'
// sub:               '104134337431995573496',
export const config = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
    ],
    // session: {
    //     strategy: 'database'
    // },
    callbacks: {
        async signIn({ user, account, profile, email }) {
            console.log("file: auth.ts:18 ~ signIn ~ account:", account)
            console.log("file: auth.ts:18 ~ signIn ~ profile:", profile)
            console.log("file: auth.ts:18 ~ signIn ~ email:", email)
            console.log("file: auth.ts:20 ~ signIn ~ user:", user)
            return true
        },

        async session({ session, token, user }) {
            // console.log("file: auth.ts:24 ~ session ~ user:", user)
            // console.log("file: auth.ts:17 ~ session ~ session:", session)

            return session
        },

    },
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout'
    },

} satisfies NextAuthConfig

export const { handlers, auth } = NextAuth(config)

