import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <section>
        <nav>
          <ul>
            <li>
              <Link to="/styleguide">Styleguide</Link>
            </li>
            <li>
              <Link to="/Somthing">Somthing</Link>
            </li>
          </ul>
        </nav>
      </section>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
