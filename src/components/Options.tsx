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
  type ButtonState = "unselected" | "selected" | "correct" | "wrong";

  // const [btnStates, setBtnStates] = useState<ButtonState[]>(titles.map(() => 'unselected'));
  const [btnStates, setBtnStates] = useState<ButtonState[]>([
    "correct",
    "wrong",
    "selected",
    "unselected"
  ]);

  return (
    <ul className="grid gap-y-3 font-medium md:gap-y-6">
      {titles.map((title: string, index: number) => {
        return (
          <Option
            key={index + title}
            text={title}
            state={btnStates[index]}
            handleClick={() => clickButton(index)}
          >
            <Image index={index} />
          </Option>
        );
      })}
      {children}
    </ul>
  );

  function clickButton(i: number) {
    const states = btnStates.map(() => "unselected");
    states[i] = "selected";
    setBtnStates(states);
  }

  function Image({ index }: { index: number }) {
    const alphabet = "ABCDEFG";
    if (icons === null) {
      return <p className="md:text-heading-sm">{alphabet[index]}</p>;
    }
    return <img src={icons[index]} alt={`Icon of ${titles[index]}`} />;
  }
}
