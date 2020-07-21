import React from "react";
import "./assets/main.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { SiteContainer, HeroLink } from "./components";

const App = () => {
  return (
    <SiteContainer>
      <Router history={createBrowserHistory()}>
        <div className="grid grid-cols-4 lg:grid-cols-7 gap-4 items-center content-center h-full">
          <div className="col-start-1 col-span-4 lg:col-start-2 lg:col-span-5">
            <h1 className="text-3xl text-white font-bold text-center">
              RICHARD TZANOV
            </h1>
          </div>
          <div className="col-start-2 col-span-2 lg:col-start-3 lg:col-span-1">
            <HeroLink linkText={`About`} linkTo={`/about`} />
          </div>
          <div className="col-start-2 col-span-2 lg:col-start-4 lg:col-span-1">
            <HeroLink linkText={`Work`} linkTo={`/work`} />
          </div>
          <div className="col-start-2 col-span-2 lg:col-start-5 lg:col-span-1">
            <HeroLink linkText={`Contact`} linkTo={`/contact`} />
          </div>
        </div>
      </Router>
    </SiteContainer>
  );
};

export default App;
