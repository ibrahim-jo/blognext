import React from 'react'
import {  handleLogIn } from '../../../../lib/actions'
import LogInForm from '@/components/LogInForm'
import Link from 'next/link'

const login = () => {
  
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      login
      <form action={handleLogIn} >
        <button className=' w-full bg-slate-50 text-black px-2 rounded-md text-2xl py-1 hover:bg-slate-500 hover:text-white' >GitHub</button>
      </form>

      <hr className="w-2/3 border-gray-200 mb-4"/>
     <LogInForm />
     <Link href='./forgetPassword'>Forget PassWord</Link>
      </div>
  )
}

export default login