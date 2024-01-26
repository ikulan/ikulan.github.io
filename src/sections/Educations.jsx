import EduCard from "../components/EduCard";
import SectionHeader from "../components/SectionHeader";

const eduObjs = [
  {
    degree: "Bachelor's Degree",
    program: "Computer Science",
    school: "National Tsing Hua University",
    logo: "/logo_nthu.png",
    location: "Taiwan",
    years: "2007 - 2011",
  },
  {
    degree: "Master's Degree",
    program: "Computer Science",
    school: "National Tsing Hua University",
    logo: "/logo_nthu.png",
    location: "Taiwan",
    years: "2011 - 2014",
  },
  {
    degree: "Exchange Student",
    program: "Informatics",
    school: "Kyoto University",
    logo: "/logo_kyotoU.svg",
    location: "Japan",
    years: "2013 - 2014",
  },
  {
    degree: "Professional Certificate",
    program: "Large Language Models",
    school: "Databricks",
    logo: "/logo_databricks.png",
    location: null,
    years: "2023",
    hasDetail: true,
  },
];

function Educations() {
  return (
    <div id="section_edu" className="my-6 flex min-h-screen flex-col lg:mx-8">
      <div className="m-4">
        <SectionHeader>Education & Certificates</SectionHeader>
      </div>
      <div className="grid-row grid items-center justify-center gap-y-6 md:grid-cols-2 xl:grid-cols-3">
        {eduObjs.map((obj, i) => (
          <div key={i} className="flex justify-center">
            <EduCard key={i} {...obj} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Educations;
