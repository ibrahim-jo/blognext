'use server'
import Prisma from "../util/connect"
import { signIn, signOut } from "./auth"
import { User } from "@prisma/client"
import * as bcrypt from 'bcrypt'
import { InputLogin } from "../model/inputType"
import { AuthError } from "next-auth"
import { compileActtivationTemp, sendMail } from "./mail"
import { signJwt, verifyJwt } from "./jwt"
import { revalidatePath } from "next/cache"

export const handleLogIn=async () => {
    await signIn('github')
  }

  export const handleLogOut=async () => {
    await signOut()
  }
  ////registration 
  export type StateForm={
    error?:string ,
    succsess?:string ,
  }
  export const  handleReg=async(previousState:StateForm,formdata:FormData)=>{
    console.log('what the fuck')
   const {name,email,password,rePassWord}=Object.fromEntries(formdata) 
   if(password !==rePassWord){
   
    return {error:"no match password"};
    
   }
   //const name=formdata.get('name')
   try {
      const isuser=await Prisma.user.findUnique({where:{email:email as string}})
      if(isuser){
      
       return {error:"email is exist"}
      }
       const newUser={
         name:name as string ,
         email:email as string ,
         Password:password  as string,
         isAdmin:false}

      const  user= await Prisma.user.create({data:{name:newUser.name,password:newUser.Password,email:newUser.email,isAdmin:newUser.isAdmin}})
       console.log(user)
    } catch (error) {
      
    }
    return {succsess:'success'}
   // redirect('/')
    
  }

  
  export const LogInCredential=async(data:InputLogin)=>{
      const {email,password}= data
try {
  await signIn(('credentials'),{redirectTo:'/', email,password})
  
} catch (error) {
  if(error instanceof AuthError){
    switch (error.type) {
        case 'CredentialsSignin':
            return {error:'invalid pass or  not active user'}

            case 'CallbackRouteError':
            return {error:'send email to verify'}
        default:
           return {error:'try agin'}
    }
}
throw error
}
    }
      
   
  

  export const testRegister=async(user:Omit<User,'id'|'isAdmin'|'img'|'verify' >)=>{
     
    try {
      const  isUserExist=await Prisma.user.findUnique({where:{email:user.email!}})
      if(isUserExist){
      throw new Error("user Exists")
      }
       const newuser=await Prisma.user.create({data:{...user,password:await bcrypt.hash(user.password,10)}})
       const jwtId=signJwt({id:newuser.id})
       const activationUrl=`${process.env.NEXTUTH_URL}/activation/${jwtId}`
       const body=await compileActtivationTemp(user.name,activationUrl)
       await sendMail({to:user.email,subject:'Active yout acc',body})
          revalidatePath('/admin')
        return {data:newuser}
      }
       catch (error) {
         if(error instanceof Error){
           
          return{error:error.message}
         }
        return {error:'something Wrong '}
      }
  }

  type ActiveUserFunction=(jwtId:string)=>Promise<'usernotExist'|'useractivate'|'success'>

  export const activeUser:ActiveUserFunction=async(jwtId)=>{
    const payloadId= verifyJwt(jwtId)
    const userId=payloadId?.id
   
   const user =await Prisma.user.findUnique({where:{id:userId}})
   if(!user)return 'usernotExist'
   if(user.verify) return 'useractivate'
   const userjwt=await Prisma.user.update({where:{id:userId},data:{verify:new Date()}})
   return 'success'
  }

  export const reSetPassEmail=async(email:string )=>{
    const user=await Prisma.user.findUnique({where:{email:email}})
    if(!user)throw new Error("user not exist");
    const token=await signJwt({id:user.id})
    const urlreset=`${process.env.NEXTUTH_URL}/resetpass/${token}`
    const body= await compileActtivationTemp(user.name,urlreset)
   const resultSend= await sendMail({to:user.email,subject:'resetpass',body})
    return resultSend?.accepted
  }

  type RestPassFunction=(id:string,newPass:string)=>Promise<'success'|'user not Exist'>

  export const restPass:RestPassFunction=async(id,newPass)=>{
    const payload= verifyJwt(id)
    if(!payload) return 'user not Exist'
    const  userId=payload.id
    const  user=await Prisma.user.findUnique({where:{id:userId}})
    if(!user) throw new Error("user not Exist");
     "user not Exist"
      const pass=await bcrypt.hash(newPass,10)
      await Prisma.user.update({where:{id:userId},data:{password:pass}})
 return 'success'
  }

  type DeleteUser=(id:string)=>Promise<'success'|'Wrong'>
    
  export const DeleteUser:DeleteUser=async(id)=>{
    console.log('userid',id)
    try {
      await Prisma.user.delete({
       where:{id:id}
      })
      revalidatePath('/admin')
       return 'success'
      
    } 
    catch (error) {
      if(error instanceof Error)
        console.log('deleteuser',error)
       return 'Wrong'
      
    }
  }