import Button from "./Button.tsx";
import Icon from "./Icon.tsx";

export default function Score({
  title,
  icon,
  correctQuestions,
  questionN,
  resetGame
}: {
  title: string;
  icon: string;
  correctQuestions: number;
  questionN: number;
  resetGame: Function;
}) {
  return (
    <>
      <div>
        <h1 className="md:text-heading-lg text-[2.5rem]/none">
          Quiz Completed
          <span className="mt-2 block font-medium">You scored...</span>
        </h1>
      </div>
      <div>
        <div className="rounded-xl bg-white p-8 text-center md:rounded-3xl md:p-12">
          <div className="flex items-center justify-center gap-4">
            <Icon
              icon={icon}
              customBg={title}
              alt={`Icon of ${title}`}
              classes={""}
            />
            <h2 className="md:text-heading-sm text-lg font-medium text-blue-900">
              {title}
            </h2>
          </div>
          <p className="md:text-body-md text-lg font-normal text-gray-600">
            <b className="md:text-display my-4 block text-[5.5rem] leading-none font-medium text-blue-900 md:mt-10">
              {correctQuestions}
            </b>{" "}
            out of {questionN + 1}
          </p>
        </div>
        <div className="mt-3">
          <Button onClick={() => resetGame()}>Play again</Button>
        </div>
      </div>
    </>
  );
}
