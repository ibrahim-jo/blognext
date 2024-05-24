import { auth } from "../../../lib/auth"

 

const page =async () => {
    const session= await auth()
    const user=session?.user
  return (
    <div>
        {user?.name}
    </div>
  )
}

export default page