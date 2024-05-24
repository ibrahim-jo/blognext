'use client'
import React,{useState} from 'react'
import SubmitButton from './SubmitButton'
import { LogInCredential } from '../../lib/actions'
import {useForm,SubmitHandler} from 'react-hook-form'
import { InputLogin,schemaLogin } from '../../model/inputType'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'

const LogInForm = () => {

  const{register,handleSubmit,formState:{errors}}= useForm<InputLogin>({
    resolver:zodResolver(schemaLogin)
  })
   const onSubmit:SubmitHandler<InputLogin>= async(data)=>{
     const result= await  LogInCredential(data)
     if(result?.error)
      toast.error(result?.error)
    }
  return (
    <form className='w-1/3 gap-8 flex flex-col justify-center' onSubmit={handleSubmit(onSubmit)} >
    <label className='   font-sans text-2xl'>Email</label>
   <input type='email' placeholder='Email' {...register('email')} className='text-gray-900 h-8 px-3 text-xl rounded border-none'/>
   { errors.email?.message}
   <label className='  font-sans  text-2xl'>PassWord</label>
   <input type='password' {...register('password')} placeholder='Password'   autoComplete='off' className='text-gray-900 h-8 px-3 text-xl rounded border-none'/>
   {errors.password?.message}
   <div>
    
     <SubmitButton />
   </div>
   </form>
  )
}

export default LogInForm