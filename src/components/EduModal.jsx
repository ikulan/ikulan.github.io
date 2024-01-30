import { Button, Modal } from "flowbite-react";
import { ExtLinkSvg } from "../icons/external_link";

const buttonTheme = {
  color: {
    peach:
      "text-peach-900 bg-peach-200 hover:bg-peach-300 focus:ring-offset-2 focus:ring-peach-500",
    gray: "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 focus:ring-offset-2 focus:ring-peach-500 focus:ring-4",
  },
};

function EduModal(props) {
  return (
    <Modal show={props.isOpen} size="2xl" onClose={props.handleClose} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <p className="text-md font-medium xl:text-lg">{props.degree}</p>
          <p className="font-semibold lg:text-xl">{props.program}</p>
          <span className="text-sm text-gray-500 xl:text-base">
            {props.school}
          </span>
          <span> &middot; </span>
          <span className="text-sm text-gray-500 xl:text-base">
            {props.years}
          </span>
        </div>
        <div className="mb-4 mt-2 space-y-4">
          <props.detailComponent />
        </div>
        <div className="grid w-full grid-cols-2 gap-2">
          <Button
            theme={buttonTheme}
            className="grow"
            color="peach"
            href={props.credentialUrl}
            target="_blank"
          >
            Show Credential
            <ExtLinkSvg className="ml-2 w-5 stroke-peach-900" />
          </Button>
          <Button
            theme={buttonTheme}
            className="grow"
            color="gray"
            onClick={props.handleClose}
          >
            Close
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default EduModal;
