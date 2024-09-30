import React from "react";
import AssessoriesCopen from "./Components/AssessoriesCopen/AssessoriesCopen";
import {Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BabiesCopen from "./Components/BabiesCopen/BabiesCopen";
import ElectronicsCopen from "./Components/ElectronicsCopen/ElectronicsCopen";
import HealthCareCopen from "./Components/HealthCareCopen/HealthCareCopen";
import BikeCopne from "./Components/BikeCopen/BikeCopne";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assessories" element={<AssessoriesCopen />} />
        <Route path="/babiescopen" element={<BabiesCopen/>} />
        <Route path="/bikecopen" element={<BikeCopne/>} />
        <Route path="/electronicscopen" element={<ElectronicsCopen/>} />
        <Route path="/healthcarecopen" element={<HealthCareCopen/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
