import React from 'react'
import { User } from '../../type';
import { getUser } from '../../lib/getData';
import Image from 'next/image';



type Props = {
    userId:string  
}

const PostUser = async({userId}: Props) => {
    const user:User=await getUser(userId)

  return (
    <div className="flex items-center justify-center gap-3">
      <div className=" relative w-[40px] h-[40px]  ">
            <Image
              src={user.img?user.img:'/noavatar.png'}
              alt=""
              fill
              className=" object-cover rounded-full"
            />
          </div>
          <div className='flex  flex-col'>
            <span className=" text-pretty text-gray-500">Author</span>
            <span>{user.name}</span>
          </div>
            </div>
  )
}

export default PostUser