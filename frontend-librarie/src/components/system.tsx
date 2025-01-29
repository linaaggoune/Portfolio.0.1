import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Button } from "@heroui/button";
import {FaApple, FaLinux, FaWindows} from "react-icons/fa";

export default function System() {
  return (
    <>
      <div className="flex gap-2 pt-6 pb-5 w-full justify-center">
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button className={"bg-black text-white"}>
              MacOs
              <FaApple/>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">En autodidacte et formation CDA*</div>
              <div className="text-tiny">Cours en ligne et école O&#39;Clock</div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover placement="bottom">
          <PopoverTrigger>
            <Button color={"primary"}>
              Window
              <FaWindows/>
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
            <Button className={"bg-yellow-500"}>
              Linux
              <FaLinux/>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">En autodidacte et formation CDA*</div>
              <div className="text-tiny">Cours en ligne et école O&#39;Clock</div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
