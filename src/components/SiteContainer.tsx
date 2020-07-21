import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export const SiteContainer: React.FC<ContainerProps> = ({
  children,
}: ContainerProps) => (
  <div className="bg-gradient-r-backgroundGradient bg-expand animation-shift animation-100s animation-ease-in animation-infinite h-screen w-screen">
    {children}
  </div>
);
