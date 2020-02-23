import React from "react";
import { Switch, Route } from "react-router-dom";
import Rws from "./Rws";
import Styleguide from "./Styleguide";
import Home from "./Home";
import Movies from "./Movies";

export default () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route path="/rws" component={Rws} />
    <Route path="/styleguide" component={Styleguide} />
    <Route path="/movies" component={Movies} />
  </Switch>
);
