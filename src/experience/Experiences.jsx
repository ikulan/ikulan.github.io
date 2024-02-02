import SectionHeader from "../components/SectionHeader";
import ExpAccordion from "./ExpAccordion";
import ExpOverview from "./ExpOverview";

const expObjs = [
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
      "Developed the SaaS web application of an influencer marketing management and analytics software using Ruby (Sinatra).",
      "Designed and implemented RESTful API, leveraging MongoDB to store and process the high-volume social media data.",
      "Worked collaboratively with the design and product teams to craft comprehensive analytics and reporting features, incorporating interactive data visualizations through the use of JavaScript, jQuery, and D3.js.",
      "Developed the search system using Elasticsearch, optimizing search performance, and extending seach capabilities for CJK contents.",
      "Established integration test using Capybara framework to ensure robust end-to-end functionality.",
      "Constructed a Python API service (using Flask) to leverage machine learning models, extracting meaningful insights and enhance the data quality of the platform.",
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
    ],
    descriptions: [
      "Developed the large-scale data processing pipeline for a social listening system using Java. Supported NLP processing on millions of social media posts per hour.",
      "Collaborated with Linguists colleagues to develop the rule-based NLP engine. Transformed XML rules into programmable logics, leveraging algorithmic and data structure knowledge to efficiently extract diverse linguistic structures from text data across 27 deep parsing languages.",
      "Evaluated and integrated new technologies into the NLP pipeline, engineering innovative solutions into robust software modules.",
      "Conducted profiling and optimization of Java programs to enhance the time performance, memory utilization and multi-thread handling, ensuring the efficiency and reliability within distributed system.",
      "Owned and developed an internal tool using Java Swing, a desktop GUI application to visualize NLP parsing results.",
      "Set up CI/CD pipeline using Jenkins, enabling test automation, software releasing and deployment.",
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
    <div id="section_exp" className="my-6 max-w-screen-xl lg:mx-8 lg:my-12 ">
      <SectionHeader>Experience</SectionHeader>
      <div className="grid grid-flow-row auto-rows-max lg:grid-cols-3">
        <div className="mx-2 mb-4 space-y-2 text-pretty text-sm leading-relaxed text-stone-900 md:text-base lg:mx-0 lg:space-y-4 lg:pr-4 xl:text-lg">
          <ExpOverview />
        </div>
        <div className="lg:col-span-2">
          <ExpAccordion expObjs={expObjs} />
        </div>
      </div>
    </div>
  );
}

export default Experiences;
