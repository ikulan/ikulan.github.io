import { Modal } from "flowbite-react";
import ModalButton from "../components/ModalButton";

function EduModal(props) {
  return (
    <Modal
      show={props.isOpen}
      size="2xl"
      onClose={props.handleClose}
      popup
      dismissible
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <h5 className="text-md font-medium xl:text-lg">{props.degree}</h5>
          <h4 className="text-lg font-semibold lg:text-xl">{props.program}</h4>
          <span className="text-sm text-stone-500 xl:text-base">
            {props.school}
          </span>
          {props.school && <span> &middot; </span>}
          <span className="text-sm text-stone-500 xl:text-base">
            {props.years}
          </span>
        </div>
        <div className="mb-4 mt-2 space-y-4">
          <props.detailComponent />
        </div>

        <div className="grid w-full grid-cols-2 gap-2">
          {props.credentialUrl ? (
            <ModalButton type="link" action={props.credentialUrl}>
              Show Credential
            </ModalButton>
          ) : (
            <div></div>
          )}

          <ModalButton type="close" action={props.handleClose} />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default EduModal;
