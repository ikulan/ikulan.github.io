import { useState } from "react";
import { Card } from "flowbite-react";
import { eduCardTheme } from "./EduCard";
import EduModal from "./EduModal";

function EduCardWithModal(props) {
  const [openModal, setOpenModal] = useState(false);
  const titleSize = props.program.length > 18 ? "text-md" : "text-lg";

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
          <p className={`${titleSize} font-semibold lg:text-xl`}>
            {props.program}
          </p>
          <p className="text-sm text-gray-500 xl:text-base">{props.school}</p>
          {props.location ? (
            <>
              <p className="text-sm text-gray-500 xl:text-base">
                {props.location}
              </p>
              <div className="flex justify-between">
                <p className="text-sm text-gray-500 xl:text-base">
                  {props.years}
                </p>
                <p className="text-sm text-peach-600 hover:underline">
                  more &gt;&gt;
                </p>
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-500 xl:text-base">
                {props.years}
              </p>
              <div className="flex justify-end">
                <p className="text-sm text-peach-600 hover:underline">
                  more &gt;&gt;
                </p>
              </div>
            </>
          )}
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
