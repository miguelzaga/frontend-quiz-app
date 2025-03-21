let iconModules: { [path: string]: { default: string } } = import.meta.glob(
  "./assets/images/icon*.svg",
  { eager: true }
);

export default iconModules;
