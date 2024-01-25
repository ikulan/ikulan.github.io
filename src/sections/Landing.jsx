import Avatar from "../components/Avatar";
import IconButton from "../components/IconButton";
import NavButton from "../components/NavButton";

const avatarProps = {
  img_url: "/photo.jpg",
  alt_name: "Patty Liu",
};

function Landing() {
  return (
    <div className="min-h-screen py-6 grid">
      <div className="my-auto flex flex-col items-center lg:flex-row lg:justify-center">
        <div className="space-y-2 md:space-y-4 lg:w-4/12">
          {/* header */}
          <div className="flex flex-col items-center md:space-y-2">
            <Avatar
              img_url={avatarProps.img_url}
              alt_name={avatarProps.alt_name}
            />
            <p className="font-serif py-2 text-3xl md:text-5xl font-semibold">
              Patty Liu
            </p>
            <p className="text-2xl md:text-4xl text-stone-700">
              Software Developer
            </p>
            <p className="text-lg md:text-2xl text-stone-700">
              based on Vancouver, Canada
            </p>
          </div>

          {/* social media icons */}
          <div className="flex space-x-4 justify-center">
            <IconButton type="github" />
            <IconButton type="linkedin" />
          </div>
        </div>

        <div className="space-y-2 md:space-y-4 flex flex-col items-center lg:w-8/12">
          {/* description */}
          <div className="px-3 py-4 text-sm md:text-lg md:max-w-xl md:py-6 space-y-2">
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
          <div className="flex flex-col items-start space-y-10 py-6 md:space-y-0 md:space-x-2 md:flex-row md:justify-between md:align-middle">
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
