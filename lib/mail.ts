'use server'
import Handlebars from 'handlebars'
import nodemailer from 'nodemailer'
import { activationTemplate } from './emailTemplate/activation'
type Props = {
    to:string,
    subject:string,
    body:string
}

export const sendMail = async({to,subject,body}: Props) => {
     const{SMTP_Mail,SMTP_Mail_Secret}=process.env
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:SMTP_Mail,
            pass:SMTP_Mail_Secret
        }
    })
   try {
     const verifyresult= await transporter.verify()
     console.log('verify',verifyresult)
   } catch (error) {
    console.log('Error of smtp',error)
   }
   try {
    const sendresult=await transporter.sendMail({from:SMTP_Mail,to,subject,html:body})
   // console.log('sendMail',sendresult)
   return sendresult
   } catch (error) {
    console.log('sendmail',error)
   }
}

export  async function compileActtivationTemp(name:string,url:string) {
    const template= Handlebars.compile(activationTemplate)
    const htmlbody=template({name,url})
    return htmlbody
}