import React, { Fragment } from "react";
import { HeroLink } from "./HeroLink";
import { LoveText } from "./LoveText";

export const About: React.FC<{}> = () => {
  return (
    <Fragment>
      <div className="row-start-1 bg-white col-start-4 col-span-1 animation-fadeIn animation-500ms animation-ease-in animation-once">
        <h1
          style={{
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            display: "block",
          }}
          className="text-3xl bg-gradient-r-backgroundGradient bg-expand animation-shift animation-100s animation-ease-in animation-infinite font-bold text-center"
        >
          About
        </h1>
      </div>
      <div className="col-start-7 col-span-1 row-end-4 animation-fadeIn animation-500ms animation-ease-in animation-once">
        <HeroLink
          linkTo={`/work`}
          linkText={`Work`}
          border={`border-t-2 border-b-2 border-l-2`}
        />
        <HeroLink
          linkTo={`/contact`}
          linkText={`Contact`}
          border={`border-b-2 border-l-2`}
        />
      </div>
      <div className="row-start-2 row-span-4"></div>

      <div className="col-start-2 row-start-5 row-span-1 animation-fadeIn animation-500ms animation-ease-in animation-once">
        <LoveText
          link={`https://www.discogs.com/user/vonazt/collection`}
          text={`vinyl`}
        />
      </div>
      <div className="col-start-4 row-start-5 row-span-1  animation-fadeIn animation-500ms animation-ease-in animation-once">
        <LoveText
          link={`https://open.spotify.com/user/dickpennis/playlist/546C1VqlSpUXRAs0zZQ0jZ?si=gQQazNHwTwaZFyiM93-ZGw`}
          text={`music`}
        />
      </div>
      <div className="col-start-6 row-start-5 row-span-1 animation-fadeIn animation-500ms animation-ease-in animation-once">
        <LoveText
          link={`https://www.goodreads.com/review/list/101498534?ref=nav_mybooks`}
          text={`books`}
        />
      </div>
      <div className="col-start-3 row-start-3 row-span-1 animation-fadeIn animation-500ms animation-ease-in animation-once">
        <LoveText link={`https://github.com/vonazt`} text={`coding`} /> 
      </div>
      <div className="col-start-5 row-start-3 row-span-1 animation-fadeIn animation-500ms animation-ease-in animation-once">
        <LoveText link={`/gaming`} text={`gaming`} isExternalLink={false} /> 
      </div>
    </Fragment>
  );
};
