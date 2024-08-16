import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe2 } from "lucide-react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function DistributeSection() {
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".distributeSection",
        start: "top 40%",
        end: "bottom 90%",
        scrub: 2,
      },
    });
    tl.from(
      ".distributeIcon",
      {
        rotate: 270,
        duration: 1,
        ease: "expo",
      },
      "first"
    );
    tl.from(
      ".distributeHeading",
      {
        y: 300,
        opacity: 0,
        ease: "expo",
      },
      "first"
    );
    tl.from(
      ".distributeDesc",
      {
        x: 300,
        opacity: 0,
        duration: 1,
        ease: "expo",
      },
      "first"
    );
  });
  return (
    <div className="w-full ml-10 flex flex-col lg:flex-row lg:items-center lg:space-x-3 space-y-1 lg:space-y-0 distributeSection h-screen">
      <Globe2 className="w-[80px] h-[80px] text-indigo-400 distributeIcon" />
      <span className="text-3xl kanit-regular font-bold distributeHeading">
        Distribute
      </span>
      <span className="hidden lg:block">-</span>
      <span className="distributeDesc">
        Your data will be accessible on the IPFS network where it is
        perpetually.
      </span>
    </div>
  );
}
