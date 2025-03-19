import "./App.css";
import iconMoonDark from "./assets/images/icon-moon-dark.svg";
import iconSunDark from "./assets/images/icon-sun-dark.svg";
import iconHtml from "./assets/images/icon-html.svg";
import iconCss from "./assets/images/icon-css.svg";
import iconJs from "./assets/images/icon-js.svg";
import iconAccessibility from "./assets/images/icon-accessibility.svg";

/*
TODO: I need to change the liTopics for the data itself. I think is better if
I do that in another file. And depending on the data needed, I can transform
it and then render it in this component
*/
const liTopics = {
  HTML: iconHtml,
  CSS: iconCss,
  JavaScript: iconJs,
  Accessibility: iconAccessibility
};

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 font-thin">
        <div className="mx-auto max-w-29">
          <header className="px-6 py-4">
            <div>{/* Question title */}</div>
            <div className="ml-auto flex w-fit items-center gap-x-2">
              <img className="size-4 md:size-6" src={iconMoonDark} alt="" />
              <input
                className="size-5 cursor-pointer md:size-7"
                type="checkbox"
              />
              <img className="size-4 md:size-6" src={iconSunDark} alt="" />
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
              {Object.entries(liTopics).map(([txt, img], i) => (
                <ListElement text={txt} image={img} index={i} />
              ))}
            </ul>
          </main>
        </div>
      </div>
    </>
  );
}

function ListElement({
  text,
  image,
  index
}: {
  text: string;
  image: string;
  index: number;
}) {
  return (
    <li key={`liElement-${index}`}>
      <button className="flex w-full cursor-pointer items-center gap-x-4 rounded-xl bg-white p-3">
        <div>
          {/* TODO: add background that changes according to the input */}
          <img src={image} alt="" />
        </div>
        <p className="md:text-heading-sm text-lg/none">{text}</p>
      </button>
    </li>
  );
}

export default App;
