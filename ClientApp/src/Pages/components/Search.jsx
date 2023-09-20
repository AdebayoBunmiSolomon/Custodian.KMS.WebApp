import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const Search = ({ onClick }) => {
  return (
    <div className='flex flex-col space-y-3 bg-[white] rounded-md w-[70vw] h-[35vw] overflow-hidden justify-center items-center pl-5 pt-2 absolute'>
      {/* <div className='flex flex-col space-y-4'> */}
      <div className='flex flex-row items-start w-64'>
        <h1 className=' text-[gray] font-bold text-[20px]'>
          Search asset here
        </h1>
        &nbsp;&nbsp;
        <BiSearchAlt size={25} color='gray' />
      </div>

      <div className='flex flex-row'>
        <input
          type='text'
          placeholder='search here'
          className='w-[40vw] h-[42px] pl-2 rounded-md overflow-hidden text-sm font-bold focus:outline-none border-[whitesmoke] border'
        />
        <button className='ml-2 bg-[#A73439] focus:outline-none focus:ring duration-500 hover:cursor-pointer hover:bg-[#a7343ae5] text-white w-[5vw] h-[42px] rounded-md'>
          search
        </button>
      </div>
    </div>
  );
};

export default Search;
