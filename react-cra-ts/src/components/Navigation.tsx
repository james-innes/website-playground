import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link to="/styleguide">StyleGuide</Link>
          </li>
          <li>
            <Link to="/rws">Rws</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
