import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import Routes from "./pages/routes.js";
import Navigation from "./components/Navigation.js";

ReactDOM.render(
  <BrowserRouter>
    <Navigation />
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
