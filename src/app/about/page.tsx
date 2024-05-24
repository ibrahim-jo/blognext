import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-24 ">
      <div className="flex flex-col justify-between  gap-10 ">
        <h2 className=" text-cyan-900 font-bold">About Agency</h2>
        <h1 className=" text-7xl">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className=" text-base text-left  ">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className='flex justify-between content-center'>
          <div className="flex flex-col gap-2">
            <h1 className=" text-3xl text-cyan-900">10K</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className=" text-3xl text-cyan-900">20K</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className=" text-3xl text-cyan-900">30K</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>

      <div className=" relative  w-[100%] h-[500px] hidden md:flex">
        <Image src="/about.png" alt="" fill />
      </div>
    </div>
  );
};

export default about;
