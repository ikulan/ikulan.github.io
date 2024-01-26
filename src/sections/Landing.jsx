import Avatar from "../components/Avatar";
import IconButton from "../components/IconButton";
import NavButton from "../components/NavButton";

const avatarProps = {
  img_url: "/photo.jpg",
  alt_name: "Patty Liu",
};

function Landing() {
  return (
    <div className="grid min-h-screen py-6">
      <div className="my-auto flex flex-col items-center lg:flex-row lg:justify-center">
        <div className="space-y-2 md:space-y-4 lg:w-4/12">
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
              based on Vancouver, Canada
            </p>
          </div>

          {/* social media icons */}
          <div className="flex justify-center space-x-4">
            <IconButton type="github" />
            <IconButton type="linkedin" />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 md:space-y-4 lg:w-8/12">
          {/* description */}
          <div className="space-y-2 px-3 py-4 text-sm md:max-w-xl md:py-6 md:text-lg">
            <p className="text-pretty">
              With 6 years of professional experience, I possess expertise in
              backend technologies and languages such as Python, Ruby, and Java.
              I&apos;m also proficient in front-end technologies and frameworks
              (e.g., HTML, CSS, JavaScript, React.)
            </p>
            <p className="text-pretty">
              Throughout my career, I am dedicated to delivering high-quality
              software, pursuing continuous growth, and maintaining seamless
              collaboration with cross-functional teams.
            </p>
          </div>

          {/* nav buttons */}
          <div className="flex flex-col items-start space-y-10 py-6 md:flex-row md:justify-between md:space-x-2 md:space-y-0 md:align-middle">
            <NavButton>Experience</NavButton>
            <NavButton>Education</NavButton>
            <NavButton>Projects</NavButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
