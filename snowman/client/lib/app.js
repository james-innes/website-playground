import React from "/web_modules/react.js";
import ReactDOM from "/web_modules/react-dom.js";
import { BrowserRouter } from "/web_modules/react-router-dom.js";
import Routes from "./routes.js";
import Navigation from "./Navigation.js";
ReactDOM.render(React.createElement(BrowserRouter, null, React.createElement(Navigation, null), React.createElement(Routes, null)), document.getElementById("root"));