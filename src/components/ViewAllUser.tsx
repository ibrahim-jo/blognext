"use client";
import React, { useState } from "react";
import Image from "next/image";
import { User } from "../../type";
import { DeleteUser } from "../../lib/actions";
import OptionList from "./OptionList";
import PopUp from "./popup";

type Props = {
  users: User[];
};

const ViewAllUser = ({ users }: Props) => {
  const [message, setmessage] = useState("");
  const [open, setopen] = useState(false)
  const [id, setid] = useState('')
 
   const edithandle=(id:string)=>{
    setid(prev=>id)
    setopen(true)
   }
  const deletehandle = async (id: string) => {
    const res = await DeleteUser(id);

    setmessage(res);
  };
  return (
    <>
      {users.map((user) => {
        return (
          <div
            key={user.id}
            className="  bg-slate-600 flex flex-row justify-around items-center  my-5 text-center "
          >
            <span className="  text-left w-1/5">{user.name}</span>
            <Image
              src={user.img ? user.img : "/noavatar.png"}
              alt="avatar"
              width={50}
              height={30}
              className=" rounded-full"
            />
            <span className="w-1/5 text-left">{user.email}</span>
            <OptionList /> 
            <span className="w-1/5 text-center">
              {user.isAdmin ? <span>Admin</span> : <span>user</span>}
            </span>

            <div className="w-1/5 flex justify-around text-center  gap-2">
              <button 
              className=" w-1/2 bg-blue-400  rounded-md"
              onClick={(e)=>edithandle(user.id)}>
                Edit 
                </button>
              <button
                className=" w-1/2 bg-red-500  rounded-md"
                onClick={(e) => deletehandle(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
       <PopUp open={open} onclose={()=>{setopen(false)}}  id={id} />
      {message}
      
    </>
  );
};

export default ViewAllUser;
