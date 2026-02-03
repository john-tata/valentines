import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Ask from "./pages/Ask";
import Yes from "./pages/Yes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Ask />} />
      <Route path="/yes" element={<Yes />} />
    </Routes>
  </HashRouter>
);
