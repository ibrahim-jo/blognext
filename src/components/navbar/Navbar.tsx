import React from 'react'
import Links from './Links'
import Link from 'next/link'
import { auth } from '../../../lib/auth'

const Navbar = async() => {
    const session= await auth()
    console.log('forntend_auth',session)
  return (
    <div className=' h-24 flex justify-between items-center' >
      <div className=' font-bold  size-14' >
        <Link href='/'>
        logo
        </Link>
        </div>
      <div>
      <Links  session={session}/>
      </div>
    </div>
  )
}

export default Navbar