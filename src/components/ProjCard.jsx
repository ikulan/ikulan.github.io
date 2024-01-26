import { Card } from "flowbite-react";
import Tag from "./Tag";

const customTheme = {
  root: {
    children: "flex h-full flex-col justify-between gap-4 p-4",
  },
};

function ProjCard(props) {
  return (
    <Card
      theme={customTheme}
      className="h-[24rem] w-64 shrink-0 border-2 border-peach-200 shadow-lg lg:h-[28rem] lg:w-72"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={props.imgUrl}
    >
      <div className="">
        <h5 className="text-lg font-bold tracking-tight text-stone-900 dark:text-white lg:text-xl">
          {props.name}
        </h5>
        <p className="text-xs text-gray-500 lg:text-sm">{props.creationDate}</p>
        <p className="text-sm text-gray-900 lg:my-2 lg:text-base">
          {props.description}
        </p>
      </div>
      <div className="flex align-bottom">
        <div className="flex flex-wrap gap-y-1">
          {props.skills &&
            props.skills.map((s) => (
              <Tag key={s.name} color={s.color} size="sm">
                {s.name}
              </Tag>
            ))}
        </div>
      </div>
    </Card>
  );
}

export default ProjCard;
