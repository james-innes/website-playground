import React from "react";
// import MoviesJson from "./assets/json/Desination/Movies";

export default function Movies() {
  return (
    <article>
      <header>
        <h1>Movies</h1>
      </header>

      <div class="gallery">
        {/* {MoviesJson.map(x => (
          <img src={`http://img.omdbapi.com/?apikey=4f17f8ee&i=${x.Const}`} />
        ))} */}
      </div>
    </article>
  );
}
