import Options from "./Options";

export default function Menu({
  titles,
  icons,
  handleClickOption
}: {
  titles: string[];
  icons: string[] | null;
  handleClickOption: (index: number) => void;
}) {
  return (
    <>
      <div>
        <h1 className="md:text-heading-lg text-[2.5rem]/none">
          Welcome to the{" "}
          <span className="mt-2 block font-medium">Frontend Quiz!</span>
        </h1>
        <p className="md:text-body-sm mt-4 text-sm/normal italic lg:mt-12 dark:text-gray-300">
          Pick a subject to get started.
        </p>
      </div>

      <Options
        titles={titles}
        icons={icons}
        handleClickOption={handleClickOption}
        btnStates={titles.map(() => "")}
      />
    </>
  );
}
