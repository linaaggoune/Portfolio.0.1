import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { IoLogoReact } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiNextui, SiSass, SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";

import ModalProjectOne from "@/components/modals/modalProjectOne.tsx";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import ModalProjectTwo from "@/components/modals/modalProjectTwo.tsx";
import ModalProjectThree from "@/components/modals/modalProjectThree.tsx";
import ModalProjectFour from "@/components/modals/modalProjectFour.tsx";

export default function ProjectsPage() {
  // Déplacer les useDisclosure en dehors du ParentComponent
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const modal3 = useDisclosure();
  const modal4 = useDisclosure();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-5 py-8 md:py-10">
        <div className="flex items-center justify-center">
          <h1 className={title()}>Mes Projets</h1>
        </div>
        <div className="pt-10 flex gap-10">
          {/* Première carte */}
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <h4 className="font-bold text-large">Portfolio</h4>
              <div className="flex flex-col items items-center justify-center alig gap-2">
                <p>Technologies :</p>
                <div className="flex items-center justify-center gap-2">
                  <IoLogoReact className="text-default-500 text-3xl text-violet-600" />
                  <FaHtml5 className="text-default-500 text-3xl text-orange-600" />
                  <SiTailwindcss className="text-default-500 text-3xl text-blue-800" />
                  <BiLogoTypescript className="text-default-500 text-3xl text-blue-400" />
                  <SiNextui className="text-default-500 text-2xl text-gray-950" />
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
            <CardFooter className="flex justify-center items-center w-full pt-5">
              <Button onPress={modal4.onOpen} color={"secondary"} variant={"ghost"}>Détails</Button>
              <ModalProjectOne
                isOpen={modal1.isOpen}
                onOpenChange={modal1.onOpenChange}
              />
            </CardFooter>
          </Card>

          {/* Deuxième carte */}
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <h4 className="font-bold text-large">Météo</h4>
              <div className="flex flex-col items items-center justify-center alig gap-2">
                <p>Technologies :</p>
                <div className="flex items-center justify-center gap-2">
                  <IoLogoReact className="text-default-500 text-3xl text-violet-600" />
                  <FaHtml5 className="text-default-500 text-3xl text-orange-600" />
                  <SiTailwindcss className="text-default-500 text-3xl text-blue-800" />
                  <BiLogoTypescript className="text-default-500 text-3xl text-blue-400" />
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
            <CardFooter className="flex justify-center items-center w-full pt-5">
              <Button onPress={modal4.onOpen} color={"secondary"} variant={"ghost"}>Détails</Button>
              <ModalProjectTwo
                isOpen={modal2.isOpen}
                onOpenChange={modal2.onOpenChange}
              />
            </CardFooter>
          </Card>
          {/* 3eme card */}
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <h4 className="font-bold text-large">Poke-Team</h4>
              <div className="flex flex-col items items-center justify-center alig gap-2">
                <p>Technologies :</p>
                <div className="flex items-center justify-center gap-2">
                  <IoLogoReact className="text-default-500 text-3xl text-violet-600" />
                  <FaHtml5 className="text-default-500 text-3xl text-orange-600" />
                  <SiSass className="text-default-500 text-3xl text-pink-600" />
                  <BiLogoTypescript className="text-default-500 text-3xl text-blue-400" />
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
            <CardFooter className="flex justify-center items-center w-full pt-5">
              <Button onPress={modal4.onOpen} color={"secondary"} variant={"ghost"}>Détails</Button>
              <ModalProjectThree
                isOpen={modal3.isOpen}
                onOpenChange={modal3.onOpenChange}
              />
            </CardFooter>
          </Card>
          {/* 4eme card */}
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <h4 className="font-bold text-large">En cours</h4>
              <div className="flex flex-col items items-center justify-center alig gap-2">
                <p>Technologies :</p>
                <div className="flex items-center justify-center gap-2">
                  <IoLogoReact className="text-default-500 text-3xl text-violet-600" />
                  <FaHtml5 className="text-default-500 text-3xl text-orange-600" />
                  <SiSass className="text-default-500 text-3xl text-pink-600" />
                  <BiLogoTypescript className="text-default-500 text-3xl text-blue-400" />
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
            <CardFooter className="flex justify-center items-center w-full pt-5">
              <Button onPress={modal4.onOpen} color={"secondary"} variant={"ghost"}>Détails</Button>
              <ModalProjectFour
                isOpen={modal4.isOpen}
                onOpenChange={modal4.onOpenChange}
              />
            </CardFooter>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
