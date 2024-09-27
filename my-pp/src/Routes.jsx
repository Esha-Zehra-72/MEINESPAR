import React from "react";
import AssessoriesCopen from "./Components/AssessoriesCopen/AssessoriesCopen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import GroupButtons from "../src/Components/GroupButtons/GroupButtons"
import HomePage from "./Pages/HomePage";
const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assessories" element={<AssessoriesCopen />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
