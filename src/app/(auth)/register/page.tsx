import React from 'react'
import { Reg } from '../../../../lib/getData'
import { handleReg } from '../../../../lib/actions'
import SubmitButton from '@/components/SubmitButton'
import RegForm from '@/components/RegForm'
import RegForm2 from '@/components/RegTest'
const page = () => {
  
  return (
    <div className=' w-full flex  items-center justify-center bg-black-400'>
    {/* <RegForm /> */}
    <RegForm2 />
  </div>
  )
}

export default page