/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import urls from "./urls";

export default function Gallery() {
  return (
    <article>
      <header>
        <h1>Waldorf Education</h1>
        <p>7 - 16 years at Ringwood Waldorf School</p>
      </header>

      <div class="gallery">
        {[1, 3, 4, 5, 6].map(x => (
          <img src={process.env.PUBLIC_URL + `/img/${x}.jpg`} />
        ))}
      </div>

      <div class="gallery">
        {urls.map(x => (
          <img src={x} />
        ))}
      </div>
    </article>
  );
}
