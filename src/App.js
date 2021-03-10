import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Deatils } from "./componenets/deatils/Deatils";
import { Home } from "./componenets/home/Home";
import { Header } from "./componenets/header/Header";

export default () => {
  return (
    <div className="main-app">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/deatils" component={Deatils} />
        </Switch>
      </Router>
    </div>
  );
};
