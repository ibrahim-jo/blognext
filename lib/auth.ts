import NextAuth from "next-auth"
import type {NextAuthConfig}  from 'next-auth'
import GithubProvider from "next-auth/providers/github"
 import { credentialConfig } from "./auth.config"
import { authorizeConfig } from "./authriz.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Prisma from "../util/connect"

// const logIn=async(credeintal:any)=>{
//   try {
//      const user=await Prisma.user.findUnique({where:{email:credeintal.email!}})
//      if(!user){
//      return('invalid user')
//      }
//        const isPass=await bcrypt.compare(credeintal.password,user.password)
      
//      if(isPass){
//       //const {password,...userWithoutpass}=user
//       //return userwithoutpass
//       return user
//      }
//      return ("invalid password");
     
//   } catch (error) {
//     return ("invalid credential");
    
//   }
// }

// declare module 'next-auth'{
//   interface Session{
//     user:User &{
//       isAdmin:boolean
//     }
//   }
// }

// export const {handlers:{GET,POST},auth,signIn,signOut}= NextAuth({
//   // ...authConfig,
//   providers: [
//     GithubProvider({
//       clientId: process.env.AUTH_GITHUB_ID as string,
//       clientSecret: process.env.AUTH_GITHUB_SECRET as string,
//     }),
//     CredentialsProvider({
//       name:'Credentials',
//       credentials:{},
//       authorize:async(credential)=>{
       
//         try {
//          const user= await logIn(credential)
//           if(!user){
//              return null
//           }
//           console.log('authUser',user)
//           return user
//         }
//          catch (error:any) {
//           console.log('ERR',error.message)
//           return error.message
//         }
//       }
//     })
//   ],
//   callbacks:{
//       async signIn({user,account,profile}){
       
//        if(account?.provider=='github'){
//         try {
//           const user= await Prisma.user.findUnique({where:{email:profile?.email!}})
//           if(!user){
//             const newUser={
//               name:profile?.name !,
//               email:profile?.email !,
//               img:profile?.picture ! ,
//               password:'1234567'
//             } 
//             await Prisma.user.create({data:{...newUser}
//               })

//           }
          
//         } catch (error) {
//           console.log('callback signin',error)
//           return false
//         }
//        }
//       return true
       
//       },
      
//   //    ...authConfig.callbacks
//   }
// })

 export const  nextConfig={
   ...authorizeConfig,
   pages:{
     signIn:'/login'
    },
    adapter:PrismaAdapter(Prisma),
  session:{strategy:"jwt"},
  
  providers:[GithubProvider,credentialConfig],
  callbacks:{

    ...authorizeConfig.callbacks
  },
  secret:process.env.AUTH_SECRET
}satisfies NextAuthConfig

export  const {handlers,auth,signIn,signOut}=NextAuth(nextConfig)