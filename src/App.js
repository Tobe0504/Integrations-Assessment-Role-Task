import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import InitiateTransfer from "./Containers/InitiateTransfer/InitiateTransfer";
import ProjectDocumentation from "./Containers/ProjectDocumentation/ProjectDocumentation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/transfer" />} />
      <Route exact path="/transfer" element={<InitiateTransfer />} />
      <Route
        exact
        path="/project-documentation"
        element={<ProjectDocumentation />}
      />
    </Routes>
  );
}

export default App;
