import { Card } from "flowbite-react";

export const eduCardTheme = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md items-center",
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

function EduCard(props) {
  return (
    <Card
      theme={eduCardTheme}
      imgSrc={props.logo}
      className="w-80 shrink-0 gap-1 px-4 py-2 md:py-4 lg:w-[25rem]"
      horizontal
    >
      <div>
        <p className="text-md font-semibold xl:text-lg">{props.degree}</p>
        <p className="font-semibold lg:text-xl">{props.program}</p>
        <p className="text-sm text-gray-500 xl:text-base">{props.school}</p>
        <p className="text-sm text-gray-500 xl:text-base">{props.location}</p>
        <p className="text-sm text-gray-500 xl:text-base">{props.years}</p>
      </div>
    </Card>
  );
}

export default EduCard;
