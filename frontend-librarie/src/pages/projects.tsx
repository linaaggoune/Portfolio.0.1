import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {Image} from "@nextui-org/image";
import {IoLogoReact} from "react-icons/io5";
import {FaHtml5} from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri";

export default function ProjectsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-5 py-8 md:py-10">
        <div className="flex items-center justify-center">
          <h1 className={title()}>Mes Projets</h1>
        </div>
        <div className="pt-10">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Portfolio</h4>
              <div className="flex flex-col items-center justify-center gap-2">
                <p>Technologies :</p>
                <div className="flex items-center justify-center gap-2">
                  <IoLogoReact className="text-default-500 text-3xl text-violet-600"/>
                  <FaHtml5 className="text-default-500 text-3xl text-orange-600"/>
                  <RiTailwindCssFill className="text-default-500 text-3xl text-blue-600"/>
                </div>

              </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/portfolio.png"
                width={270}
              />
            </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
