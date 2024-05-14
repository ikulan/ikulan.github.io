import SectionHeader from "../components/SectionHeader";
import ProjCard from "./ProjCard";
import DetailWebsite from "./DetailWebsite";
import DetailPiggies from "./DetailPiggies";
import DetailMovieList from "./DetailMovieList";
import DetailPwdManager from "./DetailPwdManager";

const projObjs = [
  {
    name: "Password Manager",
    imgUrl: "./projects/password-manager.png",
    creationDate: "May, 2024",
    description:
      "A web app that can securely store and share usernames and passwords.",
    skills: [
      { name: "Ruby on Rails", color: "peach" },
      { name: "PostgreSQL", color: "lake" },
      { name: "Tailwind CSS", color: "sky" },
      { name: "JavaScript", color: "amber" },
    ],
    detailComponent: DetailPwdManager,
    techstack:
      "Ruby on Rails, PostgreSQL, TailwindCSS, JavaScript, Stimulus.js",
    deployment: "Fly.io, Docker",
    siteUrl: "https://password-manager-pliu.fly.dev/",
    githubUrl:
      "https://github.com/ikulan/RailsProjects/tree/main/password_manager",
  },
  {
    name: "Personal Website",
    imgUrl: "./projects/landing_1024x768.png",
    creationDate: "Jan, 2024",
    description: "This website. I crafted it from scratch.",
    skills: [
      { name: "JavaScript", color: "amber" },
      { name: "Tailwind CSS", color: "sky" },
      { name: "React", color: "sky" },
      { name: "Flowbite", color: "sky" },
      { name: "Vite", color: "lake" },
    ],
    detailComponent: DetailWebsite,
    techstack: "JavaScript, React, TailwindCSS, Flowbite-React, Vite",
    deployment: "GitHub Pages",
    siteUrl: "https://ikulan.github.io",
    githubUrl: "https://github.com/ikulan/ikulan.github.io",
  },
  {
    name: "My Movie List",
    imgUrl: "./projects/movie-list.png",
    creationDate: "Dec, 2023",
    description:
      "A web app for searching movie's information, given scores, and saving personal watched list.",
    skills: [
      { name: "JavaScript", color: "amber" },
      { name: "CSS", color: "sky" },
      { name: "React", color: "sky" },
    ],
    detailComponent: DetailMovieList,
    techstack: "JavaScript, React, CSS",
    deployment: "Vercel",
    siteUrl: "https://my-movie-list-iota.vercel.app/",
    githubUrl: "https://github.com/ikulan/ReactProjects/tree/main/MyMovieList",
  },
  {
    name: "Three Little Piggies",
    imgUrl: "./projects/piggies.png",
    creationDate: "Oct, 2023",
    description:
      "A vanilla TypeScript project for the web version of a board game.",
    skills: [
      { name: "TypeScript", color: "amber" },
      { name: "CSS", color: "amber" },
      { name: "HTML5", color: "amber" },
      { name: "Webpack", color: "lake" },
      { name: "AWS S3", color: "lake" },
    ],
    detailComponent: DetailPiggies,
    techstack: "TypeScript, HTML5 Drag and Drop API, CSS, Webpack",
    deployment: "AWS S3",
    siteUrl: "http://piggies-yl-liu.s3-website-us-west-2.amazonaws.com/",
    githubUrl: "https://github.com/ikulan/three_little_piggies",
  },
];

function Projects() {
  return (
    <div id="section_proj" className="my-6 flex flex-col lg:mx-8 lg:my-12">
      <div>
        <SectionHeader>Projects</SectionHeader>
        <p>Click to see more detail.</p>
      </div>
      <div className="m-4 grid items-center gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3 lg:items-start lg:justify-start xl:grid-cols-4">
        {projObjs.map((obj, i) => (
          <div key={i} className="flex justify-center">
            <ProjCard key={i} {...obj} />
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
}

export default Projects;
