import { CloseCircleOutlined } from "@ant-design/icons";
import React from "react";
import FormPupUp from "./FormPupUp";

type Props = {
  open: boolean;
  onclose: () => void;
  id: string;
};

const PopUp = ({ open, onclose, id }: Props) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center  transition-colors ${
        open ? "visible bg-black/20 bg-opacity-30  backdrop-blur-sm " : "invisible"
      }`}
      onClick={onclose}
    >
      <div
        className={`bg-white p-6 shadow transition-all  max-w-xl  ${
          open ? "scale-100 opacity-100" : "scale-110 opacity-0"
        } `}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        
          <CloseCircleOutlined className=" absolute  top-2 right-2    text-red-400 bg-white hover:bg-red-50 hover:text-red-500"  onClick={onclose} />
       
        <div className="flex flex-col ">
          <h1 className="text-black">Edit Role</h1>
          <div className="flex flex-row ">
 
          <FormPupUp />
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
