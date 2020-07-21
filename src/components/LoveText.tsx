import React from "react";
import { Link } from "react-router-dom";

type LoveTextProps = {
  link: string;
  text: string;
  isExternalLink?: boolean;
};

export const LoveText: React.FC<LoveTextProps> = ({
  link,
  text,
  isExternalLink = true,
}: LoveTextProps) => (
  <p className="text-white text-2xl font-bold italic">
    i love{" "}
    {isExternalLink ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-black underline align-middle text-4xl not-italic"
      >
        {text.toUpperCase()}
      </a>
    ) : (
      <Link
        to={link}
        target={`_blank`}
        className="font-black underline align-middle text-4xl not-italic"
      >
        {text.toUpperCase()}
      </Link>
    )}
  </p>
);
