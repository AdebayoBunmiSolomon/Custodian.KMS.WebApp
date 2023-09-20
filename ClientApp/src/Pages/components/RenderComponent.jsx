import React from "react";
import OverView from "./OverView";
import Permission from "./Permission";
import Content from "./Content";
import Search from "./Search";

const RenderComponent = ({ componentState, clearState }) => {
  const component = componentState;

  return (
    <div className='w-screen h-screen flex flex-row justify-center pt-12'>
      {(() => {
        switch (component) {
          case "Overview":
            return <OverView onClick={clearState} />;
          case "Permission":
            return <Permission onClick={clearState} />;
          case "Content":
            return <Content onClick={clearState} />;
          case "Search":
            return <Search onClick={clearState} />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default RenderComponent;
