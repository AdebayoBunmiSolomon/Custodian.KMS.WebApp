import React from "react";

const DropDown = ({ options }) => {
  let categoryOptions = options;
  return (
    <>
      <select className='w-[30vw] h-[30px] pl-2 ml-[1.59rem] rounded-md overflow-hidden text-sm font-bold border-white focus:outline-none'>
        {categoryOptions.map((list, index) => {
          return (
            <option key={index}>
              {list.option} - {list.category}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropDown;
