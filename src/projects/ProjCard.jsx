import { useState } from "react";
import { Card } from "flowbite-react";
import Tag from "../components/Tag";
import ProjModal from "./ProjModal";

const customTheme = {
  root: {
    children: "flex h-full flex-col justify-between gap-4 p-4",
  },
};

function ProjCard(props) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card
        theme={customTheme}
        className="h-[24rem] w-64 shrink-0 shadow-lg hover:-translate-x-2 hover:-translate-y-2 hover:cursor-pointer lg:h-[28rem] lg:w-72"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={props.imgUrl}
        onClick={() => setOpenModal(true)}
      >
        <div className="">
          <h5 className="text-lg font-bold tracking-tight text-stone-900 lg:text-xl">
            {props.name}
          </h5>
          <p className="text-xs text-stone-500 lg:text-sm">
            {props.creationDate}
          </p>
          <p className="text-sm text-stone-900 lg:my-2 lg:text-base">
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
      <ProjModal
        isOpen={openModal}
        handleClose={() => setOpenModal(false)}
        {...props}
      />
    </>
  );
}

export default ProjCard;
