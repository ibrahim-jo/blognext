import React from 'react'
import { activeUser } from '../../../../../lib/actions'

type Props = {
    params:{
        id:string
    }
}

const activation =async ({params}: Props) => {
 const result=await activeUser(params.id)
  return (
    <div>{result}</div>
  )

}

export default  activation