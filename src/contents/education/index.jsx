import { DetailLLM } from "./details";

export const eduObjs = [
  {
    degree: "Master's Degree",
    program: "Computer Science",
    school: "National Tsing Hua University",
    logo: "./logo_nthu.png",
    location: "Taiwan",
    years: "2011 - 2014",
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
    years: "2023",
    hasDetail: true,
    detailComponent: DetailLLM,
    credentialUrl:
      "https://credentials.edx.org/credentials/5d0f0fefcc2d43e2b756fcf5b910c7d6/",
  },
];
