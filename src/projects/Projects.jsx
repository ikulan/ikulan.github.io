import SectionHeader from "../components/SectionHeader";
import ProjCard from "./ProjCard";
import DetailWebsite from "./DetailWebsite";
import DetailPiggies from "./DetailPiggies";
import DetailMovieList from "./DetailMovieList";
import TechCard from "./TechCard";

const projObjs = [
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
      </div>
      <div className="grid-row grid items-center justify-center gap-y-6 md:grid-cols-2 2xl:grid-cols-3">
        <div className="flex justify-center">
          <TechCard
            title="Ruby on Rails Projects"
            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg"
            githubUrl="https://github.com/ikulan/RailsProjects"
          />
        </div>
        <div className="flex justify-center">
          <TechCard
            title="React Projects"
            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
            githubUrl="https://github.com/ikulan/ReactProjects"
          />
        </div>
      </div>
      <div className="mt-8 grid items-center gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3 lg:items-start lg:justify-start 2xl:grid-cols-4">
        {projObjs.map((obj, i) => (
          <div key={i} className="flex justify-center">
            <ProjCard key={i} {...obj} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
