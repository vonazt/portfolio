import React, { useState } from "react";
import { Link } from "react-router-dom";

type HeroLinkProps = {
  linkTo: string;
  linkText: string;
};

export const HeroLink: React.FC<HeroLinkProps> = ({
  linkTo,
  linkText,
}: HeroLinkProps) => {
  const [isHoverText, setIsHoverText] = useState<boolean>(false);
  return (
    <Link to={linkTo}>
      <div
        className={`text-2xl text-white text-center border-2 hover:bg-white hover:font-bold`}
        onMouseOver={() => setIsHoverText(true)}
        onMouseLeave={() => setIsHoverText(false)}
      >
        <span
          style={
            isHoverText
              ? {
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                  display: "block",
                }
              : { font: "white" }
          }
          className={
            isHoverText
              ? `bg-gradient-r-backgroundGradient bg-expand animation-shift animation-10s animation-ease-in animation-infinite`
              : ``
          }
        >
          {linkText}
        </span>
      </div>
    </Link>
  );
};
