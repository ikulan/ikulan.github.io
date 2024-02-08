export const eduCardTheme = {
  root: {
    base: "flex rounded-lg border border-stone-200 bg-white shadow-md items-center",
    children: "flex h-full flex-col justify-center p-2 lg:p-4",
    horizontal: {
      off: "flex-col",
      on: "flex-row",
    },
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "w-16 md:w-20 lg:w-24 rounded-t-lg object-cover md:rounded-none md:rounded-l-lg",
    },
  },
};
