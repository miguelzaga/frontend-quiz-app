import Icon from "./Icon.tsx";
import iconError from "../assets/images/icon-error.svg";
import iconCorrect from "../assets/images/icon-correct.svg";

export default function Options({
  titles,
  icons,
  children,
  btnStates,
  handleClickOption,
  submitted,
  answer
}: {
  titles: string[];
  icons: string[] | null;
  children?: React.ReactNode;
  btnStates: ButtonState[];
  handleClickOption: (index: number) => void;
  submitted: boolean;
  answer: string;
}) {
  return (
    <ul className="relative grid gap-y-3 font-medium md:gap-y-6">
      {titles.map((title: string, index: number) => {
        const letters = "ABCD";
        return (
          <li key={title}>
            <button
              onClick={() => handleClickOption(index)}
              className={`drop-shadow-list group flex h-16 w-full cursor-pointer items-center gap-x-4 rounded-xl border-[3px] bg-white p-3 md:h-20 md:gap-x-8 md:rounded-3xl lg:h-[92px] dark:bg-blue-800 ${getBtnStyle(btnStates[index])}`}
            >
              <Icon
                icon={icons ? icons[index] : letters[index]}
                customBg={title}
                classes={getIconBg(btnStates[index])}
                alt={`Icon of ${titles[index]}`}
              ></Icon>
              <p className="md:text-heading-sm text-left text-lg/none">
                {title}
              </p>
              {submitted && btnStates[index] === "wrong" ? (
                <img className="ml-auto size-8 md:size-10" src={iconError} />
              ) : (
                ""
              )}
              {submitted && title === answer ? (
                <img className="ml-auto size-8 md:size-10" src={iconCorrect} />
              ) : (
                ""
              )}
            </button>
          </li>
        );
      })}
      {children}
    </ul>
  );
}

type ButtonState = "unselected" | "selected" | "correct" | "wrong";

function getBtnStyle(state: ButtonState) {
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

function getIconBg(state: ButtonState) {
  switch (state) {
    case "selected":
      return "bg-purple-500 text-white";
    case "wrong":
      return "bg-red-500 text-white";
    case "correct":
      return "bg-green-500 text-white";
    case "unselected":
      return "border-transparent group-hover:bg-purple-200 group-hover:text-purple-500 dark:text-gray-600";
    default:
      return "border-transparent";
  }
}
