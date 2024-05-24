import ResPassForm from '@/components/ResPassForm'
import React from 'react'

type Props = {
    params:{
        id:string
    }
}

const restpass = ({params:{id}}: Props) => {
  return (
    <div>
      <ResPassForm id={id} />
      </div>
  )
}

export default restpass