import Header from "./components/Header.tsx";
import Layout from "./components/Layout.tsx";
import Menu from "./components/Menu.tsx";
import Question from "./components/Question.tsx";
import Score from "./components/Score.tsx";

import { useState } from "react";

import data from "./data.json";
const quizzes = data.quizzes;

function App() {
  const [page, setPage] = useState<string>("menu");
  const [quizIndex, setQuizIndex] = useState<number>(NaN);
  const [currQuestion, setCurrQuestion] = useState<number>(0);
  const [correctQuestions, setCorrectQuestions] = useState<number>(0);

  let title = isNaN(quizIndex) ? "" : quizzes[quizIndex].title;
  let icon = isNaN(quizIndex) ? "" : quizzes[quizIndex].icon;
  return (
    <>
      {/* TODO: style the dark mode */}
      <Layout>
        <Header title={title} icon={icon} page={page} />
        <main className="mt-8 grid gap-y-10 text-blue-900 min-[1064px]:grid-cols-2 md:gap-y-16 lg:mt-20 lg:gap-x-8">
          {page === "menu" && (
            <Menu
              titles={quizzes.map((quiz) => quiz.title)}
              icons={quizzes.map((quiz) => quiz.icon)}
              handleClickOption={(topicIndex: number) => {
                setQuizIndex(topicIndex);
                setPage("question");
              }}
            />
          )}
          {page === "question" && (
            <Question
              incrementCurrQuestion={() => setCurrQuestion(currQuestion + 1)}
              quiz={quizzes[quizIndex]}
              questionN={currQuestion}
              goToScore={() => setPage("score")}
              addOneCorrect={() => setCorrectQuestions(correctQuestions + 1)}
            />
          )}
          {page === "score" && (
            <Score
              title={title}
              icon={icon}
              correctQuestions={correctQuestions}
              questionN={currQuestion}
              resetGame={() => {
                setPage("menu");
                setQuizIndex(NaN);
                setCurrQuestion(0);
              }}
            />
          )}
        </main>
      </Layout>
    </>
  );
}

export default App;
