'use client'
import React,{useEffect} from 'react'
import SubmitButton from './SubmitButton'
import { StateForm, handleReg } from '../../lib/actions'
import { useFormState } from 'react-dom'
import { useRouter } from 'next/navigation'

const RegForm = () => {
    const [state, formAction] = useFormState(handleReg, {error:undefined,succsess:undefined}as StateForm);
    const router= useRouter()
    useEffect(() => {
     if(state.succsess){
        router.push('/login')
     }
    }, [state,router])
    
  return (
    <form action={formAction} className='w-2/3 gap-3 flex flex-col justify-center '>
    <label className='   font-sans text-2xl'>Name</label>
    <input type='text' name='name' placeholder='FirstName'  className='text-gray-900 h-8 px-3 text-xl rounded border-none'/>
    <label className='  font-sans  text-2xl'>Email</label>
    <input type='text' name='email' placeholder='Email'  className='text-gray-900 h-8 px-3 text-xl rounded border-none'/>
    <label className='  font-sans  text-2xl'>PassWord</label>
    <input type='password' name='password' placeholder='Password'  autoComplete='' className='text-gray-900 h-8 px-3 text-xl rounded border-none'/>
    <label className='  font-sans text-2xl'>Re_PassWord</label>
    <input type='password' name='rePassWord' placeholder='rePassWord'  autoComplete='' className='text-gray-900 h-8 px-3 text-xl rounded border-none'/>
  {state.error}
   <SubmitButton />
   </form>
  )
}

export default RegForm