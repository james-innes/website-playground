import React from "react";
import { Switch, Route } from "react-router-dom";
import Gallery from "./Gallery";
import Styleguide from "./Styleguide";
import App from "./App";

const Routes = () => (
  <Switch>
    <Route exact path="/" />
    <Route path="/gallery">
      <Gallery />
    </Route>
    <Route path="/styleguide">
      <Styleguide />
    </Route>
  </Switch>
);

export default Routes;
