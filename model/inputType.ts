import {  z } from "zod";

export const Schema=z.object({
    name:z.string().trim().min(5,{ message: "Must be 5 or more characters long" }).max(10,{ message: "Must be 5 or fewer characters long" }),
    email:z.string().email( {message: "Invalid email address" }),
    password:z.string().trim().min(6,{message:'at least 6 char'}).regex(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),{message:' inter valid password'}),
    confirm:z.string().trim(),
    accepted:z.literal(true,{
        errorMap:()=>({
            message:'accepted terms'
        } )
    })
        

  })

  const zodSchema= Schema.refine( data => data.password === data.confirm ,{
    message: "Passwords don't match",
     path: ["confirm"], // path of error
 })

  export type InputType=z.infer<typeof zodSchema> 

   export const schemaLogin=Schema.pick({email:true,password:true})

  export  type  InputLogin=z.infer<typeof schemaLogin>

  export const schemaForget=Schema.pick({email:true})
  export type InputForget=z.infer<typeof schemaForget>

     export   const ResPassSChema=Schema.pick({password:true,confirm:true})
      export  const resPassfine=ResPassSChema.refine(data=>data.password===data.confirm,{
            message: "Passwords don't match",
            path: ["confirm"], // path of error
         })
         export type ResPss=z.infer<typeof resPassfine>