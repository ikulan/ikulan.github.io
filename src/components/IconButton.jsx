import { GithubSvg } from "../icons/github";
import { LinkedinSvg } from "../icons/linkedin";

const colorClasses = "fill-stone-500 hover:fill-peach-400";
const sizeClasses = {
  sm: "w-5 md:w-6",
  base: "w-8 md:w-10",
};

function IconButton({ type, size = "base" }) {
  switch (type.toLowerCase()) {
    case "github":
      return (
        <a href="https://github.com/ikulan" target="_blank" rel="noreferrer">
          <GithubSvg className={`${colorClasses} ${sizeClasses[size]}`} />
        </a>
      );

    case "linkedin":
      return (
        <a
          href="https://www.linkedin.com/in/ikulan12/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinSvg className={`${colorClasses} ${sizeClasses[size]}`} />
        </a>
      );

    default:
      throw new Error(`No such type for IconButton: ${type}`);
  }
}

export default IconButton;
