import { NextResponse } from "next/server"
import Prisma from "../../../../util/connect"

export const  GET=async()=>{
    try {
        const users= await Prisma.user.findMany()
         console.log('end API allUser',users)
        return new NextResponse(JSON.stringify(users),{status:200})
    } catch (error) {
        return new NextResponse(JSON.stringify ({message:error}))
        
    }
}