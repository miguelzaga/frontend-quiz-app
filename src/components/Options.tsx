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
        return (
          <li key={title}>
            <button
              onClick={() => handleClickOption(index)}
              className={`drop-shadow-list group flex h-16 w-full cursor-pointer items-center gap-x-4 rounded-xl border-[3px] bg-white p-3 md:h-20 md:gap-x-8 md:rounded-3xl lg:h-[92px] ${getBtnStyle(btnStates[index])}`}
            >
              <Icon
                icon={icons ? icons[index] : "ABCDEFG"[index]}
                customBg={title}
                classes={getIconBg(btnStates[index])}
                alt={`Icon of ${titles[index]}`}
              ></Icon>
              <p className="md:text-heading-sm text-lg/none text-left">{title}</p>
              {submitted && btnStates[index] === "wrong" ? (
                <IconCorrect src={iconError} />
              ) : (
                ""
              )}
              {submitted && title === answer ? (
                <IconCorrect src={iconCorrect} />
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

function IconCorrect({ src }) {
  return <img className="ml-auto size-8 md:size-10" src={src} />;
}

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
    default:
      return "border-transparent group-hover:bg-purple-200 group-hover:text-purple-500";
  }
}
