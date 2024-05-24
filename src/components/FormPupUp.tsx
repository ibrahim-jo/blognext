import React,{useState} from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {}
enum AdminEnum{
    user='user',
    admin='admin'
}
type InputSelect={
    isAdmin:AdminEnum
}
const FormPupUp = (props: Props) => {
    const [isAdmin, setisAdmin] = useState<string>('')
    const {register,handleSubmit}=useForm<InputSelect>()
    const onSubmit:SubmitHandler<InputSelect>=(data)=>{
        
            setisAdmin(data.isAdmin)
       
    }
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-2 gap-3'>
    <select className="text-black border border-red-400  rounded-md  " {...register('isAdmin')} >
    <option  value='user'>select the role</option>
        <option  value='admin'>Admin</option>
        <option value='user' >user</option>
    </select>
    <button type='submit' className='text-black border border-red-400 rounded-md hover:bg-slate-400 text-slate-300'>OK</button>
  </form>
  <p className='text-red-500'> {isAdmin}</p>
  </>
  )
}

export default FormPupUp