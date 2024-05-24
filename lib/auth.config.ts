import Prisma from "../util/connect"
import credentials from "next-auth/providers/credentials"
import * as bcrypt from 'bcrypt'


export const credentialConfig=credentials(
    {
    name:'credentials',
    credentials:{
    email:{
    label:"Email...",
    type:'text'
    },
    password:{
    label:'Password',
    type:'password'
    }
    },
    async authorize(credentials) {
       
       const user =await Prisma.user.findUnique({where:{email:credentials.email as string}})
       if(!user){
        return null
       }
        const ispassword= await bcrypt.compare(credentials.password as string,user.password)

        if(!ispassword){
            return null
        }
        if(!user.verify)
            throw new Error('not verify');
            
        const {password,...userWithoutpass}=user
        return userWithoutpass
    },
})