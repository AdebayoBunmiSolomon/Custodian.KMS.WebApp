import React, { useState } from "react";
import RenderComponent from "./RenderComponent";
import { BiArrowBack } from "react-icons/bi";

const SideNav = ({ navList }) => {
  let [isState, setIsState] = useState("");

  return (
    <div className='flex flex-row w-screen h-screen fixed mt-[81px]'>
      <div className='bg-[#A73439] w-[20%] h-[100%] shadow-lg'>
        <ul className='flex flex-col space-y-1'>
          {navList.map((item, index) => {
            return (
              <li
                className='h-12 hover:bg-[#cf5e64d5] duration-700 hover:cursor-pointer overflow-y-hidden'
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setIsState((isState = String(item.path)));
                  console.log(isState);
                }}>
                <a
                  href={item.path}
                  className='flex flex-row gap-11 pt-[11px] text-white text-[15px] pl-2'>
                  <i className='pt-[4px]'>{item.icon}</i>
                  {item.name}
                </a>
              </li>
            );
          })}
          <li className='h-12 hover:bg-[#cf5e64d5] duration-700 hover:cursor-pointer overflow-y-hidden'>
            <a
              href='/'
              className='flex flex-row gap-11 pt-[11px] text-white text-[15px] pl-2'>
              <i className='pt-[4px]'>
                <BiArrowBack />
              </i>
              Go back
            </a>
          </li>
        </ul>
      </div>
      <RenderComponent
        componentState={isState}
        clearState={() => {
          setIsState((isState = ""));
        }}
      />
    </div>
  );
};

export default SideNav;
