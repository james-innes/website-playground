/* eslint-disable jsx-a11y/alt-text */
import React from "/web_modules/react.js";
import urls from "./assets/json/urls";
export default function Gallery() {
  return React.createElement("article", null, React.createElement("header", null, React.createElement("h1", null, "Waldorf Education"), React.createElement("p", null, "7 - 16 years at Ringwood Waldorf School")), React.createElement("div", {
    class: "gallery"
  }, [1, 3, 4, 5, 6].map(x => React.createElement("img", {
    src: `./assets/img/${x}.jpg`
  }))), React.createElement("div", {
    class: "gallery"
  }, urls.map(x => React.createElement("img", {
    src: x
  }))));
}