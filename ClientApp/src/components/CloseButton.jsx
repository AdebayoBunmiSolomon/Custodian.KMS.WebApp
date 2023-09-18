import React from "react";
import { GrFormClose } from "react-icons/gr";

const CloseButton = ({ onClick }) => {
  return (
    <div className='flex flex-row justify-end'>
      <button
        className='mr-2 mt-2 bg-[white] focus:outline-none focus:ring duration-500 hover:cursor-pointer hover:bg-[whitesmoke] text-white rounded-full'
        onClick={onClick}>
        <GrFormClose size={20} />
      </button>
    </div>
  );
};

export default CloseButton;
