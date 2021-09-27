import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import FacebookProvider from 'next-auth/providers/facebook';

const providers = [
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
]

const callbacks = {
    signIn: async (user, account, profile) => {
        return Promise.resolve(true)
    },
    session: async (session, user) => {
        session.foo = 'bar' // Add property to session
        return Promise.resolve(session)
    },
    credentials: async( user,acount,profile) => {
      return Promise.resolve(true)
    },
}

const session = {
    jwt: true
}

const options = {
    providers,
    session,
    call: callbacks
}

export default (req, res) => NextAuth(req, res, options)




