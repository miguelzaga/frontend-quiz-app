import Option from "./Option";
import React, { useState } from "react";

export default function Options({
  titles,
  icons,
  children
}: {
  titles: string[];
  icons: string[] | null;
  children: React.ReactNode;
}) {
  const unselectedState = titles.map((_) => false);
  const [selected, setSelected] = useState(unselectedState);

  function getSelected(index: number) {
    return unselectedState.map((_, i) => i === index);
  }

  return (
    <ul className="grid gap-y-3 font-medium md:gap-y-6">
      {titles.map((title: string, index: number) => {
        return (
          <Option
            key={index + title}
            text={title}
            selected={selected[index]}
            setSelected={() => setSelected(getSelected(index))}
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
    return <img src={icons[index]} alt={`Icon of ${titles[index]}`} />;
  }
}
