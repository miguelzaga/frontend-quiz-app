import iconModules from "../iconModules.tsx";

export default function Icon({ icon, alt }) {
  let iconSrc = iconModules[icon].default;

  return (
    <>
      <img src={iconSrc} alt={alt} />
    </>
  );
}
