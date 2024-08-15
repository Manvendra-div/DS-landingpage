import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { useTheme } from "./theme-provider";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function DistributedStorage() {
  const { theme } = useTheme();
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const link = linkRef.current;

    if (link) {
      const underline = document.createElement("div");
      underline.className = "underline";
      link.appendChild(underline);
      const handleMouseEnter = () => {
        gsap.to(underline, {
          width: "100%",
          duration: 0.2,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(underline, { width: "0%", duration: 0.1, ease: "power2.out" });
      };

      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
        link.removeChild(underline);
      };
    }
  }, []);
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: ".scrollBox1",
        start: "top 50%",
        end: "top -7%",
        scrub: true,
      },
    });
    tl.from(".featHeading", {
      opacity: 0,
      top: `-50%`,
      duration: 1,
      ease: "power2.out",
      scrollTrigger:{
        trigger: ".scrollBox1",
        start: "top 10%",
        end: "top 0%",
        scrub: true
      }
    });
    tl.from(
      ".heading1",
      {
        scale: 0,
        opacity: 0,
        ease: "power2.out",
      },
      "loadwithsvg"
    );
    tl.from(
      ".rotateSvg1",
      {
        rotate: 270,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "loadwithsvg"
    );
    tl.from(".desc1", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "power2.out",
    });
    tl.from(".learnMorelink1", {
      opacity: 0,
      duration: 0.5,
      ease: "circ.out",
    });
  });
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center h-[70vh] lg:h-[30vh] w-full space-y-10 lg:space-y-0">
      <svg
        className="flex justify-center items-center w-[60%] lg:w-[20%] h-[50%] lg:h-full rotateSvg1"
        viewBox="0 0 38 38"
        fill={theme === "dark" || theme === "system" ? "white" : "black"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.625 5.9375C35.625 9.21797 32.968 11.875 29.6875 11.875C26.407 11.875 23.75 9.21797 23.75 5.9375C23.75 2.65852 26.407 0 29.6875 0C32.968 0 35.625 2.65852 35.625 5.9375ZM30.875 32.0625C30.875 35.343 28.218 38 24.9375 38C21.657 38 19 35.343 19 32.0625C19 28.782 21.657 26.125 24.9375 26.125C28.218 26.125 30.875 28.782 30.875 32.0625ZM0 15.4375C0 12.157 2.65852 9.5 5.9375 9.5C9.21797 9.5 11.875 12.157 11.875 15.4375C11.875 18.718 9.21797 21.375 5.9375 21.375C2.65852 21.375 0 18.718 0 15.4375Z"
          fill={theme === "dark" || theme === "system" ? "white" : "black"}
        />
        <path
          opacity="0.4"
          d="M31.0531 11.7191L28.2477 27.1344C27.3051 26.4961 26.1621 26.125 24.9375 26.125C24.4699 26.125 24.0098 26.1769 23.5719 26.2808L26.3774 10.8656C27.3199 11.5039 28.4629 11.875 29.6875 11.875C30.1551 11.875 30.6153 11.823 31.0531 11.7191ZM11.6004 17.2336L22.4067 26.689C20.9223 27.3867 19.7793 28.6855 19.2746 30.2664L8.46838 20.8109C9.95276 20.0465 11.0957 18.8144 11.6004 17.2336ZM11.875 15.4375C11.875 13.7824 11.1996 12.2906 10.1086 11.2144L23.75 5.75342C23.75 5.81502 23.75 5.87588 23.75 5.93748C23.75 7.59256 24.4254 9.08436 25.5164 10.1605L11.8082 15.623C11.8082 15.5637 11.875 15.4969 11.875 15.4375Z"
          fill={theme === "dark" || theme === "system" ? "white" : "black"}
        />
      </svg>
      <div className="w-full lg:w-[65%] flex flex-col justify-between h-[50%] lg:h-full items-center lg:items-start lg:text-start text-lg font-bold space-y-5">
        <span className="text-xl lg:text-3xl font-extrabold heading1">
          Distributed Storage
        </span>{" "}
        <span className="desc1 text-muted-foreground ">
          Data is encrypted and stored across multiple locations, or nodes, that
          are run by individuals or organizations that share their extra disk
          space.
        </span>
        <a
          href="#"
          ref={linkRef}
          className="relative w-fit text-foreground no-underline learnMorelink1"
        >
          <span className="flex justify-between items-center w-fit space-x-2 mb-2 transition duration-300">
            <span>Learn more</span> <ArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
}
