import React from 'react'

type Props = {
    strengthPass:number
}

const CheckPass = ({strengthPass}: Props) => {
    const strength= Array.from({length:strengthPass+1})
  return (
    <div className='w-full flex  items-center h-5 gap-2'>
      {strength.map((i,index)=>(
        <div  key={index} className='  w-10 rounded-md h-4 flex bg-red-500' />
      ))
}
</div>
)
}

export default CheckPass