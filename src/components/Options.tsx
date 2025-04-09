import Icon from "./Icon.tsx";

export default function Options({
  titles,
  icons,
  children,
  btnStates,
  handleClickOption
}: {
  titles: string[];
  icons: string[] | null;
  children: React.ReactNode;
  onClick: Function;
}) {
  const alphabet = "ABCD";

  return (
    <ul className="grid gap-y-3 font-medium md:gap-y-6">
      {titles.map((title: string, index: number) => {
        let stateClass = getCustomClass(btnStates[index]);
        return (
          <li key={title}>
            <button
              onClick={() => handleClickOption(index)}
              className={`drop-shadow-list group flex h-16 w-full cursor-pointer items-center gap-x-4 rounded-xl border-[3px] bg-white p-3 md:h-20 md:gap-x-8 md:rounded-3xl lg:h-[92px] ${getButtonClass(btnStates[index])}`}
            >
              <Icon
                icon={icons ? icons[index] : alphabet[index]}
                customBg={title}
                classes={stateClass}
                alt={`Icon of ${titles[index]}`}
              ></Icon>
              <p className="md:text-heading-sm text-lg/none">{title}</p>
            </button>
          </li>
        );
      })}
      {children}
    </ul>
  );
}

type ButtonState = "unselected" | "selected" | "correct" | "wrong";

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

function getCustomClass(state: ButtonState) {
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
