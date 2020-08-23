import React from "react";
import { LogoWithBlobs } from "./Logo";
import { GradientText } from "./GradientText";

export const HomePage: React.FC = () => {
  return (
    <div className="flex-col items-center justify-center h-full-viewport bg-warm-grey">
      <div className="flex-col items-center justify-center m-auto max-w-2/3 sm:max-w-xs">
        <LogoWithBlobs className="m-auto max-w-18" />
        <div className="table m-auto">
          <GradientText>
            <h1 className="text-2xl font-thin leading-none text-right sm:text-4xl tracking-extra-wide font-display">
              martin emmert
            </h1>
          </GradientText>
          <h2 className="pr-1 text-base font-light leading-none text-right sm:text-lg font-display text-dark-grey">
            work in progress
          </h2>
        </div>
      </div>
    </div>
  );
};
