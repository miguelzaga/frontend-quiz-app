import Header from "./components/Header.tsx";
import Layout from "./components/Layout.tsx";
import Menu from "./components/Menu.tsx";
import Question from "./components/Question.tsx";
import Score from "./components/Score.tsx";

import { useEffect, useState } from "react";

import data from "./data.json";
const quizzes = data.quizzes;

function App() {
  const [theme, setTheme] = useState(() => {
    const local = localStorage.getItem("theme");

    if (local) {
      if (local === "dark") {
        document.documentElement.classList.add("theme", "dark");
        return "dark";
      }
      return "light";
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("theme", "dark");
        return "dark";
      }
      return "light";
    }
  });

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    const classList = document.documentElement.classList;
    if (localStorage.getItem("theme")) {
      localStorage.removeItem("theme");
    }

    if (theme === "light") {
      classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  const [page, setPage] = useState<string>("menu");
  const [quizIndex, setQuizIndex] = useState<number>(NaN);
  const [currQuestion, setCurrQuestion] = useState<number>(0);
  const [correctQuestions, setCorrectQuestions] = useState<number>(0);

  let title = isNaN(quizIndex) ? "" : quizzes[quizIndex].title;
  let icon = isNaN(quizIndex) ? "" : quizzes[quizIndex].icon;

  return (
    <>
      <Layout>
        <Header
          title={title}
          icon={icon}
          page={page}
          theme={theme}
          handleToggle={toggleTheme}
        />
        <main className="mt-8 grid gap-y-10 text-blue-900 min-[1064px]:grid-cols-2 md:gap-y-16 lg:mt-20 lg:gap-x-8 dark:text-white">
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
