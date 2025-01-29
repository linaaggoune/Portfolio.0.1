import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { Button } from "@nextui-org/button";
import {SiPycharm, SiWebstorm} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Ide() {
  return (
    <>
      <div className="flex gap-2 pb-5 w-full justify-center">
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button color="primary">
              Visual Studio Code
              <VscVscode />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">
                Autodidacte et Formation CDA*
              </div>
              <div className="text-tiny">École O&#39;Clock</div>
            </div>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button className={"bg-yellow-400 "}>
              PyCharm
              <SiPycharm />
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
            <Button className={"bg-green-200 "}>
              WebStorm
              <SiWebstorm />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">Formation CDA*</div>
              <div className="text-tiny">En entreprise</div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
