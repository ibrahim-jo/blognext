'use client'
import React,{useState,useEffect} from 'react'
import { useForm,SubmitHandler } from 'react-hook-form'
import { ResPss,resPassfine } from '../../model/inputType'
import { zodResolver } from '@hookform/resolvers/zod'
import { EyeInvisibleOutlined, EyeOutlined, IdcardFilled } from '@ant-design/icons'
import { passwordStrength } from 'check-password-strength'
import CheckPass from './CheckPass'
import SubmitButton from './SubmitButton'
import { restPass } from '../../lib/actions'
import { toast } from 'react-toastify'

type Props = {
    id:string
}

const ResPassForm = ({id}: Props) => {
    const [isvisble, setisvisble] = useState(false)
    const [strengthPassword, setstrengthPassword] = useState(0)
    const hanldeVisable=()=>{setisvisble(!isvisble)}
    
    const {register,watch,handleSubmit,reset,formState:{errors,isSubmitting}}=useForm<ResPss>(
        {
            resolver:zodResolver(resPassfine)
        })
    useEffect(() => {
        const checkPassword=passwordStrength(watch().password).id
        setstrengthPassword(checkPassword)
         
       }, [watch().password])
       const onsubmit:SubmitHandler<ResPss>=async(data)=>{
        console.log('URLJWTPASS',id)
         try {
             const result=await restPass(id,data.password)
             if(result=='success'){
                 toast.success(result)
             }
             else{
              toast.error(result)
             }
        
         } catch (error) {
            toast.error('something wrong')
         }
       }
  return (
    <div>
        <form  onSubmit={handleSubmit(onsubmit)} className='w-2/3 gap-3 flex flex-col justify-center m-auto gap-2 '>
            <label className=' text-center text-slate-100 text-xl' >ResetPassword</label>
            <fieldset className=' w-full flex  justify-between mb-3  bg-slate-50 rounded-md'>
                <label className=' text-center text-stone-900 text-lg'>NewPass:</label>
                <input type={isvisble?'text':'password'} {...register('password')} className='text-gray-900 h-8 px-3 text-xl rounded border-none w-full ' />
                {isvisble?<EyeOutlined className='  p-2 text-slate-700 'onClick={hanldeVisable} /> :
    <EyeInvisibleOutlined className='  p-2 text-slate-700 'onClick={hanldeVisable} />}
            </fieldset>
                {errors.password?.message}
            <CheckPass strengthPass={strengthPassword} />
            <fieldset className=' w-full flex  justify-between mb-3  bg-slate-50 rounded-md'>
                <label className=' text-center text-stone-900 text-lg'>ConfirmPass:</label>
                <input type={isvisble?'text':'password'} {...register('confirm')}  className='text-gray-900 h-8 px-3 text-xl rounded border-none w-full ' />
            </fieldset>
                {errors.confirm?.message}
            <SubmitButton />
        </form>
    </div>
  )
}

export default ResPassForm