import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import {Button} from "@nextui-org/button";
import {IoLogoReact} from "react-icons/io5";
import {BiLogoTypescript} from "react-icons/bi";

export default function SkillsPage() {

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center w-full gap-6">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Mes skills</h1>
        </div>
        <div className="flex flex-col w-full gap-6 items-start pt-10">
          <span className={title({size: "sm"})}>
            FrontEnd
          </span>
          <div className="flex gap-2 pt-3 pb-4">
            <Popover placement="bottom">
              <PopoverTrigger>
                <Button
                  color={"secondary"}>
                  React
                  <IoLogoReact />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Formation CDA*</div>
                  <div className="text-tiny">2024 - 2026 à l'école d'Oclock</div>
                </div>
              </PopoverContent>
            </Popover>
            <Popover placement="bottom">
              <PopoverTrigger>
                <Button
                color={"primary"}>
                  TypeScript
                  <BiLogoTypescript/>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Formation CDA*</div>
                  <div className="text-tiny">École O'Clock</div>
                  <div className="text-tiny">En entreprise</div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          {/* Faire des popover sur les différentes technologies avec l'endroit où j'ai appris */}
          <span className={title({size: "sm"})}>
            BackEnd
          </span>
          <span className={title({size: "sm"})}>
            Base de données
          </span>
          <span className={title({size: "sm"})}>
            Outils de développement
          </span>
          <span className={title({size: "sm"})}>
            Soft Skills
          </span>
        </div>
        <span>
          *CDA correspond à la formation Concepteur Développeur d'Application, équivalent à un bac+4
        </span>
      </section>
    </DefaultLayout>
  );
}
