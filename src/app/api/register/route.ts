import { NextRequest,NextResponse } from "next/server"
import Prisma from "../../../../util/connect"
export  const POST=async(req:NextRequest,res:NextResponse)=>{
     const  {body}=req
     
     console.log('body',body)
}