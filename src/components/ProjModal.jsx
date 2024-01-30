import { Button, Modal } from "flowbite-react";
import { GithubSvg } from "../icons/github";
import { ExtLinkSvg } from "../icons/external_link";

const buttonTheme = {
  color: {
    peach:
      "text-peach-900 bg-peach-200 hover:bg-peach-300 focus:ring-offset-2 focus:ring-peach-500",
  },
};

function ProjModal(props) {
  return (
    <Modal show={props.isOpen} onClose={props.handleClose} size="3xl">
      <Modal.Header>
        <span className="font-semibold">{props.name}</span>
        <span className="ml-4 text-xs font-medium text-gray-500 lg:text-sm">
          {props.creationDate}
        </span>
      </Modal.Header>
      <Modal.Body className="flex overflow-auto md:flex-row">
        {/* image and info */}
        <div className="w-1/3 text-gray-800">
          <img src={props.imgUrl} />
          <div className="mt-2 space-y-2 text-sm">
            <div>
              <h3 className="font-semibold">Techstack:</h3>
              <p>{props.techstack}</p>
            </div>
            <div>
              <h3 className="font-semibold">Deployment:</h3>
              <p>{props.deployment}</p>
            </div>
          </div>
        </div>

        {/* description */}
        <div className="w-2/3 space-y-4 pl-4">
          <props.detailComponent />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="grid w-full grid-cols-2 gap-2">
          <Button
            theme={buttonTheme}
            className="grow"
            color="peach"
            href={props.githubUrl}
            target="_blank"
          >
            <GithubSvg className="mr-2 w-5 fill-peach-900" />
            Source Code
          </Button>
          <Button
            theme={buttonTheme}
            className="grow"
            color="peach"
            href={props.siteUrl}
            target="_blank"
          >
            Visit Website
            <ExtLinkSvg className="ml-2 w-5 stroke-peach-900" />
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjModal;
