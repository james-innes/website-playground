import React from "react";
import Gallery from "../components/Gallery"
import Thing from "../../posts/blog-2/index"

export default () => {
  return (
    <article>
      <header>
        <h1>Waldorf Education</h1>
        <p>7 - 16 years at Ringwood Waldorf School</p>
      </header>

      <Gallery/>

      <Thing/>

    </article>
      );
    }
