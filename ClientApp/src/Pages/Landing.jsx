import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { FcAddRow } from "react-icons/fc";
import ButtonCard from "../components/ButtonCard";
import logo from "../assets/Custodian_Logo.png";
import { FcVoicePresentation } from "react-icons/fc";
import SearchKnowledge from "./SearchKnowledge";
import CreateKnowledge from "./CreateKnowledge";
import AdministerKnowledge from "./AdministerKnowledge";

const Landing = () => {
  let [isState, setIsState] = useState("");

  const onClickSearch = (e) => {
    e.preventDefault();
    setIsState((isState = "search"));
    console.log(isState);
  };

  const onClickCreate = (e) => {
    e.preventDefault();
    setIsState((isState = "create"));
    console.log(isState);
  };

  const onClickAdminister = (e) => {
    e.preventDefault();
    setIsState((isState = "administer"));
    console.log(isState);
  };

  const clearState = (e) => {
    e.preventDefault();
    setIsState((isState = ""));
    console.log(isState);
  };

  const MainPage = () => {
    return (
      <div className='flex flex-col space-y-0 w-screen h-screen items-center top-0 fixed bg-[white]'>
        <div className='flex items-center w-screen h-28 bg-white shadow-lg'>
          <div>
            <img src={logo} height={100} width={100} alt='custodian' />
          </div>
          <div className='flex justify-center w-screen'>
            <h1 className=' text-[#A73439] font-bold text-[40px]'>
              Knowledge Management Portal
            </h1>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center h-screen w-screen space-x-10'>
          <div>
            <ButtonCard
              text={"Search"}
              icon={<FcSearch size={100} />}
              onClick={onClickSearch}
            />
          </div>
          <div>
            <ButtonCard
              text={"Create"}
              icon={<FcAddRow size={100} />}
              onClick={onClickCreate}
            />
          </div>
          <div>
            <ButtonCard
              text={"Administer"}
              icon={<FcVoicePresentation size={100} />}
              onClick={onClickAdminister}
            />
          </div>
        </div>
      </div>
    );
  };

  if (isState === "") {
    return (
      <>
        <MainPage />
      </>
    );
  } else if (isState === "search") {
    return (
      <>
        <MainPage />
        <SearchKnowledge onClick={clearState} />
      </>
    );
  } else if (isState === "create") {
    return (
      <>
        <MainPage />
        <CreateKnowledge onClick={clearState} />
      </>
    );
  } else if (isState === "administer") {
    return (
      <>
        <MainPage />
        <AdministerKnowledge onClick={clearState} />
      </>
    );
  }
};

export default Landing;
