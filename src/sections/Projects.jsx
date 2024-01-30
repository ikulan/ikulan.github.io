import ProjCard from "../components/ProjCard";
import SectionHeader from "../components/SectionHeader";

const projObjs = [
  {
    name: "Personal Website",
    imgUrl: "/projects/landing_1024x768.png",
    creationDate: "Jan, 2024",
    description: "This website. I crafted it from scratch.",
    skills: [
      { name: "JavaScript", color: "amber" },
      { name: "Tailwind CSS", color: "sky" },
      { name: "React", color: "sky" },
      { name: "Flowbite", color: "sky" },
      { name: "Vite", color: "lake" },
    ],
    details: {
      techstack: "JavaScript, React, Tailwind CSS, Flowbite-React, Vite",
      deployment: "GitHub Pages",
      intro: [
        "I crafted this personal website using React, Tailwind CSS, and Flowbite component library.",
      ],
      learned: [
        "Through this project, I familiarize myself in using Tailwind CSS syntax and usages. Tailwind CSS streamlined the styling process, enabling me to efficiently build a beautiful modern webpage with responsive web design.",
        "I also explored component libraries for Tailwind CSS and React.",
      ],
      nextStep: ["To add dark mode."],
      siteUrl: "https://ikulan.github.io",
      githubUrl: "https://github.com/ikulan/personal_website",
    },
  },
  {
    name: "Three Little Piggies",
    imgUrl: "/projects/piggies.png",
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
    details: {
      techstack: "TypeScript, HTML5 Drag and Drop API, CSS, Webpack",
      deployment: "AWS S3",
      intro: [""],
      learned: [""],
      nextStep: [""],
      siteUrl: "http://piggies-yl-liu.s3-website-us-west-2.amazonaws.com/",
      githubUrl: "https://github.com/ikulan/three_little_piggies",
    },
  },
];

function Projects() {
  return (
    <div id="section_proj" className="my-6 flex flex-col lg:mx-8 lg:my-12">
      <div>
        <SectionHeader>Projects</SectionHeader>
        <p>Click to see more detail.</p>
      </div>
      <div className="m-4 grid items-start justify-start gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projObjs.map((obj, i) => (
          <ProjCard key={i} {...obj} />
        ))}
        <div></div>
      </div>
    </div>
  );
}

export default Projects;
