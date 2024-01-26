import { Accordion, Flowbite } from "flowbite-react";
import AccordionItem from "./AccordionItem";

const customTheme = {
  accordion: {
    root: {
      base: "divide-y divide-dashed divide-stone-300 border-stone-300 shadow-lg shadow-peach-200 dark:divide-stone-700 dark:border-stone-700",
    },
    content: {
      base: "px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg",
    },
    title: {
      base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg px-5 text-left font-medium text-gray-500 dark:text-gray-400",
      flush: {
        off: "hover:bg-peach-100 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
        on: "bg-peach-200 dark:bg-transparent",
      },
      open: {
        on: "text-stone-900 bg-peach-100 dark:bg-stone-800 dark:text-white",
      },
    },
  },
};

function ExpAccordion({ expObjs }) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Accordion>
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
