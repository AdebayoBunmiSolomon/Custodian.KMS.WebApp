import React from "react";
import CloseButton from "../components/CloseButton";
import { FcVoicePresentation } from "react-icons/fc";

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

const AdministerKnowledge = ({ onClick }) => {
  return (
    <div className='w-screen h-screen bg-[#000002bd] top-0 fixed'>
      <CloseButton onClick={onClick} />
      <div className='w-screen h-screen flex justify-center items-center pt-[-5px]'>
        <div className='flex bg-[whitesmoke] shadow-lg rounded-md w-[50vw] h-[35vw] overflow-hidden justify-center items-center'>
          <div className='flex flex-col space-y-3'>
            <div className='flex flex-row items-start'>
              <h1 className=' text-[#A73439] font-bold text-[40px]'>
                Administer Knowledge
              </h1>
              &nbsp;&nbsp;
              <FcVoicePresentation size={50} />
            </div>
            {/* Forms */}
            {/* <div className='flex flex-col space-y-5'>
              <div>
                <label className='text-[15px] font-medium'>Question</label>
                <DropDown options={categoryOptions} />
              </div>
              <div>
                <label className='text-[15px] font-medium'>Category</label>
                <DropDown options={categoryOptions} />
              </div>
              <div>
                <label className='text-[15px] font-medium'>Created By</label>
                <input
                  type='text'
                  className='w-[30vw] h-[30px] pl-2 ml-3 rounded-md overflow-hidden text-sm font-bold border-white focus:outline-none'
                />
              </div>
              <div>
                <label className='text-[15px] font-medium'>Knowledge</label>
                <textarea
                  type='text'
                  className='w-[30vw] pl-2 ml-[0.6rem] rounded-md overflow-hidden text-sm font-bold border-white focus:outline-none'
                  rows={3}
                />
              </div>
              <div className='flex flex-row justify-end'>
                <button className='ml-2 bg-[MediumSeaGreen] focus:outline-none focus:ring duration-500 hover:cursor-pointer hover:bg-[MediumSpringGreen] text-white'>
                  Administer
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministerKnowledge;
