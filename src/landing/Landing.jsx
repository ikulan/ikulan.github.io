import Avatar from "../components/Avatar";
import IconButton from "../components/IconButton";
import NavButton from "./NavButton";

const avatarProps = {
  img_url: "./photo.jpg",
  alt_name: "Avatar Photo",
};

function Landing() {
  return (
    <div className="grid min-h-screen md:py-6">
      <div className="my-auto flex flex-col items-center lg:flex-row lg:justify-center">
        <div className="md:space-y-4 lg:w-4/12">
          {/* header */}
          <div className="flex flex-col items-center md:space-y-2">
            <Avatar
              img_url={avatarProps.img_url}
              alt_name={avatarProps.alt_name}
            />
            <p className="py-2 font-serif text-3xl font-semibold md:text-5xl">
              Patty Liu
            </p>
            <p className="text-2xl text-stone-700 md:text-4xl">
              Software Developer
            </p>
            <p className="text-lg text-stone-700 md:text-2xl">
              based in Vancouver, Canada
            </p>
          </div>

          {/* social media icons */}
          <div className="my-2 flex justify-center space-x-4">
            <IconButton type="github" />
            <IconButton type="linkedin" />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 md:space-y-4 lg:w-8/12">
          {/* description */}
          <div className="space-y-4 text-pretty px-3 text-sm md:max-w-xl md:py-4 md:py-6 md:text-lg">
            <p>
              Throughout my 6-year career, I am dedicated to delivering
              high-quality software, pursuing continuous growth, and maintaining
              seamless collaboration with cross-functional teams.
            </p>
            <p>
              I possess expertise in NLP and search systems. In my early career,
              I honed Java and performance optimization skills while developing
              an industry-grade NLP system. I also gained valuable experience
              collaborating with specialists to turn experimental solutions into
              robust software systems.
            </p>
            <p>
              Later, I pivoted my expertise into web development, expanding
              proficiency in backend and frontend technologies to create
              full-stack, data-intensive applications.
            </p>
          </div>

          {/* nav buttons */}
          <div className="flex flex-col items-start space-y-10 py-6 md:flex-row md:justify-between md:space-x-2 md:space-y-0 md:align-middle">
            <NavButton url="#section_exp">Experience</NavButton>
            <NavButton url="#section_edu">Education</NavButton>
            <NavButton url="#section_proj">Projects</NavButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
