import moonDark from "../assets/images/icon-moon-dark.svg";
import sunDark from "../assets/images/icon-sun-dark.svg";

export default function Header() {
  return (
    <header className="py-4 md:pt-10 md:pb-0 lg:pt-20">
      <div>{/* Question title */}</div>
      <div className="ml-auto flex w-fit items-center gap-x-2">
        <img className="size-4 md:size-6" src={sunDark} alt="" />
        <input
          className="relative h-5 w-8 cursor-pointer appearance-none rounded-full bg-purple-500 after:absolute after:top-1 after:left-1 after:size-3 after:rounded-full after:bg-white after:transition after:content-[''] checked:after:translate-x-3 md:h-7 md:w-12 md:after:size-5 md:checked:after:translate-x-5"
          type="checkbox"
        />
        <img className="size-4 md:size-6" src={moonDark} alt="" />
      </div>
    </header>
  );
}
