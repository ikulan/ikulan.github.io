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
      <div className="my-auto flex flex-col items-center space-y-2">
        {/* header */}
        <div className="flex flex-col items-center md:space-y-2">
          <Avatar
            img_url={avatarProps.img_url}
            alt_name={avatarProps.alt_name}
          />
          <p className="font-serif py-2 text-3xl md:text-5xl  font-semibold">
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

        {/* description */}

        {/* nav buttons */}
        <div className="flex flex-col items-start space-y-10 py-6 md:space-y-0 md:space-x-4 md:flex-row md:max-w-2xl md:justify-between md:align-middle">
          <NavButton>Experience</NavButton>
          <NavButton>Education</NavButton>
          <NavButton>Projects</NavButton>
        </div>
      </div>
    </div>
  );
}

export default Landing;
