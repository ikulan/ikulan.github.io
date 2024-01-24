import Avatar from "../components/Avatar";

const avatarProps = {
  img_url: "/photo.jpg",
  alt_name: "Patty Liu",
};

function Landing() {
  return (
    <div className="min-h-screen py-6 flex flex-col items-center">
      {/* header */}
      <div className="flex flex-col items-center md:space-y-2">
        <Avatar img_url={avatarProps.img_url} alt_name={avatarProps.alt_name} />
        <p className="font-serif py-2 text-4xl md:text-6xl  font-semibold">
          Patty Liu
        </p>
        <p className="text-3xl md:text-5xl text-stone-700">
          Software Developer
        </p>
        <p className="text-xl md:text-3xl text-stone-700">
          based on Vancouver, Canada
        </p>
      </div>

      {/* social icons */}

      {/* description */}

      {/* nav buttons */}
      <div className="flex flex-col items-start space-y-10 py-6">
        <div>
          <a href="#" className="cta">
            <span>Experience →</span>
          </a>
        </div>
        <div>
          <a href="#" className="cta">
            <span>Education →</span>
          </a>
        </div>
        <div>
          <a href="#" className="cta">
            <span>Projects →</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
