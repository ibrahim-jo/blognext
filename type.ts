export type post={
    userId:string,
    id:string,
    title:string,
    body:string,
    desc:string
    slug:string,
    img:string,
    createdAt:string
  }

  export type User={
    
      id: string,
      name: string,
      username: string,
      email: string,
      phone: string,
      website: string,
      img:string,
      isAdmin?:string
      

  }