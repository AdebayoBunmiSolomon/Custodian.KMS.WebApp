import React from "react";
import logo from "../assets/Custodian_Logo.png";
import man from "../assets/man.png";

const Header = ({ headerText }) => {
  return (
    <div className='flex flex-row items-center w-screen h-20 top-0 bg-white shadow-lg fixed z-10'>
      <div>
        <img src={logo} height={100} width={100} alt='custodian' />
      </div>
      <div className='flex flex-row justify-center w-screen'>
        <h1 className=' text-[#A73439] font-bold text-[30px] pl-[150px]'>
          {headerText}
        </h1>
      </div>
      <img src={man} alt='user_logo' className='h-8 mr-2' />
      <span className='font-bold text-[gray] mr-2 w-64'>John Doe</span>
    </div>
  );
};

export default Header;
