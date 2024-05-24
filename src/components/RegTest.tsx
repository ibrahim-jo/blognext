'use client'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import React,{useEffect,useState} from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputType, Schema } from '../../model/inputType'
import SubmitButton from './SubmitButton'
import { Checkbox } from 'antd'
import {passwordStrength} from 'check-password-strength'
import CheckPass from './CheckPass'
import { LogInCredential, testRegister } from '../../lib/actions'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const RegForm2 = () => {
   const [isvisble, setisvisble] = useState(false)
   const [strengthPassword, setstrengthPassword] = useState(0)
   const route=useRouter()
   const hanldeVisable=()=>{setisvisble(!isvisble)}

   const {register,handleSubmit,reset,formState:{errors},control,watch}=useForm<InputType>({
    resolver:zodResolver(Schema)
  })
useEffect(() => {
 const checkPassword=passwordStrength(watch().password).id
 setstrengthPassword(checkPassword)
  
}, [watch().password])


  const onSubmit:SubmitHandler<InputType>=async(data)=>{
    const {accepted,confirm,...user}=data
    
      const result=await testRegister(user)
      if(result?.error){
      console.log('serverError',result.error)
      toast.error(result.error)
      }
      else{

        toast.success('Successful register')
        toast.success('check your Email to verify')
        route.push('/')
       

      }
  
  }

    
  return (
    <form  className='w-2/3 gap-3 flex flex-col justify-center m-auto 'onSubmit={handleSubmit(onSubmit)}  >
    <label className='   font-sans text-2xl'>Name</label>
    <input type='text' id='name' placeholder='FirstName'  {...register('name')} className='text-gray-900 h-8 px-3 text-xl rounded border-none'  /> 
    {errors?.name?.message}  
    <label className='  font-sans  text-2xl'>Email</label>
    <input type='text' id='email' {...register('email')} placeholder='Email'  className='text-gray-900 h-8 px-3 text-xl rounded border-none'/>
    {errors.email?.message}
    <label className='  font-sans  text-2xl'>PassWord</label>
    <div className=' w-full flex  justify-between mb-3  bg-slate-50 rounded-md' >
    <input type={isvisble?'text':'password'} id='password' {...register('password')} placeholder='Password'  className='text-gray-900 h-8 px-3 text-xl rounded border-none w-full ' />
    {isvisble?<EyeOutlined className='  p-2 text-slate-700 'onClick={hanldeVisable} /> :
    <EyeInvisibleOutlined className='  p-2 text-slate-700 'onClick={hanldeVisable} />}
    </div>
    {errors.password?.message}
    <CheckPass strengthPass={strengthPassword} />
    <label className='  font-sans text-2xl'>ConfirmPassword</label>
    <input type={isvisble?'text':'password'} id='confirm' {...register('confirm')} placeholder='ConfirmPassword'   className='text-gray-900 h-8 px-3 text-xl rounded border-none'/>
    {errors.confirm?.message}
    <Controller  control={control} name='accepted' render={({field})=>(
      <Checkbox onChange={field.onChange}  className=' text-white' >Accepted All Terms</Checkbox> )
    }/>
   {errors.accepted?.message}
   <SubmitButton />
   
   </form>
  )
}

export default RegForm2