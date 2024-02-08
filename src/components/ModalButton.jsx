import { Button } from "flowbite-react";
import { ExtLinkSvg } from "../icons/external_link";
import { GithubSvg } from "../icons/github";

const buttonTheme = {
  color: {
    peach:
      "text-peach-900 bg-peach-200 hover:bg-peach-300 focus:ring-offset-2 focus:ring-peach-500",
    gray: "text-stone-900 bg-white border border-stone-200 enabled:hover:bg-stone-100 focus:ring-offset-2 focus:ring-peach-500 focus:ring-4",
  },
};

function ModalButton({ type, action, children }) {
  switch (type.toLowerCase()) {
    case "link":
      return (
        <Button
          theme={buttonTheme}
          className="grow"
          color="peach"
          href={action}
          target="_blank"
        >
          {children}
          <ExtLinkSvg className="ml-2 w-5 stroke-peach-900" />
        </Button>
      );

    case "github":
      return (
        <Button
          theme={buttonTheme}
          color="peach"
          size="sm"
          href={action}
          target="_blank"
        >
          <GithubSvg className="mr-2 w-5 fill-peach-900" />
          Source Code
        </Button>
      );

    case "close":
      return (
        <Button
          theme={buttonTheme}
          className="grow"
          color="gray"
          onClick={action}
        >
          Close
        </Button>
      );

    default:
      throw new Error(`No such type for ModalButton: ${type}`);
  }
}

export default ModalButton;
