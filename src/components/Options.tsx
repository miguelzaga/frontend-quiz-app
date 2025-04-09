import Option from "./Option";
import Icon from "./Icon";

export default function Options({
  titles,
  icons,
  children,
  onClick,
  btnStates,
  selectBtn
}: {
  titles: string[];
  icons: string[] | null;
  children: React.ReactNode;
  onClick: Function;
}) {
  return (
    <ul className="grid gap-y-3 font-medium md:gap-y-6">
      {titles.map((title: string, index: number) => {
        return (
          <Option
            key={index + title}
            text={title}
            state={btnStates[index]}
            handleClick={() => {
              if (onClick) {
                onClick(index);
              } else {
                selectBtn(index);
              }
            }}
          >
            <Image index={index} />
          </Option>
        );
      })}
      {children}
    </ul>
  );

  function Image({ index }: { index: number }) {
    const alphabet = "ABCDEFG";
    if (icons === null) {
      return <p className="md:text-heading-sm">{alphabet[index]}</p>;
    }
    return <Icon icon={icons[index]} alt={`Icon of ${titles[index]}`}></Icon>;
  }
}
