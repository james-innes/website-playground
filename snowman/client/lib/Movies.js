/* eslint-disable jsx-a11y/alt-text */
import React from "/web_modules/react.js";
import MoviesJson from "./assets/json/Desination/Movies";
export default function Movies() {
  return React.createElement("article", null, React.createElement("header", null, React.createElement("h1", null, "Movies")), React.createElement("div", {
    class: "gallery"
  }, MoviesJson.map(x => React.createElement("img", {
    src: `http://img.omdbapi.com/?apikey=4f17f8ee&i=${x.Const}`
  }))));
}