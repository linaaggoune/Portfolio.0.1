import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import FrontEnd from "@/components/frontend.tsx";
import Backend from "@/components/backend.tsx";
import Database from "@/components/bdd.tsx";
import Outilsdev from "@/components/outilsdev.tsx";
import SoftSkills from "@/components/softskills.tsx";

export default function SkillsPage() {

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center w-full gap-20">
        <div className="inline-block max-w-lg text-center justify-center pt-5">
          <h1 className={title()}>Mes skills</h1>
        </div>
        <div className="flex flex-col w-full gap-6 items-start pt-10">
          <span className={title({size: "sm"})}>
            Front
          </span>
          <FrontEnd/>

          {/* Faire des popover sur les différentes technologies avec l'endroit où j'ai appris */}
          <span className={title({size: "sm"})}>
            Back
          </span>
          <Backend />

          <span className={title({size: "sm"})}>
            Bases de données
          </span>
          <Database />

          <span className={title({size: "sm"})}>
            Outils de développement
          </span>
          <Outilsdev />
          <span className={title({size: "sm"})}>
            Compétences professionnelles
          </span>
          <SoftSkills />
        </div>
        <span>
          *Concepteur Développeur d&#39;Application
        </span>
      </section>
    </DefaultLayout>
  );
}
