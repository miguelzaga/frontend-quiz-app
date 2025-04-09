import Header from "./components/Header.tsx";
import Layout from "./components/Layout.tsx";
import Menu from "./components/Menu.tsx";
import Question from "./components/Question.tsx";

import { useState } from "react";

import data from "./data.json";
const quizzes = data.quizzes;

function App() {
  const [page, setPage] = useState<string>("menu");
  const [topicIndex, setTopic] = useState<number>(NaN);
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  let title = isNaN(topicIndex) ? "" : quizzes[topicIndex].title;
  let icon = isNaN(topicIndex) ? "" : quizzes[topicIndex].icon;
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
                setTopic(topicIndex);
                setPage("question");
              }}
            />
          )}
          {page === "question" && (
            <Question
              setQuestionNumber={setQuestionNumber}
              quizzes={quizzes}
              topic={topicIndex}
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
