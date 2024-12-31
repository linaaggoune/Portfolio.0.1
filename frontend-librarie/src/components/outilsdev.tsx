import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { Button } from "@nextui-org/button";
import { FaDocker } from "react-icons/fa";
import {SiGithubactions} from "react-icons/si";

export default function Outilsdev() {
  return (
    <>
      <div className="flex gap-2 pb-5 w-full justify-center">
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button color="primary">
              Docker
              <FaDocker />
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
            <Button className={"bg-blue-200 "}>
              GitHub Action
              <SiGithubactions />
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
