import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import Routes from "./routes";
import Navigation from "./Navigation";

ReactDOM.render(
  <BrowserRouter>
    <Navigation />
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
