import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

const handler=NextAuth({
    providers:[
         GoogleProvider({
            clientId:process.env.CLIENT_ID_ADMIN!,
            clientSecret:process.env.CLIENT_SECRET_ADMIN!
        }) 
    ],
    secret:process.env.NEXTAUTH_SECRET,
  
})
export {handler as GET,handler as POST};