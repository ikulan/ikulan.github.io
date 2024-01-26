import IconButton from "../components/IconButton";

function Footer() {
  return (
    <footer className="bg-stone-200">
      <div className="flex flex-row items-center justify-center gap-4 px-12 py-4 dark:bg-gray-700">
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center md:text-base">
            <a
              href="https://github.com/ikulan/personal_website"
              className="hover:text-peach-600 hover:underline"
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
