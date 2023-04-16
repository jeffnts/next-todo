'use client'

import NextAuth, { type NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { firebase } from 'libs'
import  prisma from 'libs/prisma'

export const authOptions: NextAuthOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as any,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as any,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: { },
            async authorize(credentials: any) {
                try{
                    const { email, password } = JSON.parse(credentials?.message)
                    
                    const auth = getAuth(firebase)

                    const result: any = await signInWithEmailAndPassword(auth, email, password)
                    
                    const firebaseId = result?.user?.uid
                    
                    const user: any = await prisma.user.findFirst({ where: { firebaseId }, select: { id: true, name: true, email: true, firebaseId: true }})
                  
                    return user
                }catch(error){
                    console.log('error', error)
                    return null
                }
            }
          })
    ],
    callbacks: {
        async jwt({ token, user }: any) {        
            return {
                ...token,
                ...user
            }
          },
          session({ session, token }: any) {
            session.user = token
            return session
          },
    },        
    secret: process.env.SECRET,    
    pages: {
        signIn: '/login'
    }
}

export default NextAuth(authOptions)
