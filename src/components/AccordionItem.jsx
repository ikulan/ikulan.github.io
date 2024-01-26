import { Accordion } from "flowbite-react";
import Tag from "./Tag";
import { ExtLinkSvg } from "../icons/external_link";

function AccordionItem(props) {
  return (
    <>
      <Accordion.Title>
        <div className="flex flex-col justify-between gap-2 gap-x-6 py-2 md:flex-row md:py-5">
          {/* title, company and period */}
          <div className="md:min-w-64">
            <p className="text-lg font-semibold leading-6 text-stone-900 md:text-xl">
              {props.title}
            </p>
            <div>
              <a
                className="inline-flex items-center gap-x-1 text-stone-500 hover:text-peach-600 hover:underline md:text-lg"
                href={props.companyUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>{props.companyName}</span>
                <span>
                  <ExtLinkSvg className="h-4 w-4 md:h-5 md:w-5" />
                </span>
              </a>
            </div>
            <span className="text-sm text-stone-500 md:text-base">
              {props.startYear} - {props.endYear}
            </span>
          </div>

          {/* skills */}
          <div className="p-0">
            <div className="flex flex-wrap gap-y-1 md:gap-y-2">
              {props.skills &&
                props.skills.map((s) => (
                  <Tag key={s.name} color={s.color}>
                    {s.name}
                  </Tag>
                ))}
            </div>
          </div>
        </div>
      </Accordion.Title>
      <Accordion.Content>
        <div className="min-h-28 p-3 pl-6 md:text-lg">
          <ul className="list-disc">
            {props.descriptions &&
              props.descriptions.map((line, i) => (
                <li key={i}>
                  <p>{line}</p>
                </li>
              ))}
          </ul>
        </div>
      </Accordion.Content>
    </>
  );
}

export default AccordionItem;
