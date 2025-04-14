import patternMobile from "../assets/images/pattern-background-mobile-light.svg";
import patternTablet from "../assets/images/pattern-background-tablet-light.svg";
import patternDesktop from "../assets/images/pattern-background-desktop-light.svg";

import patternMobileDark from "../assets/images/pattern-background-mobile-dark.svg";
import patternTabletDark from "../assets/images/pattern-background-tablet-dark.svg";
import patternDesktopDark from "../assets/images/pattern-background-desktop-dark.svg";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-y-clip bg-gray-100 font-thin md:pb-14 dark:bg-blue-900">
      <picture className="absolute">
        <source
          srcSet={patternDesktopDark}
          media="(min-width: 1024px) and (prefers-color-scheme: dark)"
        />
        <source
          srcSet={patternTabletDark}
          media="(min-width: 768px) and (prefers-color-scheme: dark)"
        />
        <source
          srcSet={patternMobileDark}
          media="(prefers-color-scheme: dark)"
        />
        <source srcSet={patternDesktop} media="(min-width: 1024px)" />
        <source srcSet={patternTablet} media="(min-width: 768px)" />
        <img src={patternMobile} alt="" />
      </picture>
      <div className="relative mx-auto box-content max-w-290 px-6 md:px-16">
        {children}
      </div>
    </div>
  );
}
