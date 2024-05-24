'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm,SubmitHandler } from 'react-hook-form'
import { InputForget, schemaForget } from '../../../../model/inputType'
import Image from 'next/image'
import { reSetPassEmail } from '../../../../lib/actions'
import { toast } from 'react-toastify'

 

const forgetPass = () => {
  const {register,handleSubmit,reset,formState:{errors,isSubmitting}}= useForm<InputForget>({
    resolver:zodResolver(schemaForget)
  })
  
    const onsubmit:SubmitHandler<InputForget>=async(data)=>{
      try {
        const result= await reSetPassEmail(data.email)
         if(result)
           {
            toast.success('send email')
            reset()
          }
        
        
      } catch (error) {
        if(error instanceof Error)
        toast.error(error.message)
      }
    }
  return (
    <div className='flex flex-row justify-start '>
        <form onSubmit={handleSubmit(onsubmit)} className=' flex flex-row justify-center w-1/2 p-5'>
          <fieldset className='w-2/3 h-1/2 flex flex-col gap-4 justify-start  '>
            <label className=' text-2xl '>Email</label>
            <input type='email' {...register('email')} className=' text-slate-900 text-xl p-1 '/>
            {errors.email?.message}
           email
            <button  type='submit' className=' p-2 text-xl rounded-md bg-cyan-900 hover:bg-slate-500'>send</button>
          </fieldset>
        </form>
        <Image src='/forgot-password.png' 
        width={400}
      height={400}
      alt="Picture of the author" />
    </div>
  )
}

export default forgetPass