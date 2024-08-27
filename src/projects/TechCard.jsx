import { Card } from "flowbite-react";

const customTheme = {
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

function TechCard(props) {
  return (
    <Card
      theme={customTheme}
      imgSrc={props.iconUrl}
      className="w-80 shrink-0 gap-1 px-4 py-2 md:py-4 lg:w-[25rem]"
      horizontal
    >
      <div>
        <h2 className="text-lg font-semibold lg:text-xl">{props.title}</h2>
        <a
          href={props.githubUrl}
          className="text-peach-600 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Go to Github
        </a>
      </div>
    </Card>
  );
}

export default TechCard;
