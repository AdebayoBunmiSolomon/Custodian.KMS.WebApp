import React from "react";
import { FcSearch } from "react-icons/fc";
import CloseButton from "../components/CloseButton";

const SearchKnowledge = ({ onClick }) => {
  return (
    <div className='w-screen h-screen bg-[#000002bd] top-0 fixed'>
      <CloseButton onClick={onClick} />
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='flex flex-col space-y-2'>
          <div className='flex flex-row'>
            <h1 className=' text-[white] font-bold text-[40px]'>
              Search knowledge
            </h1>
            &nbsp;&nbsp;
            <FcSearch size={50} />
          </div>
          <div className=' w-[50vw]'>
            <input
              type='text'
              placeholder='search here'
              className='w-[40vw] h-[42px] pl-2 rounded-md overflow-hidden text-sm font-bold border-white focus:outline-none'
            />
            <button className='ml-2 bg-[#A73439] focus:outline-none focus:ring duration-500 hover:cursor-pointer hover:bg-[#a7343ae5] text-white w-[5vw] h-[42px] rounded-md'>
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchKnowledge;
