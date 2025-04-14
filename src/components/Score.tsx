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
        <div className="rounded-xl bg-white p-8 text-center md:rounded-3xl md:p-12 dark:bg-blue-800">
          <div className="flex items-center justify-center gap-4">
            <Icon
              icon={icon}
              customBg={title}
              alt={`Icon of ${title}`}
              classes={""}
            />
            <h2 className="md:text-heading-sm text-lg font-medium text-blue-900 dark:text-white">
              {title}
            </h2>
          </div>
          <p>
            <b className="md:text-display my-4 block text-[5.5rem] leading-none font-medium text-blue-900 md:mt-10 dark:text-white">
              {correctQuestions}
            </b>{" "}
            <span className="md:text-body-md text-lg font-normal text-gray-600 dark:text-gray-300">
              out of {questionN + 1}
            </span>
          </p>
        </div>
        <div className="mt-3">
          <Button onClick={() => resetGame()}>Play again</Button>
        </div>
      </div>
    </>
  );
}
