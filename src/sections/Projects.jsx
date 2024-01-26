import SectionHeader from "../components/SectionHeader";

function Projects() {
  return (
    <div
      id="section_proj"
      className="my-6 flex min-h-screen flex-col lg:mx-8 lg:mt-12 lg:flex-row"
    >
      <div className="lg:w-4/12">
        <SectionHeader>Projects</SectionHeader>
      </div>
      <div className="lg:w-8/12"></div>
    </div>
  );
}

export default Projects;
