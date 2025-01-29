import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Button } from "@heroui/button";
import { BiLogoNodejs } from "react-icons/bi";
import { SiDjango } from "react-icons/si";
import { DiPython} from "react-icons/di";

export default function Backend() {
  return (
    <>
      <div className="flex gap-2 pb-5 w-full justify-center">
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button className={"bg-blue-500 text-white"}>
              Python
              <DiPython />
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
            <Button color={"success"}>
              Django
              <SiDjango />
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
            <Button className={"bg-green-700 text-white"}>
              NodeJS
              <BiLogoNodejs />
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
