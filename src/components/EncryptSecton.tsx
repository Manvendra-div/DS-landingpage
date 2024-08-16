import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileLock } from "lucide-react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function EncryptSection() {
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".encryptSection",
        start: "top 60%",
        end: "bottom 90%",
        scrub: 2,
      },
    });
    tl.from(".encryptIcon", {
      opacity: 0,
      rotate: 270,
      duration: 1,
      ease: "expo",
    },"first");
    tl.from(".encryptHeading", {
      y: 300,
      opacity: 0,
      ease: "expo",
    },"first");
    tl.from(".encryptDesc", {
      x: 300,
      opacity: 0,
      duration: 1,
      ease: "expo",
    },"first")
  });
  return (
    <div className="w-full ml-10 flex flex-col lg:flex-row justify-center lg:justify-normal lg:items-center lg:space-x-3 space-y-1 lg:space-y-0 encryptSection h-screen">
      <FileLock className="w-[80px] h-[80px] text-indigo-400 encryptIcon"/>
      <span className="text-3xl kanit-regular font-bold encryptHeading">Encrypt</span>
      <span className="hidden lg:block">-</span>
      <span className="encryptDesc">
        Your data will be accessible on the IPFS network where it is
        perpetually.
      </span>
    </div>
  );
}
