import { GithubSvg } from "../icons/github";
import { LinkedinSvg } from "../icons/linkedin";

function IconButton({ type }) {
  switch (type.toLowerCase()) {
    case "github":
      return (
        <a href="https://github.com/ikulan" target="_blank" rel="noreferrer">
          <GithubSvg className="w-8 fill-stone-500 hover:fill-peach-400 md:w-10" />
        </a>
      );

    case "linkedin":
      return (
        <a
          href="https://www.linkedin.com/in/ikulan12/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinSvg className="w-8 fill-stone-500 hover:fill-peach-400 md:w-10" />
        </a>
      );

    default:
      throw new Error(`No such type for IconButton: ${type}`);
  }
}

export default IconButton;
