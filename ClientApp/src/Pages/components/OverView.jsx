import React from "react";
import { FaMicroscope } from "react-icons/fa";

const OverView = ({ onClick }) => {
  return (
    <div className='flex bg-[white] shadow-lg rounded-md w-[50vw] h-[35vw] overflow-hidden justify-start pl-5 pt-2 absolute'>
      <div className='flex flex-col space-y-3'>
        <div className='flex flex-row items-start'>
          <h1 className=' text-[gray] font-bold text-[20px]'>Overview</h1>
          &nbsp;&nbsp;
          <FaMicroscope size={25} color='gray' />
        </div>
      </div>

      <div className='flex flex-row items-end justify-end w-screen relative'>
        <button
          className='bg-[#A73439] focus:outline-none 
        focus:ring duration-500 hover:cursor-pointer 
        hover:bg-[#a7343ae5] text-white w-[5vw] 
        h-[42px] rounded-md mr-5 mb-3'
          onClick={onClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default OverView;
