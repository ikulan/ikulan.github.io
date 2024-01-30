import { useState } from "react";
import { Card } from "flowbite-react";
import { eduCardTheme } from "./EduCard";
import EduModal from "./EduModal";

function EduCardWithModal(props) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card
        theme={eduCardTheme}
        imgSrc={props.logo}
        className="w-80 shrink-0 gap-1 px-4 py-2 hover:-translate-x-2 hover:-translate-y-2 hover:cursor-pointer md:py-4 lg:w-[25rem] "
        horizontal
        onClick={() => setOpenModal(true)}
      >
        <div>
          <p className="text-md font-semibold xl:text-lg">{props.degree}</p>
          <p className="font-semibold lg:text-xl">{props.program}</p>
          <p className="text-sm text-gray-500 xl:text-base">{props.school}</p>
          <p className="text-sm text-gray-500 xl:text-base">{props.location}</p>
          <p className="text-sm text-gray-500 xl:text-base">{props.years}</p>
          <a
            className="text-peach-600 hover:underline"
            onClick={() => setOpenModal(true)}
          >
            Learn more
          </a>
        </div>
      </Card>
      <EduModal
        isOpen={openModal}
        handleClose={() => setOpenModal(false)}
        {...props}
      ></EduModal>
    </>
  );
}

export default EduCardWithModal;
