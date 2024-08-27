import { Modal } from "flowbite-react";
import ModalButton from "../components/ModalButton";

const modalTheme = {
  content: {
    inner: "relative rounded-lg bg-white shadow flex flex-col max-h-[85dvh]",
  },
};

function ProjModal(props) {
  return (
    <Modal
      show={props.isOpen}
      onClose={props.handleClose}
      size="3xl"
      theme={modalTheme}
      dismissible
    >
      <Modal.Header>
        <span className="font-semibold">{props.name}</span>
        <span className="ml-4 text-xs font-medium text-stone-500 lg:text-sm">
          {props.creationDate}
        </span>
      </Modal.Header>
      <Modal.Body className="flex flex-col overflow-auto md:flex-row-reverse">
        {/* description */}
        <div className="space-y-4 md:w-2/3 md:pl-4">
          <props.detailComponent />
        </div>

        {/* image and info */}
        <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-2 text-stone-800 md:mt-0 md:w-1/3 md:grid-cols-1">
          <div className="flex items-center">
            <img src={props.imgUrl} />
          </div>
          <div className="space-y-2 text-sm">
            <div>
              <h3 className="font-semibold">Techstack:</h3>
              <p>{props.techstack}</p>
            </div>
            {props.deployment && (
              <div>
                <h3 className="font-semibold">Deployment:</h3>
                <p>{props.deployment}</p>
              </div>
            )}
            {props.githubUrl && (
              <div className="flex">
                <ModalButton type="github" action={props.githubUrl} />
              </div>
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="grid w-full grid-cols-2 gap-2">
          <ModalButton type="link" action={props.siteUrl}>
            Visit Website
          </ModalButton>
          <ModalButton type="close" action={props.handleClose} />
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjModal;
