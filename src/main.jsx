import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import './index.css'
import Login from "./components/Login";
import Browser from "./components/Browser";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={appStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Browser" element={<Browser/>} />
      </Routes>
    </BrowserRouter>
    </Provider> 
  );

const main = () =>{
  return <div>Hello</div>
}
export default main;