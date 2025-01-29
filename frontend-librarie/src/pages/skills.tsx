import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import FrontEnd from "@/components/frontend.tsx";
import Backend from "@/components/backend.tsx";
import Database from "@/components/bdd.tsx";
import Outilsdev from "@/components/outilsdev.tsx";
import System from "@/components/system.tsx";
import Ide from "@/components/ide.tsx";

export default function SkillsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center w-full gap-20">
        <div className="inline-block max-w-lg text-center justify-center p-5">
          <h1 className={title()}>Mes skills</h1>
        </div>
        <div className="flex flex-col w-50 gap-5">
          <p className="text-2xl">Front</p>
          <FrontEnd />
          <div className="border-t p-3"></div>
          <p className="text-2xl">Back</p>
          <Backend />
          <div className="border-t p-3"></div>
          <p className="text-2xl">Database</p>
          <Database />
          <div className="border-t p-3"></div>
          <p className="text-2xl">Outils de développement</p>
          <Outilsdev />
          <div className="border-t p-3"></div>
          <p className="text-2xl">Système d&#39;exploitation</p>
          <System />
          <div className="border-t p-3"></div>
          <p className="text-2xl">Environement de développement</p>
          <Ide />
        </div>
        <span>*Concepteur Développeur d&#39;Application</span>
      </section>
    </DefaultLayout>
  );
}
