import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import './index.css'
import Login from "./components/login";
import Browser from "./components/Browser";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Login" element={<Login/>} />
      <Route path="Browser" element={<Browser/>} />
    </Routes>
  </BrowserRouter>,
);
