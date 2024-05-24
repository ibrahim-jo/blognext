//import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { auth } from '../../../lib/auth'

const contact = async() => {
  //const {data:session}=useSession()
  const session=await auth()
  if(!session ||!session.user)
  return(<>no  sessions</>)
  return (
    <div className='flex gap-8  items-center'>
      
      <div className='  hidden md:flex flex-1 relative h-[450px]  '>
        <Image src='/contact.png' alt='contact' fill  sizes=''/>
      </div>
      <div className='flex flex-1'>
        <form  className='flex flex-col gap-6 w-full'>
          <input name='name' type='text' placeholder='Name & surName' className=' p-2 rounded border-none outline-none text-white bg-cyan-900' />
          <input name='email' type='text' placeholder='Email' className=' p-2 rounded border-none outline-none text-white bg-cyan-900' />
          <input name='phone' type='text' placeholder='Phone Number' className=' p-2 rounded border-none outline-none text-white bg-cyan-900' />
          <textarea rows={5} cols={30} placeholder='note' className=' p-2 rounded border-none outline-none text-white bg-cyan-900' />
          <button className=' p-3 text-white bg-cyan-600 border-none rounded-md font-bold'>Submit</button>
        </form>
      </div>
      </div>
  )
}

export default contact