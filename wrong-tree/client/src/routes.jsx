import React from "react";
import { Switch, Route } from "react-router-dom";
import Gallery from "./Gallery";
import Styleguide from "./Styleguide";
import Home from "./Home";
import Movies from "./Movies";

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/styleguide" component={Styleguide} />
    <Route path="/movies" component={Movies} />
  </Switch>
);
