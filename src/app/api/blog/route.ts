import { NextResponse } from "next/server"
import Prisma from "../../../../util/connect"

export const GET=async () => {
    try {
        const posts=await Prisma.posts.findMany()
    return new NextResponse(JSON.stringify( posts),{status:200})
        
    } catch (error) {
        return new NextResponse(JSON.stringify({message:'failed  posts'}),{status:500})
    }

}