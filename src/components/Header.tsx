import moon from "../assets/images/icon-moon-light.svg";
import sun from "../assets/images/icon-sun-light.svg";
import moonDark from "../assets/images/icon-moon-dark.svg";
import sunDark from "../assets/images/icon-sun-dark.svg";
import Icon from "./Icon";

export default function Header({
  title,
  icon,
  page
}: {
  title: string;
  icon: string;
  page: string;
}) {
  return (
    <header className="flex py-4 md:pt-10 md:pb-0 lg:pt-20">
      {page === "menu" ? (
        ""
      ) : (
        <div className="flex items-center gap-4">
          <Icon
            icon={icon}
            customBg={title}
            alt={`Icon of ${title}`}
            classes={""}
          />
          <p className="text-lg font-medium text-blue-900 dark:text-white">
            {title}
          </p>
        </div>
      )}
      <div className="ml-auto flex min-h-10 w-fit items-center gap-x-2 md:min-h-14">
        <picture>
          <source srcSet={sun} media="(prefers-color-scheme: dark)" />
          <img className="size-4 md:size-6" src={sunDark} alt="sun icon" />
        </picture>
        <input
          className="relative h-5 w-8 cursor-pointer appearance-none rounded-full bg-purple-500 after:absolute after:top-1 after:left-1 after:size-3 after:rounded-full after:bg-white after:transition after:content-[''] checked:after:translate-x-3 md:h-7 md:w-12 md:after:size-5 md:checked:after:translate-x-5"
          type="checkbox"
        />
        <picture>
          <source srcSet={moon} media="(prefers-color-scheme: dark)" />
          <img className="size-4 md:size-6" src={moonDark} alt="moon icon" />
        </picture>
      </div>
    </header>
  );
}
