import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation"
import Routes from "./routes";
import "./index.css";


ReactDOM.render(
  <BrowserRouter>
    <Navigation />
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
