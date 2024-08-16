import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Table } from "lucide-react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function SplitSection() {
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".splitSection",
        start: "top 60%",
        end: "bottom 90%",
        scrub: 2,
      },
    });
    tl.from(".splitIcon", {
      opacity: 0,
      rotate: 270,
      duration: 1,
      ease: "expo",
    },"first");
    tl.from(".splitHeading", {
      y: 300,
      opacity: 0,
      ease: "expo",
    },"first");
    tl.from(".splitDesc", {
      x: 300,
      opacity: 0,
      duration: 1,
      ease: "expo",
    },"first")
  })
  return (
    <div className="w-full flex flex-col justify-center lg:items-center lg:space-x-3 space-y-1 splitSection h-screen">
      <Table className="w-[80px] h-[80px] lg:h-[200px] lg:w-[200px] text-indigo-400 splitIcon"/>
      <span className="text-3xl kanit-regular font-bold splitHeading">Split</span>
      <span className="hidden lg:block">-</span>
      <span className="splitDesc">
        Your data will be accessible on the IPFS network where it is
        perpetually.
      </span>
    </div>
  );
}
