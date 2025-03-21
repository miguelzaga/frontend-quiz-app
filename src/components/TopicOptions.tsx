import iconModules from "../iconModules.tsx";
import data from "../data.json";
import Option from "./Option.tsx";

export default function TopicOptions() {
  {
    /* Maybe make the ul element a component (Options) and then create another
      for the question options*/
  }
  return (
    <ul className="grid gap-y-3 font-medium md:gap-y-6">
      {data.quizzes.map(({ title, icon }, index) => {
        return (
          <Option
            key={index + title}
            text={title}
            children={<img src={iconModules[icon].default} alt="" />}
          />
        );
      })}
    </ul>
  );
}
