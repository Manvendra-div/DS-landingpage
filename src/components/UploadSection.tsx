import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UploadCloud } from "lucide-react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function UploadSection() {
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".uploadSection",
        start: "top 40%",
        end: "bottom 90%",
        scrub: 2,
      },
    });
    tl.from(".uploadIcon", {
      rotate: 270,
      duration: 1,
      ease: "expo",
    },"first");
    tl.from(".uploadHeading", {
      y: 300,
      opacity: 0,
      ease: "expo",
    },"first");
    tl.from(".uploadDesc", {
      x: 300,
      opacity: 0,
      duration: 1,
      ease: "expo",
    },"first")
  });
  return (
    <div className="w-full ml-10 flex flex-col lg:flex-row lg:items-center lg:space-x-3 space-y-1 lg:space-y-0 uploadSection h-screen">
      <UploadCloud className="w-[80px] h-[80px] text-indigo-400 uploadIcon" />
      <span className="text-3xl kanit-regular font-bold uploadHeading">
        Upload
      </span>
      <span className="hidden lg:block">-</span>
      <span className="uploadDesc">
        Your data will be accessible on the IPFS network where it is
        perpetually.
      </span>
    </div>
  );
}
