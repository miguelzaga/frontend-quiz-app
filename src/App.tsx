import "./App.css";
import data from "./data.json";

const iconModules: { [path: string]: { default: string } } = import.meta.glob(
  "./assets/images/icon*.svg",
  { eager: true }
);

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

/* TODO: I need to change the liTopics for the data itself. I think is better if I do that in another file. And depending on the data needed, I can transform it and then render it in this component */

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 font-thin">
        {/* TODO: add background patterns */}
        <div className="mx-auto max-w-29">
          <header className="px-6 py-4">
            <div>{/* Question title */}</div>
            <div className="ml-auto flex w-fit items-center gap-x-2">
              <img
                className="size-4 md:size-6"
                src={iconModules["./assets/images/icon-moon-dark.svg"].default}
                alt=""
              />
              <input
                className="size-5 cursor-pointer md:size-7"
                type="checkbox"
              />
              <img
                className="size-4 md:size-6"
                src={iconModules["./assets/images/icon-sun-dark.svg"].default}
                alt=""
              />
            </div>
          </header>
          <main className="grid gap-y-10 px-6 py-8 text-blue-900">
            <div>
              <h1 className="md:text-heading-lg text-[2.5rem]/none">
                Welcome to the{" "}
                <span className="font-medium">Frontend Quiz!</span>
              </h1>
              <p className="md:text-body-sm mt-4 text-sm/normal italic">
                Pick a subject to get started.
              </p>
            </div>

            <ul className="grid gap-y-3 font-medium">
              {/* TODO: This map function should be in another component, The ListElement component should not have index as a parameter */}
              {/*Object.entries(topics).map(([txt, img], i) => (
                <ListElement text={txt} image={img} index={i} />
              ))*/}
              {data.quizzes.map(({ title, icon }: Quiz, i) => (
                <ListElement
                  key={title + i}
                  text={title}
                  image={icon}
                  index={i}
                />
              ))}
            </ul>
          </main>
        </div>
      </div>
    </>
  );
}

{
  /* TODO: Move this component to a new file and make it more reusable */
}
function ListElement({
  text,
  image
}: {
  text: string;
  image: string;
  index: number;
}) {
  const colors: { [key: string]: string } = {
    HTML: "bg-[#FFF1E9]",
    CSS: "bg-[#E0FDEF]",
    JavaScript: "bg-[#EBF0FF]",
    Accessibility: "bg-[#F6E7FF]"
  };

  let color: string = "bg-gray-100";
  if (colors.hasOwnProperty(text)) {
    color = colors[text];
  }

  return (
    <li>
      <button className="drop-shadow-list flex w-full cursor-pointer items-center gap-x-4 rounded-xl bg-white p-3">
        <div
          className={`${color} flex size-10 items-center justify-center rounded-md p-1.5 md:size-16 md:rounded-lg`}
        >
          {/* TODO: Change this image and make it so that the element is a child of the component so that it is reusable for the questions. For the questions we can put the A, B, C, D as elements. */}
          <img src={iconModules[image].default} alt="" />
        </div>
        <p className="md:text-heading-sm text-lg/none">{text}</p>
      </button>
    </li>
  );
}

export default App;
