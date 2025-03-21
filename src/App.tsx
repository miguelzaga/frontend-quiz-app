import "./App.css";
import data from "./data.json";
import Option from "./components/Option.tsx";
import Header from "./components/Header.tsx";

interface Question {
  question: string;
  options: Array<string>;
  answer: string;
}

interface Quiz {
  title: string;
  icon: string;
  questions: Array<Question>;
}

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 font-thin md:pb-14">
        {/* TODO: add background patterns */}
        <div className="mx-auto box-content max-w-29 px-6 md:px-16">
          <Header />
          <main className="mt-8 grid gap-y-10 text-blue-900 md:gap-y-16">
            <div>
              <h1 className="md:text-heading-lg text-[2.5rem]/none">
                Welcome to the{" "}
                <span className="font-medium">Frontend Quiz!</span>
              </h1>
              <p className="md:text-body-sm mt-4 text-sm/normal italic">
                Pick a subject to get started.
              </p>
            </div>

            <ul className="grid gap-y-3 font-medium md:gap-y-6">
              {/* TODO: This map function should be in another component, The ListElement component should not have index as a parameter */}
              {data.quizzes.map(({ title, icon }: Quiz, i) => (
                <Option key={title + i} text={title} image={icon} index={i} />
              ))}
            </ul>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
