// import { Button } from "@/components/ui/button";
// import { NavLink } from "react-router";

// export default function Hero() {
//   return (
//     <section>
//       <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
//         <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
//           <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
//             <h1 className="mt-8 max-w-2xl text-balance text-3xl font-medium md:text-4xl lg:mt-16 xl:text-5xl">
//               Instant Classification of tomato leaf diseases
//             </h1>
//             <p className="mt-8 max-w-2xl text-pretty text-lg">
//               AI-powered and highly accurate classification for diagnosing
//               tomato leaf diseases.
//             </p>

//             <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
//               <Button asChild size="lg" className="px-5 text-base">
//                 <NavLink to="/predict">
//                   <span className="text-nowrap">Start Clasify</span>
//                 </NavLink>
//               </Button>
//             </div>
//           </div>
//           <img
//             src="/daun-tomat.png"
//             alt="Tomato Leaf Image"
//             className="
//     lg:absolute
//     lg:top-0
//     lg:right-0
//     lg:w-1/3
//     w-full
//     object-contain
//   "
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-page background */}
      <div
        className="
          absolute inset-0 
          bg-[url('/daun-tomat.png')] 
          bg-no-repeat 
          bg-right 
          bg-cover
          opacity-65
          pointer-events-none
        "
      />

      {/* Overlay ringan */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-r 
          from-white/5 
          via-white/5 
          to-white/5
        "
      />

      {/* Content berada di tengah */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <h1 className=" text-balance text-3xl font-medium md:text-4xl xl:text-5xl">
            Instant Classification of Tomato Leaf Diseases
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-pretty text-lg">
            AI-powered and highly accurate classification for diagnosing tomato
            leaf diseases.
          </p>

          <div className="mt-12 flex justify-center">
            <Button asChild size="lg" className="px-5 text-base">
              <NavLink to="/clasify">
                <span className="text-nowrap">Start Clasify</span>
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
