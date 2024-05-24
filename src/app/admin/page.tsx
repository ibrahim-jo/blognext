import React from 'react'
import { User } from '../../../type'
import { allUsers } from '../../../lib/getData'
import ViewAllUser from '@/components/ViewAllUser'

 const admin =async () => {
  const users= await allUsers()
  return (
    <div className=' flex flex-col gap-3'>
      <ViewAllUser users={users} />
      <div>AllPosts</div>
    </div>
  )
}
export default admin
