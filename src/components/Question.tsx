import Button from "./Button";
import Options from "./Options";
import { useState } from "react";

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

  function handleSubmit() {
    if (submitted) {
      if (questionN < questions.length - 1) {
        incrementCurrQuestion();
      } else {
        goToScore();
      }
      setSubmitted(false);
      resetBtns();
    } else if (!btnStates.every((state) => state === "unselected")) {
      setSubmitted(true);
      validateAnswer();
    }
  }
  return (
    <>
      <div className="flex flex-col justify-between gap-6 md:gap-10 xl:max-w-[465px]">
        <div>
          <p className="md:text-body-sm text-sm/normal italic">
            Question {questionN + 1} of 10
          </p>
          <p className="text-body-sm/[1.2] md:text-heading-md mt-3 font-medium md:mt-7">
            {questionTitle}
          </p>
        </div>
        <div className="rounded-full bg-white p-1 min-[1064px]:mb-28">
          <div
            className={`${getBarWidth(questionN)} h-2 rounded-full bg-purple-500`}
          ></div>
        </div>
      </div>
      <Options
        titles={questionOptions}
        icons={null}
        btnStates={btnStates}
        handleClickOption={(i) => selectBtn(i)}
      >
        <Button onClick={() => handleSubmit()}>Submit Answer</Button>
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
