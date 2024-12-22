import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function SkillsPage() {

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center w-full gap-4">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Mes skills</h1>
        </div>
        <div className="flex flex-col w-full gap-6 items-start pt-10">
          <span className={title({size: "sm"})}>
            FrontEnd
          </span>
          {/* Faire des popover sur les différentes technologies avec l'endroit où j'ai appris */}
          <span>React </span>
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
      </section>
    </DefaultLayout>
  );
}
