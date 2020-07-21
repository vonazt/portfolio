import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type HeroLinkProps = {
  linkTo: string;
  linkText: string;
  border: string;
};

export const HeroLink: React.FC<HeroLinkProps> = ({
  linkTo,
  linkText,
  border,
}: HeroLinkProps) => {
  const [isHoverText, setIsHoverText] = useState<boolean>(false);
  return (
    <Link to={linkTo}>
      <div
        className={`text-2xl w:1 text-white text-center ${border} hover:bg-white hover:font-bold`}
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
