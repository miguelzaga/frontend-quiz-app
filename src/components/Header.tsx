import moonDark from "../assets/images/icon-moon-dark.svg";
import sunDark from "../assets/images/icon-sun-dark.svg";

export default function Header() {
  return (
    <header className="py-4 md:pt-10 md:pb-0 lg:pt-20">
      <div>{/* Question title */}</div>
      <div className="ml-auto flex w-fit items-center gap-x-2">
        <img className="size-4 md:size-6" src={moonDark} alt="" />
        {/* TODO: Style dark theme toggle  */}
        <input className="size-5 cursor-pointer md:size-7" type="checkbox" />
        <img className="size-4 md:size-6" src={sunDark} alt="" />
      </div>
    </header>
  );
}
