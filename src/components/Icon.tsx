import iconModules from "../iconModules.tsx";

export default function Icon({
  icon,
  alt,
  classes,
  customBg
}: {
  icon: string;
  alt: string;
  classes: string;
  customBg: string;
}) {
  return (
    <div
      className={`${classes} ${getCustomColor(customBg)} flex size-10 shrink-0 items-center justify-center rounded-md p-1.5 md:size-14 md:rounded-lg`}
    >
      {iconModules[icon] ? (
        <img src={iconModules[icon].default} alt={alt} />
      ) : (
        <p className="md:text-heading-sm">{icon}</p>
      )}
    </div>
  );
}

function getCustomColor(title: string) {
  switch (title) {
    case "HTML":
      return "bg-[#FFF1E9]";
    case "CSS":
      return "bg-[#E0FDEF]";
    case "JavaScript":
      return "bg-[#EBF0FF]";
    case "Accessibility":
      return "bg-[#F6E7FF]";
    default:
      return "bg-gray-100";
  }
}
