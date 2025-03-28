import "./App.css";
import Header from "./components/Header.tsx";
import Options from "./components/Options.tsx";
import Layout from "./components/Layout.tsx";

import iconModules from "./iconModules.tsx";
import data from "./data.json";

import { useState } from "react";

const titles = data.quizzes.map((quiz) => quiz.title);
const icons = data.quizzes.map((quiz) => iconModules[quiz.icon].default);

function App() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      {/* TODO: style the dark mode */}
      <Layout>
        <Header />
        <main className="mt-8 grid gap-y-10 text-blue-900 min-[1064px]:grid-cols-2 md:gap-y-16 lg:mt-20 lg:gap-x-8">
          <Main isMenu={isMenu} />
        </main>
      </Layout>
    </>
  );
}

function Main({ isMenu }) {
  if (isMenu === true) {
    return (
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
        <Options titles={titles} icons={icons} />
      </>
    );
  } else {
    return (
      <>
        <div>
          <p className="md:text-body-sm mt-4 text-sm/normal italic lg:mt-12">
            Pick a subject to get started.
          </p>
          <p>
            Which of these color contrast ratios defines the minimum WCAG 2.1
            Level AA requirement for normal text?
          </p>
          <div>{/* TODO: Progress bar */}</div>
        </div>
        <Options titles={titles} icons={null} />
      </>
    );
  }
}
export default App;
