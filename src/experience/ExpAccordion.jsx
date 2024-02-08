import { Accordion, Flowbite } from "flowbite-react";
import AccordionItem from "./AccordionItem";

const customTheme = {
  accordion: {
    root: {
      base: "divide-y divide-dashed divide-stone-300 border border-primary ring-2 ring-primary shadow-lg shadow-stone-300 bg-white",
    },
    content: {
      base: "px-5 last:rounded-b-lg first:rounded-t-lg",
    },
    title: {
      base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg px-5 text-left font-medium text-stone-500",
      flush: {
        off: "hover:bg-peach-100",
      },
      open: {
        on: "text-stone-500 bg-peach-100",
      },
    },
  },
};

function ExpAccordion({ expObjs }) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Accordion collapseAll>
        {expObjs.map((obj) => (
          <Accordion.Panel key={obj.companyName}>
            <AccordionItem {...obj} />
          </Accordion.Panel>
        ))}
      </Accordion>
    </Flowbite>
  );
}

export default ExpAccordion;
