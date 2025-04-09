import Options from "./Options";
import { useState } from "react";

export default function Question({
  setQuestionNumber,
  quizzes,
  topic,
  questionNumber,
  setPage
}) {
  let questions;
  let question;
  let questionTitle;
  let questionOptions;

  if (!isNaN(topic)) {
    questions = quizzes[topic].questions;
    question = questions[questionNumber];
    questionTitle = question.question;
    questionOptions = question.options;
  }

  type ButtonState = "unselected" | "selected" | "correct" | "wrong";
  const [btnStates, setBtnStates] = useState<ButtonState[]>(
    questionOptions.map(() => "unselected")
  );

  function resetBtns() {
    setBtnStates(questionOptions.map(() => "unselected"));
  }
  function selectBtn(i: number) {
    setBtnStates(
      questionOptions.map((_, j) => (i === j ? "selected" : "unselected"))
    );
  }
  return (
    <>
      <div className="flex flex-col justify-between gap-6 md:gap-10 xl:max-w-[465px]">
        <div>
          <p className="md:text-body-sm text-sm/normal italic">
            Question {questionNumber + 1} of 10
          </p>
          <p className="text-body-sm/[1.2] md:text-heading-md mt-3 font-medium md:mt-7">
            {questionTitle}
          </p>
        </div>
        <div className="rounded-full bg-white p-1 min-[1064px]:mb-28">
          <div
            className={`${getBarWidth(questionNumber)} h-2 rounded-full bg-purple-500`}
          ></div>
        </div>
      </div>
      <Options
        titles={questionOptions}
        icons={null}
        btnStates={btnStates}
        handleClickOption={(i) => selectBtn(i)}
      >
        <button
          onClick={() => {
            resetBtns();
            if (questionNumber < questions.length - 1) {
              setQuestionNumber(questionNumber + 1);
            } else {
              setPage("score");
            }
          }}
          className="md:text-heading-sm cursor-pointer rounded-xl bg-purple-500 p-3 text-lg font-medium text-white hover:opacity-50 md:mt-2 md:rounded-3xl md:p-8"
        >
          Submit Answer
        </button>
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
