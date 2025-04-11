export default function Button({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick: Function;
}) {
  return (
    <button
      onClick={(event) => onClick(event)}
      className="md:text-heading-sm w-full cursor-pointer rounded-xl bg-purple-500 p-[19px] text-lg leading-none font-medium text-white hover:opacity-50 md:my-2 md:rounded-3xl md:p-8"
    >
      {children}
    </button>
  );
}
