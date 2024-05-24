import { NextRequest, NextResponse } from "next/server";
import Prisma from "../util/connect";

export const getBlog=async () => {
     const res=await fetch('http://localhost:3000/api/blog')
    if(!res.ok){
     throw new Error('server error');
     
    }
 
    return res.json()
   
 }


 export const getSingleBlog=async(slug:string)=>{
     const res=await fetch(`http://localhost:3000/api/blog/${slug}`)
  if(!res.ok){
   throw new Error("server Error");
     
     }
     const data=res.json()
      return data
    
   }
   export const getUser=async(userId:string)=>{
   //  const res=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
   //  if(!res.ok){
   //     throw new Error("server Error");
   // }
   // return res.json()
   try {
      
      const res=await Prisma.user.findFirst({where:{id:userId}})
      return new NextResponse(JSON.stringify(res),{status:200}).json()
   } catch (error) {
      return new NextResponse(JSON.stringify({message:error}))
   }
   }

   export const Reg=async(form:any)=>{
      console.log('getData',form)
     const res=await fetch("http://localhost:3000/api/submit",{
      method:'POST',
      body:form
     })
   }

   export const  allUsers=async()=>{
     const res =await fetch(`${process.env.NEXTUTH_URL}/api/allusers`)
     const data=res.json()
     
      return data
   }
   