import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {Image} from "@nextui-org/image";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About</h1>
        </div>
        <div className="flex items-center justify-center text-justify gap-20 py-8 md:py-10">
          <div className="mt-8 w-1/3">
            <h2 className={title()}>About Me</h2>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Et imperdiet
              habitasse ad nascetur fames pretium placerat mattis. Et aliquam hac
              vehicula quam tempor felis donec. Feugiat class lectus tristique
              libero fermentum habitasse. Ridiculus dis molestie taciti metus mi
              non elementum. Sollicitudin nullam praesent id volutpat class
              habitasse elementum. Aenean vel donec dolor ornare ligula primis
              turpis. Convallis penatibus facilisis lobortis, gravida sociosqu
              magnis venenatis. Curabitur commodo suspendisse enim; egestas
              pulvinar iaculis. Ullamcorper pellentesque rutrum libero facilisis
              curabitur malesuada cubilia duis. Fusce cubilia dui parturient
              maximus suscipit dui blandit litora maximus. Mus nostra sociosqu
              tristique integer imperdiet pulvinar. Lobortis dapibus taciti cursus
              vivamus vitae eleifend sollicitudin ad. Proin convallis ex fermentum
              montes, eget malesuada leo.
            </p>
          </div>
          <Image
            isBlurred
            alt="NextUI Album Cover"
            className="m-5"
            src="https://nextui.org/images/album-cover.png"
            width={320}
          />
        </div>

      </section>
    </DefaultLayout>
  );
}
