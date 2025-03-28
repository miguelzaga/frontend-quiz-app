export default function Options({ titles, icons }) {
  return (
    <ul className="grid gap-y-3 font-medium md:gap-y-6">
      {titles.map((title, index) => {
        return (
          <Option key={index + title} text={title}>
            <Image index={index} />
          </Option>
        );
      })}
    </ul>
  );

  function Image({ index }) {
    const alphabet = "ABCDEFG";
    if (icons === null) {
      return <p>{alphabet[index]}</p>;
    }
    return <img src={icons[index]} alt={`Icon of ${titles[index]}`} />;
  }
}

function Option({ text, children }: { text: string; children?: any }) {
  let color = getColor(text);

  return (
    <li>
      <button className="drop-shadow-list flex w-full cursor-pointer items-center gap-x-4 rounded-xl bg-white p-3 md:gap-x-8 md:rounded-3xl lg:p-5">
        <div
          className={`${color} flex size-10 items-center justify-center rounded-md p-1.5 md:size-14 md:rounded-lg`}
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
