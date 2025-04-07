type ButtonState = "unselected" | "selected" | "correct" | "wrong";

export default function Option({
  text,
  state,
  handleClick,
  children
}: {
  text: string;
  state: ButtonState;
  handleClick: Function;
  children?: any;
}) {
  return (
    <li>
      <button
        onClick={() => handleClick()}
        className={`drop-shadow-list group flex h-16 w-full cursor-pointer items-center gap-x-4 rounded-xl border-[3px] bg-white p-3 md:h-20 md:gap-x-8 md:rounded-3xl lg:h-[92px] ${getButtonClass(state)}`}
      >
        <div
          className={`${getCustomColor(text)} ${getDivClass(state)} flex size-10 items-center justify-center rounded-md p-1.5 md:size-14 md:rounded-lg`}
        >
          {children}
        </div>
        <p className="md:text-heading-sm text-lg/none">{text}</p>
      </button>
    </li>
  );
}

function getButtonClass(state: ButtonState) {
  switch (state) {
    case "selected":
      return "border-purple-500";
    case "wrong":
      return "border-red-500";
    case "correct":
      return "border-green-500";
    default:
      return "border-transparent ";
  }
}

function getDivClass(state: ButtonState) {
  switch (state) {
    case "selected":
      return "bg-purple-500 text-white";
    case "wrong":
      return "bg-red-500 text-white";
    case "correct":
      return "bg-green-500 text-white";
    default:
      return "border-transparent group-hover:bg-purple-200 group-hover:text-purple-500";
  }
}

function getCustomColor(title: string) {
  switch (title) {
    case "HTML":
      return "bg-[#FFF1E9]";
    case "CSS":
      return "bg-[#E0FDEF]";
    case "JavaScript":
      return "bg-[#EBF0FF]";
    case "Accessibility":
      return "bg-[#F6E7FF]";
    default:
      return "bg-gray-100";
  }
}
