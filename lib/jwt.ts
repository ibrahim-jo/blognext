import jwt, { JwtPayload } from 'jsonwebtoken'

interface expireOption{
    expireIn:string
}

const Default_expire:expireOption={
    expireIn:'1d'
}

export const signJwt=(payload:JwtPayload,option:expireOption=Default_expire)=>{
    const secret=process.env.JWT_SECRET_USER!
   const token=jwt.sign(payload,secret)
   console.log('tokenJwT',token)
   return token
}

export const  verifyJwt=(token:string)=>{
   try {
       const secret=process.env.JWT_SECRET_USER!
      const decode=jwt.verify(token,secret)
      return decode as JwtPayload
     
   } catch (error) {
     console.log(error)
   }
}

