import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { Button } from "@nextui-org/button";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoCss3, BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import { SiSass, SiTailwindcss } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";

export default function FrontEnd() {
  return (
    <>
      <div className="flex gap-2 pt-6 pb-12 w-full justify-center">
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button className={"bg-orange-500"}>
              HTML5
              <FaHtml5 />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">En autodidacte</div>
              <div className="text-tiny">Cours en ligne</div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover placement="bottom">
          <PopoverTrigger>
            <Button color={"primary"}>
              CSS3
              <BiLogoCss3 />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">En autodidacte</div>
              <div className="text-tiny">Cours en ligne</div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover placement="bottom">
          <PopoverTrigger>
            <Button className={"bg-yellow-500"}>
              JavaScript
              <BiLogoJavascript />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">En autodidacte</div>
              <div className="text-tiny">Cours en ligne</div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover placement="bottom">
          <PopoverTrigger>
            <Button color={"secondary"}>
              React
              <IoLogoReact />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">Formation CDA*</div>
              <div className="text-tiny">École O&#39;Clock</div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover placement="bottom">
          <PopoverTrigger>
            <Button color={"primary"}>
              TypeScript
              <BiLogoTypescript />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">Formation CDA*</div>
              <div className="text-tiny">École O&#39;Clock</div>
              <div className="text-tiny">En entreprise</div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover placement="bottom">
          <PopoverTrigger>
            <Button className="bg-pink-500 text-white">
              Sass
              <SiSass />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">Formation CDA*</div>
              <div className="text-tiny">École O&#39;Clock</div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover placement="bottom">
          <PopoverTrigger>
            <Button color={"secondary"}>
              Bootstrap
              <DiBootstrap />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">Formation CDA*</div>
              <div className="text-tiny">En entreprise</div>
            </div>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button color={"primary"}>
              Tailwind
              <SiTailwindcss />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">Formation CDA*</div>
              <div className="text-tiny">École O&#39;Clock</div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
