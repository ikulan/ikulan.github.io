import EduCard from "../components/EduCard";
import EduCardWithModal from "../components/EduCardWithModal";
import SectionHeader from "../components/SectionHeader";
import { eduObjs } from "../contents/education";

function Educations() {
  return (
    <div id="section_edu" className="my-6 flex flex-col lg:mx-8 lg:my-12">
      <div className="m-4">
        <SectionHeader>Education & Certificates</SectionHeader>
      </div>
      <div className="grid-row grid items-center justify-center gap-y-6 md:grid-cols-2 xl:grid-cols-3">
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

export default Educations;
