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
      { name: "Responsive", color: "blueviolet" },
    ],
  },
  {
    name: "Three Little Piggies",
    imgUrl: "/projects/piggies.png",
    creationDate: "Oct, 2023",
    description:
      "A vanilla TypeScript project aimed at creating a web version of the preschool board game.",
    skills: [
      { name: "TypeScript", color: "amber" },
      { name: "CSS", color: "amber" },
      { name: "HTML5", color: "amber" },
      { name: "Webpack", color: "lake" },
      { name: "AWS S3", color: "lake" },
      { name: "OOP", color: "blueviolet" },
    ],
  },
];

function Projects() {
  return (
    <div id="section_proj" className="my-6 flex min-h-screen flex-col lg:mx-8">
      <div>
        <SectionHeader>Projects</SectionHeader>
      </div>
      <div className="m-4 grid items-start justify-start gap-x-6 gap-y-6 md:auto-cols-max md:grid-flow-col">
        {projObjs.map((obj, i) => (
          <ProjCard key={i} {...obj} />
        ))}
        <div></div>
      </div>
    </div>
  );
}

export default Projects;
