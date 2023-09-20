import React from "react";
import { FcSearch } from "react-icons/fc";
import { FcAddRow } from "react-icons/fc";
import ButtonCard from "../components/ButtonCard";
import { FcVoicePresentation } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Landing = () => {
  const navigate = useNavigate();

  const onClickSearch = () => {
    navigate("/SearchKnowledge");
    // e.preventDefault();
    // setIsState((isState = "search"));
    // console.log(isState);
  };

  const onClickCreate = () => {
    navigate("/CreateKnowledge");
    // e.preventDefault();
    // setIsState((isState = "create"));
    // console.log(isState);
  };

  const onClickAdminister = () => {
    navigate("/CreateKnowledge");
    // e.preventDefault();
    // setIsState((isState = "administer"));
    // console.log(isState);
  };
  return (
    <>
      <Header headerText={"Knowledge Management Portal"} />
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
    </>
  );
};

export default Landing;
