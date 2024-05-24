'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
   link:{
    path:string,
    title:string
   }

}

const SingleLink = ({link}: Props) => {
  const pathName=usePathname()
  return (
    <Link href={link.path} className={`${link.path===pathName?' bg-white text-black  rounded-lg  px-2 py-0':null}`}> {link.title}</Link>
  )
}

export default SingleLink