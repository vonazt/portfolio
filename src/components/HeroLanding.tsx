import React, { Fragment } from "react";
import { HeroLink } from "./HeroLink";

export const HeroLanding: React.FC<{}> = () => (
  <Fragment>
    <div className="col-start-1 col-span-4 lg:col-start-2 lg:col-span-5">
      <h1 className="text-3xl text-white font-bold text-center">
        RICHARD TZANOV
      </h1>
    </div>
    <div className="col-start-2 col-span-2 lg:col-start-3 lg:col-span-1">
      <HeroLink linkText={`About`} linkTo={`/about`} border={`border-2`} />
    </div>
    <div className="col-start-2 col-span-2 lg:col-start-4 lg:col-span-1">
      <HeroLink linkText={`Work`} linkTo={`/work`} border={`border-2`} />
    </div>
    <div className="col-start-2 col-span-2 lg:col-start-5 lg:col-span-1">
      <HeroLink linkText={`Contact`} linkTo={`/contact`} border={`border-2`} />
    </div>
  </Fragment>
);
