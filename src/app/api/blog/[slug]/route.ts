import { NextRequest, NextResponse } from "next/server";
import Prisma from "../../../../../util/connect";

type Props ={
    params:{
        slug:string
    }
}

export const GET=async (req:NextRequest,{params}:Props) => {
    const {slug}=params
    try {
             const res=await Prisma.posts.findUnique({where:{slug}})
             console.log('user',res)
     
            return new NextResponse (JSON.stringify(res),{status:200})
        } catch (error) {
           return new NextResponse(JSON.stringify({message:error}))
         }
}