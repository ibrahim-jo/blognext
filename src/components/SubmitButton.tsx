'use client'
import React,{useEffect} from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
    const {pending}=useFormStatus()
    useEffect(() => {
      console.log(pending)
    }, [pending])
    
  return (
    <div  className='flex flex-row justify-center items-center h-24'>
      <button type='submit' disabled={pending} className='w-1/3 bg-slate-50 text-black px-2 rounded-md text-3xl py-1 hover:bg-slate-500 hover:text-white'>submit{pending &&'....'}</button>
      </div>
  )
}

export default SubmitButton