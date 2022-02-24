import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import AdminModel from "../../../Model/AdminModel";
import connectDB from "../../../helper/connectDB";
import bcrypt from "bcrypt";

export default connectDB(NextAuth({
    session: {
        jwt: true,
        maxAge: 30 * 60,
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) 
            {
                const user = await AdminModel.findOne({ email: credentials.username });
                if(!user) throw new Error('akun anda invalid');
                

                const isMatch = await bcrypt.compare(credentials.password, user.password);
                if(!isMatch) throw new Error('Password anda salah');
                

                return {
                    email: user.email
                }
            }
        })
    ],
    pages: {
        signIn: '/backoffice'
    },
    database: process.env.MONGODB_URI,
    secret: process.env.SECRET
}));
