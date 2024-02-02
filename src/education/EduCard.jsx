import { Card } from "flowbite-react";
import { eduCardTheme } from "./theme";

function EduCard(props) {
  return (
    <Card
      theme={eduCardTheme}
      imgSrc={props.logo}
      className="w-80 shrink-0 gap-1 px-4 py-2 md:py-4 lg:w-[25rem]"
      horizontal
    >
      <div>
        <h3 className="text-md font-semibold xl:text-lg">{props.degree}</h3>
        <h2 className="text-lg font-semibold lg:text-xl">{props.program}</h2>
        <p className="text-sm text-gray-500 xl:text-base">{props.school}</p>
        <p className="text-sm text-gray-500 xl:text-base">{props.location}</p>
        <p className="text-sm text-gray-500 xl:text-base">{props.years}</p>
      </div>
    </Card>
  );
}

export default EduCard;
