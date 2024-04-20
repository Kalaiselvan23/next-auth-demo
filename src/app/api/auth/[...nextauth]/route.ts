import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';

const handler=NextAuth({
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'Username',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Password',
                },
            },
            async authorize(credentials, req) {
                // const { username, password } = credentials;
                // const res = await fetch('/api/login', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify({ username, password }),
                // });
                // const json = await res.json();
                // if (res.status === 200) {
                //     return json;
                // } else {
                //     throw new Error(json.message);
                // }
                if(credentials?.username==="admin" && credentials?.password==="admin")
                    {
                        return {
                            username:credentials?.username
                        }
                    }
                    else{
                        return null
                    }
            },
        })
    ]
})
export {handler as GET, handler as POST, handler as PUT, handler as DELETE}