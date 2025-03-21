import iconModules from "../iconModules.tsx";

export default function Option({
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
      <button className="drop-shadow-list flex w-full cursor-pointer items-center gap-x-4 rounded-xl bg-white p-3 md:gap-x-8 md:rounded-3xl lg:p-5">
        <div
          className={`${color} flex size-10 items-center justify-center rounded-md p-1.5 md:size-14 md:rounded-lg`}
        >
          {/* TODO: Change this image and make it so that the element is a child of the component so that it is reusable for the questions. For the questions we can put the A, B, C, D as elements. */}
          <img src={iconModules[image].default} alt="" />
        </div>
        <p className="md:text-heading-sm text-lg/none">{text}</p>
      </button>
    </li>
  );
}
