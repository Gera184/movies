import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Deatils } from "./componenets/deatils/Deatils";
import { Home } from "./componenets/home/Home";

export default () => {
  return (
    <div className="main-app">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route exact path="/deatils" component={Deatils} />
        </Switch>
      </Router>
    </div>
  );
};
