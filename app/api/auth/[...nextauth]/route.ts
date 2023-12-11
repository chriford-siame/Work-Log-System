import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt, { compare } from 'bcrypt'
import mongoDBConnect from "@/libs/mongodb";
import Organizer from "@/models/organizer";
import InterfaceSignup from "@/interfaces/signup";
import { Session } from "next-auth/core/types";

export const AuthOptions: NextAuthOptions = {
    secret: process.env.AUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "John Doe" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                await mongoDBConnect();
                const user = await Organizer.findOne({
                    email: credentials?.email
                }).select("+password")

                if (!user) {
                    throw new Error("Enter a valid email or password")
                }
                const isPasswordCorrect = await compare(credentials!.password, user.password)
                if (!isPasswordCorrect) {
                    throw new Error("Enter a valid email or password")
                }
                if (!credentials?.password || !credentials?.email) {
                    throw new Error('Enter a valid email and password')
                }
                return {
                    id: user._id,
                    email: user.email,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    phone_number: user.phone_number,
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        jwt(params: any) {
            if (params.user) {
                params.token.id = params.user.id;
                params.token.email = params.user.email;
                params.token.first_name = params.user.first_name;
                params.token.last_name = params.user.last_name;
                params.token.phone_number = params.user.phone_number;
            }
            return params.token;
        },
        session({ session, token }) {
            return session;
        }
    }
}

const handler = NextAuth(AuthOptions)
export { handler as GET, handler as POST }