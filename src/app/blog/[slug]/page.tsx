import Image from "next/image";
import React from "react";
import { post } from "../../../../type";
import PostUser from "@/components/postUser";
import { getSingleBlog } from "../../../../lib/getData";


 type Props={
  params:{
    slug:string
  }
 }
 export const generateMetadata=async({params}:Props)=>{
  const {slug}=params
  const post:post= await getSingleBlog(slug)
  return{
    title:post.title,
    description:post.desc
  }
 }

const slug = async({params}:Props) => {
  const {slug}=params
  console.log(slug)
  const post:post= await getSingleBlog(slug)

  return (
    <div className="flex   gap-10  ">
     {post.img && <div className="hidden md:flex relative w-[400px] h-[calc(100vh-200px)] ">
        <Image
          src={post.img}
          alt=""
          fill
          className=" object-cover"
        />
      </div>}

      <div className="flex flex-col w-1/2 gap-10 ">
        <h1 className=" text-4xl">{post.title}</h1>
        <div className="flex gap-5">
          
          <div className="flex gap-10">
             <PostUser userId={post.userId} />
            <div className="flex flex-col">
            <span className=" text-pretty text-gray-500">Published</span>
            <span>{post.createdAt.slice(4,16)}</span>
            </div>
          </div>
        </div>
        <div >{post.desc}</div>
      </div>
    </div>
  );
};

export default slug;
