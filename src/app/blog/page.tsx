import PostCard from '@/components/PostCard'
import React from 'react'
import { post } from '../../../type';
import { getBlog } from '../../../lib/getData';

 

const blog = async() => {
  const data:post[]=await getBlog()
  return (
    <div className='flex  flex-wrap gap-5'>
      {data.map((post)=>
        (<div className=' w-[45%] md:w-[30%]' key={post.id}>
      <PostCard post={post} />
      </div>))}
      
     
      </div>
  )
}

export default blog