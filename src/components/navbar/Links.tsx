'use client'
import React, { useState,useEffect } from "react";
import SingleLink from "./SingleLink";
import Image from "next/image";
import { handleLogOut } from "../../../lib/actions";
import { useSession } from "next-auth/react";
import Link from "next/link";

type Props={
  session: any
}
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "About",
    path: "/about",
  },
];
const Links = ({session}:Props) => {
  const [open, setopen] = useState(false);
  const {data:si,status}=useSession()
  //temporary

   
     console.groupCollapsed('Link_SESSion',session)
      
   
    
  const isAdmin = si?.user.isAdmin;
  const handleOpen = () => {
    setopen((prev) => !prev);
    
  };
  return (
    <div className="flex ">
      <div className=" hidden md:flex items-center gap-4 ">
        {links.map((link) => (
          <SingleLink link={link} key={link.title} />
        ))}
        {session? (
          <>
            {isAdmin && (
              <SingleLink link={{ path: "/admin", title: "Admin" }} />
            )}
            <form action={handleLogOut}>
            <button className="p-1 bg-white text-black  font-bold rounded-sm">
              LogOut
            </button>
            </form>
          </>
        ) : (
          <SingleLink link={{ path: "/login", title: "LogIn" }} />
        )}
        <Link href={'/profile'} >{si?.user.name}</Link>
      </div>
      <button className="  block md:hidden " onClick={handleOpen}>
        <Image src='/menu.png' alt='menu' width={30} height={30} />
       
      </button>
      {open && (
        <div className="  absolute flex md:hidden flex-col  justify-center  items-center gap-6 top-20 h-[calc(100vh-4rem)] w-1/2 right-0">
          {links.map((link) => (
            <SingleLink link={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;

