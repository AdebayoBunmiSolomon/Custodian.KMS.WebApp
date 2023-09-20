import React from "react";
import "./custom.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import CreateKnowledge from "./Pages/CreateKnowledge/CreateKnowledge";
import SearchKnowledge from "./Pages/SearchKnowledge/SearchKnowledge";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/CreateKnowledge' element={<CreateKnowledge />} />
      <Route path='/SearchKnowledge' element={<SearchKnowledge />} />
    </Routes>
  );
};

export default App;
