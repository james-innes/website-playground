import React from "/web_modules/react.js";
import { Switch, Route } from "/web_modules/react-router-dom.js"; // import Gallery from "./Gallery.js";

import StyleGuide from "./StyleGuide.js";
import Home from "./Home.js"; // import Movies from "./Movies.js";

export default (() => React.createElement(Switch, null, React.createElement(Route, {
  exact: true,
  path: "/",
  component: Home
}), React.createElement(Route, {
  path: "/StyleGuide",
  component: StyleGuide
})));