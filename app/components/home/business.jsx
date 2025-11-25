import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

export default function DevelopmentBusiness() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        {/* Full-width image (responsive) */}
        <div className="w-full overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/tomat.jpg"
            alt="Tomato farm"
            className="w-full h-[400px] object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Text content */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium leading-tight">
            Business Development of{" "}
            <span className="text-green-700 font-semibold">Detomato</span>
          </h2>

          <div className="space-y-6">
            <p>
              <strong>Detomato</strong> is not just a tomato leaf disease
              detector — it’s a potential agritech solution designed to empower
              farmers and agricultural institutions. Our goal is to bridge the
              gap between technology and real farming practices through
              intelligent automation.
            </p>

            <p>
              With scalable AI models and future expansion plans, Detomato aims
              to build partnerships, enable smart farming solutions, and
              contribute to sustainable agriculture — enhancing productivity and
              reducing crop losses.
            </p>

            {/* <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link to="/business">
                <span>Explore More</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
