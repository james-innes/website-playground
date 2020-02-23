import React from "/web_modules/react.js";
import { Link } from "/web_modules/react-router-dom.js";
export default (() => {
  return React.createElement("section", null, React.createElement("nav", null, React.createElement("ul", null, React.createElement("li", null, React.createElement(Link, {
    to: "/styleguide"
  }, "Styleguide")), React.createElement("li", null, React.createElement(Link, {
    to: "/gallery"
  }, "Gallery")), React.createElement("li", null, React.createElement(Link, {
    to: "/movies"
  }, "Movies")))));
});