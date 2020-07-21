import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export const SiteContainer: React.FC<ContainerProps> = ({
  children,
}: ContainerProps) => (
  <div className="bg-gradient-r-backgroundGradient bg-expand animation-shift animation-100s animation-ease-in animation-infinite h-screen w-screen">
    <div className="grid grid-cols-4 lg:grid-cols-7 lg:grid-rows-8 gap-4 items-center content-center h-full">
      {children}
    </div>
  </div>
);
