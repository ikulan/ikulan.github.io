import IconButton from "./IconButton";

function Footer() {
  return (
    <footer className="bg-background">
      <div className="flex flex-row items-center justify-center gap-4 px-12 py-4">
        <div>
          <span className="text-sm text-stone-700 sm:text-center md:text-base">
            <a
              href="https://github.com/ikulan/personal_website"
              className="hover:text-peach-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              ikulan
            </a>{" "}
            &copy; 2024
          </span>
        </div>
        <div className="flex gap-2">
          <IconButton type="github" size="sm" />
          <IconButton type="linkedin" size="sm" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
