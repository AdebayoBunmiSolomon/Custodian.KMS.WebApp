import React from "react";

const ButtonCard = ({ text, icon, onClick }) => {
  return (
    <div
      className='w-[220px] h-[200px] bg-[white] hover:bg-[whitesmoke] duration-500 hover:cursor-pointer rounded-md shadow-lg border'
      onClick={onClick}>
      <div className='flex flex-col space-y-2 pt-10'>
        <div className='flex flex-row justify-center'>
          <p className=' text-[15px] font-medium'>{text}</p>
        </div>
        <div className='flex flex-row justify-center'>
          <i>{icon}</i>
        </div>
      </div>
    </div>
  );
};

export default ButtonCard;
