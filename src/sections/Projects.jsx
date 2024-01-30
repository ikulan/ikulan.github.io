import ProjCard from "../components/ProjCard";
import SectionHeader from "../components/SectionHeader";
import { projObjs } from "../contents/project";

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
