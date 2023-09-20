import React from "react";
import Header from "../../components/Header";
import { searchKnowledge } from "../../SideNavList";
import SideNav from "../components/SideNav";

const SearchKnowledge = () => {
  return (
    <>
      <Header headerText={"Search Knowledge Asset"} />
      <SideNav navList={searchKnowledge} />
    </>
  );
};

export default SearchKnowledge;
