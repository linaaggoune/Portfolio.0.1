import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import FrontEnd from "@/components/frontend.tsx";
import Backend from "@/components/backend.tsx";
import Database from "@/components/bdd.tsx";
import Outilsdev from "@/components/outilsdev.tsx";

export default function SkillsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center w-full gap-20">
        <div className="inline-block max-w-lg text-center justify-center pt-5">
          <h1 className={title()}>Mes skills</h1>
        </div>
        <div className="flex flex-col w-full gap-5 items-center">
          <FrontEnd />
          <Backend />
          <Database />
          <Outilsdev />
        </div>
        <span>*Concepteur Développeur d&#39;Application</span>
      </section>
    </DefaultLayout>
  );
}
