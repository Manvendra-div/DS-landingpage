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
        start: "top 60%",
        end: "bottom 90%",
        scrub: 2,
      },
    });
    tl.to(".featureContainer", {
      background: "linear-gradient(to right, #2d2a4a, #1b1f3a)",
      duration: 1,
      ease: "power4.inOut",
    });
    tl.fromTo(
      ".flowHeading",
      {
        opacity: 0,
        top: `50%`,
        duration: 1,
        ease: "power2.out",
      },
      {
        opacity: 1,
        top: `85%`,
      }
    );
    tl.from(
      ".uploadIcon",
      {
        opacity: 0,
        rotate: 270,
        duration: 1,
        ease: "expo",
      },
      "first"
    );
    tl.from(
      ".uploadHeading",
      {
        y: 300,
        opacity: 0,
        ease: "expo",
      },
      "first"
    );
    tl.from(
      ".uploadDesc",
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
    <div className="w-full flex uploadSection h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center lg:space-x-3 space-y-1 h-[80%] w-[80%] max-w-[800px] max-h-[500px]">
        <UploadCloud className="w-[80px] h-[80px] lg:h-[200px] lg:w-[200px] uploadIcon" />
        <span className="text-3xl kanit-regular font-bold uploadHeading">
          Upload
        </span>
        <span className="hidden lg:block">-</span>
        <span className="uploadDesc">
          Your data will be accessible on the IPFS network where it is
          perpetually.
        </span>
      </div>
    </div>
  );
}
