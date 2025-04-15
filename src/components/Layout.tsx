import patternMobile from "../assets/images/pattern-background-mobile-light.svg";
import patternTablet from "../assets/images/pattern-background-tablet-light.svg";
import patternDesktop from "../assets/images/pattern-background-desktop-light.svg";

import patternMobileDark from "../assets/images/pattern-background-mobile-dark.svg";
import patternTabletDark from "../assets/images/pattern-background-tablet-dark.svg";
import patternDesktopDark from "../assets/images/pattern-background-desktop-dark.svg";
import React from "react";

export default function Layout({
  theme,
  children
}: {
  theme: string;
  children: React.ReactNode;
}) {
  let mobile, tablet, desktop;
  if (theme === "light") {
    [mobile, tablet, desktop] = [patternMobile, patternTablet, patternDesktop];
  } else {
    [mobile, tablet, desktop] = [
      patternMobileDark,
      patternTabletDark,
      patternDesktopDark
    ];
  }
  return (
    <div className="relative min-h-screen overflow-y-clip bg-gray-100 font-thin md:pb-14 dark:bg-blue-900">
      <picture className="absolute">
        <source srcSet={desktop} media="(min-width: 1024px)" />
        <source srcSet={tablet} media="(min-width: 768px)" />
        <img src={mobile} alt="" />
      </picture>
      <div className="relative mx-auto box-content max-w-290 px-6 md:px-16">
        {children}
      </div>
    </div>
  );
}
