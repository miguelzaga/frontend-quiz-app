import Header from "./components/Header.tsx";
import Layout from "./components/Layout.tsx";
import Menu from "./components/Menu.tsx";
import Question from "./components/Question.tsx";

import iconModules from "./iconModules.tsx";
import data from "./data.json";

import { useState } from "react";

const quizzes = data.quizzes;
const titles = quizzes.map((quiz) => quiz.title);
const icons = quizzes.map((quiz) => iconModules[quiz.icon].default);

function App() {
  const [page, setPage] = useState<string>("menu");
  const [topic, setTopic] = useState<number>(NaN);
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  return (
    <>
      {/* TODO: style the dark mode */}
      <Layout>
        <Header title={titles[topic]} />
        <main className="mt-8 grid gap-y-10 text-blue-900 min-[1064px]:grid-cols-2 md:gap-y-16 lg:mt-20 lg:gap-x-8">
          {page === "menu" && (
            <Menu
              titles={titles}
              icons={icons}
              onClick={(topic: number) => {
                setTopic(topic);
                setPage("question");
              }}
            />
          )}
          {page === "question" && (
            <Question
              setQuestionNumber={setQuestionNumber}
              quizzes={quizzes}
              topic={topic}
              questionNumber={questionNumber}
              setPage={setPage}
            />
          )}
          {page === "score" && <p>Score Page</p>}
        </main>
      </Layout>
    </>
  );
}

export default App;
