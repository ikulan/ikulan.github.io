import { DetailWebsite, DetailPiggies } from "./details";

export const projObjs = [
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
    detailComponent: DetailWebsite,
    techstack: "JavaScript, React, Tailwind CSS, Flowbite-React, Vite",
    deployment: "GitHub Pages",
    siteUrl: "https://ikulan.github.io",
    githubUrl: "https://github.com/ikulan/personal_website",
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
    detailComponent: DetailPiggies,
    techstack: "TypeScript, HTML5 Drag and Drop API, CSS, Webpack",
    deployment: "AWS S3",
    siteUrl: "http://piggies-yl-liu.s3-website-us-west-2.amazonaws.com/",
    githubUrl: "https://github.com/ikulan/three_little_piggies",
  },
];
