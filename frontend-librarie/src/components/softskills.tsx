import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function SoftSkills() {
  const defaultContent1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const defaultContent2 = "Test";
  const defaultContent3 = "Test deuxieme";

  return (
    <>
      <div className="flex gap-2 pt-6 pb-12 w-full justify-center">
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            {defaultContent1}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            {defaultContent2}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent3}
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
