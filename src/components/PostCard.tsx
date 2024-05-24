'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { post } from '../../type'

type Props = {
  post:post
}

const PostCard = ({post}: Props) => {
  return (
    <div className='flex flex-col gap-5 mb-5'>
        <div className='flex  '>
           {post.img && <div className=' relative w-[90%] h-[400px]'>
            <Image src={post.img} alt='' fill className=' object-cover'  />
            </div>}
            <span className=' m-auto w-[45%] -rotate-90' >01-01-2024</span>
        </div>
        <div>
            <h1 className=' text-2xl mb-5'>{post.title}</h1>
            <p className='text-gray-500 mb-5 '>{post.desc}</p>
            <Link  href={`blog/${post.slug}`} className=' underline'>RedMe...</Link>
        </div>
        </div>
  )
}

export default PostCard