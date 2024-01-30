import ExpAccordion from "../components/ExpAccordion";
import SectionHeader from "../components/SectionHeader";
import { expObjs } from "../contents/experience";
import { ExpOverview } from "../contents/experience/expOverview";

function Experiences() {
  return (
    <div
      id="section_exp"
      className="my-6 grid max-w-screen-xl grid-flow-row auto-rows-max lg:mx-8 lg:my-12 lg:grid-cols-3"
    >
      <div>
        <SectionHeader>Experience</SectionHeader>
        <div className="space-y-4 pr-2 md:text-lg">
          <ExpOverview />
        </div>
      </div>
      <div className="mt-6 lg:col-span-2">
        <ExpAccordion expObjs={expObjs} />
      </div>
    </div>
  );
}

export default Experiences;
