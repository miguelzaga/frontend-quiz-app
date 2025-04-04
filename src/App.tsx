import Header from "./components/Header.tsx";
import Options from "./components/Options.tsx";
import Layout from "./components/Layout.tsx";

import iconModules from "./iconModules.tsx";
import data from "./data.json";

import { useState } from "react";

const titles = data.quizzes.map((quiz) => quiz.title);
const icons = data.quizzes.map((quiz) => iconModules[quiz.icon].default);

const question = {
  question:
    "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
  options: ["3:1", "4.5:1", "7:1", "2:1"],
  answer: "4.5:1"
};

const questionTitle = question.question;
const questionOptions = question.options;

function App() {
  const [isMenu] = useState(false);

  return (
    <>
      {/* TODO: style the dark mode */}
      <Layout>
        <Header />
        <main className="mt-8 grid gap-y-10 text-blue-900 min-[1064px]:grid-cols-2 md:gap-y-16 lg:mt-20 lg:gap-x-8">
          {isMenu ? (
            <>
              <div>
                <h1 className="md:text-heading-lg text-[2.5rem]/none">
                  Welcome to the{" "}
                  <span className="mt-2 block font-medium">Frontend Quiz!</span>
                </h1>
                <p className="md:text-body-sm mt-4 text-sm/normal italic lg:mt-12">
                  Pick a subject to get started.
                </p>
              </div>
              <Options titles={titles} icons={icons} children={null} />
            </>
          ) : (
            <>
              <div className="flex flex-col justify-between gap-6 md:gap-10 xl:max-w-[465px]">
                <div>
                  <p className="md:text-body-sm text-sm/normal italic">
                    Question 6 of 10
                    {/* TODO: make dynamic */}
                  </p>
                  <p className="text-body-sm/[1.2] md:text-heading-md mt-3 font-medium md:mt-7">
                    {questionTitle}
                  </p>
                </div>
                <div className="rounded-full bg-white p-1 lg:mb-28">
                  <div className="h-2 w-6/10 rounded-full bg-purple-500">
                    {/* TODO: Make mapping for dynamic bar based on the number of questions answered */}
                  </div>
                </div>
              </div>
              <Options titles={questionOptions} icons={null}>
                <button className="md:text-heading-sm cursor-pointer rounded-xl bg-purple-500 p-3 text-lg font-medium text-white hover:opacity-50 md:mt-2 md:rounded-3xl md:p-8">
                  Submit Answer
                </button>
              </Options>
            </>
          )}
        </main>
      </Layout>
    </>
  );
}
export default App;
