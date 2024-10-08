import SectionHeader from "../components/SectionHeader";
import EduCard from "./EduCard";
import EduCardWithModal from "./EduCardWithModal";
import DetailLLM from "./DetailLLM";
import DetailMaster from "./DetailMaster";
import DetailAWSSAA from "./DetailAWSSAA";

const eduObjs = [
  {
    degree: "Master's Degree",
    program: "Computer Science",
    school: "National Tsing Hua University",
    logo: "./logo_nthu.png",
    location: "Taiwan",
    years: "2011 - 2014",
    hasDetail: true,
    detailComponent: DetailMaster,
  },
  {
    degree: "Bachelor's Degree",
    program: "Computer Science",
    school: "National Tsing Hua University",
    logo: "./logo_nthu.png",
    location: "Taiwan",
    years: "2007 - 2011",
  },
  {
    degree: "Exchange Student",
    program: "Informatics",
    school: "Kyoto University",
    logo: "./logo_kyotoU.svg",
    location: "Japan",
    years: "2013 - 2014",
  },
  {
    degree: "Professional Certificate",
    program: "Large Language Models",
    school: "Databricks",
    logo: "./logo_databricks.png",
    location: null,
    years: "Oct, 2023",
    hasDetail: true,
    detailComponent: DetailLLM,
    credentialUrl:
      "https://credentials.edx.org/credentials/5d0f0fefcc2d43e2b756fcf5b910c7d6/",
  },
  {
    degree: "AWS Certified",
    program: "Solutions Architect – Associate",
    school: null,
    logo: "./badge_aws_saa.png",
    location: null,
    years: "Apr, 2024",
    hasDetail: true,
    detailComponent: DetailAWSSAA,
    credentialUrl:
      "https://www.credly.com/badges/1a48e92d-f6a2-4183-aba1-e4d7fd596ee8/public_url",
  },
];

function Education() {
  return (
    <div id="section_edu" className="my-6 flex flex-col lg:mx-8 lg:my-12">
      <div className="m-4">
        <SectionHeader>Education & Certificates</SectionHeader>
      </div>
      <div className="grid-row grid items-center justify-center gap-y-6 md:grid-cols-2 2xl:grid-cols-3">
        {eduObjs.map((obj, i) => (
          <div key={i} className="flex justify-center">
            {obj.hasDetail ? (
              <EduCardWithModal {...obj} />
            ) : (
              <EduCard {...obj} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
