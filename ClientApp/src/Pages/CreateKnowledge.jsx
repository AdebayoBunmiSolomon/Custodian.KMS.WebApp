import React from "react";
import { FcAddRow } from "react-icons/fc";
import CloseButton from "../components/CloseButton";

// const categoryOptions = [
//   {
//     option: "Policy Renewal",
//     category: "Adapt-Life",
//   },
//   {
//     option: "Payment Transaction",
//     category: "Max",
//   },
//   {
//     option: "Insurance Services",
//     category: "General",
//   },
// ];

const CreateKnowledge = ({ onClick }) => {
  return (
    <div className='w-screen h-screen bg-[#000002bd] top-0 fixed'>
      <CloseButton onClick={onClick} />
      <div className='w-screen h-screen flex justify-center items-center pt-[-5px]'>
        <div className='flex bg-[whitesmoke] shadow-lg rounded-md w-[50vw] h-[35vw] overflow-y-scroll justify-center items-center'>
          <div className='flex flex-col space-y-3'>
            <div className='flex flex-row items-start'>
              <h1 className=' text-[#A73439] font-bold text-[40px]'>
                Create Asset
              </h1>
              &nbsp;&nbsp;
              <FcAddRow size={50} />
            </div>
            {/* Forms */}
            {/* <div className='flex flex-col space-y-5'>
              <div>
                <label className='text-[15px] font-medium'>Username</label>
                <input
                  type='text'
                  className='w-[30vw] h-[30px] pl-2 ml-5 rounded-md overflow-hidden text-sm font-bold border-white focus:outline-none'
                />
              </div>
              <div>
                <label className='text-[15px] font-medium'>Question</label>
                <input
                  type='text'
                  className='w-[30vw] h-[30px] pl-2 ml-[1.59rem] rounded-md overflow-hidden text-sm font-bold border-white focus:outline-none'
                />
              </div>
              <div>
                <label className='text-[15px] font-medium'>Category</label>
                <DropDown options={categoryOptions} />
              </div>
              <div className='flex flex-row justify-end'>
                <button className='ml-2 bg-[#A73439] focus:outline-none focus:ring duration-500 hover:cursor-pointer hover:bg-[#a7343ae5] text-white'>
                  create question
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateKnowledge;
