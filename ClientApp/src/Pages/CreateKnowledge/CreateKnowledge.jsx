import React from "react";
import Header from "../../components/Header";
import { createKnowledge } from "../../SideNavList";
import SideNav from "../components/SideNav";

const CreateKnowledge = () => {
  return (
    <div>
      <Header headerText={"Create Knowledge Asset"} />
      <SideNav navList={createKnowledge} />
    </div>
  );
};

export default CreateKnowledge;
