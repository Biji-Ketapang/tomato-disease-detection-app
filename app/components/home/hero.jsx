import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

export default function Hero() {
  return (
    <section>
      <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
            <h1 className="mt-8 max-w-2xl text-balance text-3xl font-medium md:text-4xl lg:mt-16 xl:text-5xl">
              Instant Classification of tomato leaf diseases
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg">
              AI-powered and highly accurate classification for diagnosing
              tomato leaf diseases.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="px-5 text-base">
                <NavLink to="/predict">
                  <span className="text-nowrap">Start Clasify</span>
                </NavLink>
              </Button>
            </div>
          </div>
          {/* <img
            className="-z-10 order-first ml-auto h-72 w-full object-cover sm:h-96 md:h-8/10 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten mt-12 lg:mt-56 dark:brightness-75"
            src="/daun-tomat.png"
            alt="Tomato Leaf Image"
            height="4000"
            width="3000"
          /> */}
          <img
            src="/daun-tomat.png"
            alt="Tomato Leaf Image"
            className="
    lg:absolute
    lg:top-0
    lg:right-0
    lg:w-1/3
    w-full
    object-contain
  "
          />
        </div>
      </div>
    </section>
  );
}
