import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import App from "./App";
import Sucess from "./Sucess";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/zap" element={<Sucess />} />
    </Routes>
  </BrowserRouter>
);
