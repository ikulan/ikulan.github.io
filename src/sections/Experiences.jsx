import ExpAccordion from "../components/ExpAccordion";
import SectionHeader from "../components/SectionHeader";

const experiences = [
  {
    companyName: "WeArisma",
    companyUrl: "https://www.wearisma.com",
    title: "Full Stack Developer",
    startYear: 2018,
    endYear: 2020,
    skills: [
      { name: "Ruby", color: "amber" },
      { name: "Python", color: "amber" },
      { name: "JavaScript", color: "amber" },
      { name: "MongoDB", color: "lake" },
      { name: "Elasticsearch", color: "lake" },
      { name: "SaaS", color: "sky" },
      { name: "Startup", color: "sky" },
    ],
    descriptions: [
      "Developed the web application to serve enterprise clients an influencer marketing and analytics platform using Ruby, JavaScript.",
      "Designed and implemented the datastore and system pipeline to leverage the high-volume data using MongoDB and Elasticsearch.",
      "Created intuitive user interfaces and interactive charts using front-end technologies, enabling advanced analyzing and reporting features within the application.",
      "Conducted data science projects to deliver valuable insights using Python. The works include data crawling, data cleaning, modelling, integration, and visualization.",
    ],
  },
  {
    companyName: "NetBase (now Quid)",
    companyUrl: "https://www.quid.com",
    title: "Software Engineer",
    startYear: 2015,
    endYear: 2018,
    skills: [
      { name: "Java", color: "amber" },
      { name: "Natural Language Processing", color: "blueviolet" },
      { name: "Jenkins", color: "lake" },
      { name: "Data Processing Pipeline", color: "sky" },
    ],
    descriptions: [
      "Developed the backend of social listening system using Java, ensuring the robustness and efficiency to process and extract insights from large-scale social media data.",
      "Optimized time performance, memory utilization, and multi-thread handling. Utilized VisualVM to benchmark Java programs and identify areas for improvements.",
      "Evaluated and integrated new technologies into the system, expanding language support for NLP processing from 7 to 15 languages.",
      "Owned and developed internal tools, assisting linguist and scientist colleagues to streamline and enhance their workflow.",
    ],
  },
  {
    companyName: "Garmin",
    companyUrl: "https://www.garmin.com",
    title: "Software Engineer",
    startYear: 2014,
    endYear: 2015,
    skills: [
      { name: "C", color: "amber" },
      { name: "Embedded System", color: "blueviolet" },
    ],
    descriptions: [
      "Developed system software of driving recorder and sports camera using language C.",
      "Collaborated with electronic engineers and quality engineers to solve product line issues.",
    ],
  },
];

function Experiences() {
  return (
    <div
      id="section_exp"
      className="my-6 grid max-w-screen-xl grid-flow-row auto-rows-max lg:mx-8 lg:my-12 lg:grid-cols-3"
    >
      <div>
        <SectionHeader>Experience</SectionHeader>
      </div>
      <div className="mt-6 lg:col-span-2">
        <ExpAccordion expObjs={experiences} />
      </div>
    </div>
  );
}

export default Experiences;
