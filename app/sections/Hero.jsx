import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import HeroIllustration from "../../public/illustration-15-animated.svg";

export default function Hero() {
  return (
    <>
      <div className="mx-auto w-[95%] flex flex-col lg:flex-row-reverse justify-evenly">
        <div className="mx-auto sm:mx-0 w-full lg:w-[48%]">
          <Image src={HeroIllustration} alt="illustration" />
        </div>
        <div className="w-full lg:w-[48%]">
          <h1 class="pb-12">
            The world&apos;s{" "}
            <span class="font-bold text-primary">
              leading mentoring platform
            </span>
            . People power, unleashed.
          </h1>
          <h3 class="pb-12">
            We help individuals to{" "}
            <span class="font-bold text-primary">find a mentor</span> and{" "}
            <span class="font-bold text-primary">become a mentor</span>, whilst
            enabling organisations to{" "}
            <span class="font-bold text-primary">
              launch, run and scale thriving internal and external mentoring
              programs
            </span>
            .
          </h3>
          <div class="pb-12">
            <div class="text-lg font-semibold">
              So, who&apos;s looking for mentoring?
            </div>
            <div className="mt-4 hover:translate-x-1 transition-all w-min">
              <Link
                href="/signup"
                className={cn(buttonVariants({ variant: "default" }))}
              >
                <strong>Join Now</strong>&nbsp;→
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary h-2 mb-16"></div>
    </>
  );
}
