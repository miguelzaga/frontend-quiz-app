import "./App.css";
import Header from "./components/Header.tsx";
import TopicOptions from "./components/TopicOptions.tsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 font-thin md:pb-14">
        {/* TODO: add background patterns */}
        <div className="mx-auto box-content max-w-29 px-6 md:px-16">
          <Header />
          <main className="mt-8 grid gap-y-10 text-blue-900 md:gap-y-16 lg:mt-20 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h1 className="md:text-heading-lg text-[2.5rem]/none">
                Welcome to the{" "}
                <span className="mt-2 block font-medium">Frontend Quiz!</span>
              </h1>
              <p className="md:text-body-sm mt-4 text-sm/normal italic lg:mt-12">
                Pick a subject to get started.
              </p>
            </div>
            <TopicOptions />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
