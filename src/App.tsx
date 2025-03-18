import "./App.css";

const data = {
  quizzes: [
    {
      title: "HTML",
      icon: "./assets/images/icon-html.svg",
      questions: [
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Trainer Marking Language",
            "Hyper Text Marketing Language",
            "Hyper Text Markup Language",
            "Hyper Text Markup Leveler"
          ],
          answer: "Hyper Text Markup Language"
        }
      ]
    }
  ]
};

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 font-thin">
        <header className="h-20">
          <div>{/* Question title */}</div>
          <div>{/* Light/dark toggle */}</div>
        </header>
        <main className="text-blue-900">
          <div className="mx-auto max-w-xl">
            <h1 className="text-center text-4xl">
              Welcome to the <span className="font-medium">Frontend Quiz!</span>
            </h1>
            <p className="italic">Pick a subject to get started.</p>

            <ul className="font-medium">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
