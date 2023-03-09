import React from "react";
import { Routes, Route } from "react-router-dom";
import InitiateTransfer from "./Containers/InitiateTransfer/InitiateTransfer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InitiateTransfer />} />
    </Routes>
  );
}

export default App;
