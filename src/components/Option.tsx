export default function Option({
  text,
  selected,
  setSelected,
  children
}: {
  text: string;
  selected: boolean;
  setSelected: Function;
  children?: any;
}) {
  let color = getColor(text);

  return (
    <li>
      <button
        onClick={() => setSelected()}
        className={`drop-shadow-list group flex h-16 w-full cursor-pointer items-center gap-x-4 rounded-xl border-[3px] bg-white p-3 md:h-20 md:gap-x-8 md:rounded-3xl lg:h-[92px] ${selected ? "border-purple-500" : "border-transparent"}`}
      >
        <div
          className={`${color} flex size-10 items-center justify-center rounded-md p-1.5 md:size-14 md:rounded-lg ${selected ? "bg-purple-500 text-white" : "group-hover:bg-purple-200 group-hover:text-purple-500"}`}
        >
          {children}
        </div>
        <p className="md:text-heading-sm text-lg/none">{text}</p>
      </button>
    </li>
  );
}

function getColor(title: string) {
  const colors: { [key: string]: string } = {
    HTML: "bg-[#FFF1E9]",
    CSS: "bg-[#E0FDEF]",
    JavaScript: "bg-[#EBF0FF]",
    Accessibility: "bg-[#F6E7FF]"
  };

  let color: string = "bg-gray-100";
  if (colors.hasOwnProperty(title)) {
    color = colors[title];
  }
  return color;
}
