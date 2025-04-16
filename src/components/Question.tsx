import Button from "./Button";
import Options from "./Options";
import { useState } from "react";
import iconError from "../assets/images/icon-error.svg";

interface Question {
  answer: string;
  options: Array<string>;
  question: string;
}

interface Quiz {
  title: string;
  icon: string;
  questions: Array<Question>;
}

interface QuestionProps {
  incrementCurrQuestion: Function;
  quiz: Quiz;
  questionN: number;
  goToScore: Function;
  addOneCorrect: Function;
}

export default function Question({
  incrementCurrQuestion,
  quiz,
  questionN,
  goToScore,
  addOneCorrect
}: QuestionProps) {
  let questions = quiz.questions;
  let question = questions[questionN];
  let questionTitle = question.question;
  let questionOptions = question.options;

  type ButtonState = "unselected" | "selected" | "correct" | "wrong";
  const [btnStates, setBtnStates] = useState<ButtonState[]>(
    questionOptions.map(() => "unselected")
  );
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<boolean>(false);

  function resetBtns() {
    setBtnStates(questionOptions.map(() => "unselected"));
  }

  function selectBtn(i: number) {
    setBtnStates(
      questionOptions.map((_, j) => (i === j ? "selected" : "unselected"))
    );
  }

  function validateAnswer() {
    const selected = btnStates.findIndex((state) => state === "selected");

    let newStates = [...btnStates];
    if (questionOptions[selected] === question.answer) {
      newStates[selected] = "correct";
      addOneCorrect();
    } else {
      newStates[selected] = "wrong";
    }
    setBtnStates(newStates);
  }

  function handleSubmit(event: React.ChangeEvent<HTMLInputElement>) {
    if (submitted) {
      if (questionN < questions.length - 1) {
        incrementCurrQuestion();
      } else {
        goToScore();
      }
      setSubmitted(false);
      resetBtns();
      event.target.focus;
    } else {
      if (btnStates.every((state) => state === "unselected")) {
        setSubmitError(true);
        event.target.scrollIntoView({ behavior: "smooth" });
      } else {
        setSubmitted(true);
        validateAnswer();
        setSubmitError(false);
      }
    }
  }
  return (
    <>
      <div className="flex max-h-[452px] flex-col justify-between gap-6 md:gap-10 xl:max-w-[465px]">
        <div>
          <p className="md:text-body-sm text-sm/normal italic dark:text-gray-300">
            Question {questionN + 1} of 10
          </p>
          <p className="text-body-sm/[1.2] md:text-heading-md mt-3 font-medium md:mt-7">
            {questionTitle}
          </p>
        </div>
        <div className="rounded-full bg-white p-1 dark:bg-blue-800">
          <div
            className={`${getBarWidth(questionN)} h-2 rounded-full bg-purple-500`}
          ></div>
        </div>
      </div>
      <Options
        titles={questionOptions}
        icons={null}
        btnStates={btnStates}
        handleClickOption={(i) => (submitted ? "" : selectBtn(i))}
        submitted={submitted}
        answer={question.answer}
      >
        <Button
          onClick={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleSubmit(event)
          }
        >
          {submitted ? "Next Question" : "Submit Answer"}
        </Button>
        {submitError ? (
          <div className="flex items-center justify-center gap-2">
            <img className="size-8 md:size-10" src={iconError} />
            <span className="md:text-body-md text-center text-lg font-normal text-red-500 dark:text-white">
              Please select an answer
            </span>
          </div>
        ) : (
          ""
        )}
      </Options>
    </>
  );
}

function getBarWidth(n: number) {
  const barWidth = [
    "w-0/10",
    "w-1/10",
    "w-2/10",
    "w-3/10",
    "w-4/10",
    "w-5/10",
    "w-6/10",
    "w-7/10",
    "w-8/10",
    "w-9/10",
    "w-full"
  ];

  return barWidth[n];
}
