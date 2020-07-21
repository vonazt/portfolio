import React from "react";
import "./assets/main.css";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { SiteContainer, HeroLanding, About } from "./components";

const App = () => {
  return (
    <SiteContainer>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path={`/about`} component={About} />
          <Route path={`/`} component={HeroLanding} />
        </Switch>
      </Router>
    </SiteContainer>
  );
};

export default App;
