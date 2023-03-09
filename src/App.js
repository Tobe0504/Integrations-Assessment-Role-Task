import React from "react";
import { Routes, Route } from "react-router-dom";
import InitiateTransfer from "./Containers/InitiateTransfer/InitiateTransfer";
import ProjectDocumentation from "./Containers/ProjectDocumentation/ProjectDocumentation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InitiateTransfer />} />
      <Route path="/project-documentation" element={<ProjectDocumentation />} />
    </Routes>
  );
}

export default App;
