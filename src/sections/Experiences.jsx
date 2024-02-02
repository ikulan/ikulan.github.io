import ExpAccordion from "../components/ExpAccordion";
import SectionHeader from "../components/SectionHeader";
import { expObjs } from "../contents/experience";
import { ExpOverview } from "../contents/experience/overview";

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
