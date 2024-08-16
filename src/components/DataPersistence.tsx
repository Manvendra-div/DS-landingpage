import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "./theme-provider";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function DataPersistence() {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const {theme} = useTheme()
  useEffect(() => {
    const link = linkRef.current;

    if (link) {
      const underline = document.createElement("div");
      underline.className = "underline";
      link.appendChild(underline);

      // GSAP hover animation
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
        trigger: ".scrollBox3",
        start: "top 50%",
        end: "top -4%",
        scrub: 2
      },
    });
    tl.from(
      ".heading3",
      {
        scale: 0,
        opacity: 0,
        ease: "power2.out",
      },
      "loadwithsvg3"
    );
    tl.from(
      ".rotateSvg3",
      {
        rotate: 270,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "loadwithsvg3"
    );
    tl.from(".desc3", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "power2.out",
    });
    tl.from(".learnMorelink3", {
      opacity: 0,
      duration: 0.5,
      ease: "circ.out",
    });
    tl.to(".featHeading", {
      opacity: 0,
    })
  });
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center h-[40vh] lg:h-[30vh] max-h-[200px] w-full space-y-10 lg:space-y-0">
      <svg
       className="flex justify-center items-center w-[60%] lg:w-[20%] h-[50%] lg:h-full rotateSvg3"
        viewBox="0 0 38 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.07141 8.9375C4.07141 7.79883 4.98324 6.875 6.10713 6.875C7.23101 6.875 8.14284 7.79883 8.14284 8.9375C8.14284 10.0805 7.23101 11 6.10713 11C4.98324 11 4.07141 10.0805 4.07141 8.9375ZM29.8571 8.9375C29.8571 7.79883 30.7647 6.875 31.8928 6.875C33.021 6.875 33.9286 7.79883 33.9286 8.9375C33.9286 10.0805 33.021 11 31.8928 11C30.7647 11 29.8571 10.0805 29.8571 8.9375ZM8.14284 35.0625C8.14284 36.2055 7.23101 37.125 6.10713 37.125C4.98324 37.125 4.07141 36.2055 4.07141 35.0625C4.07141 33.9195 4.98324 33 6.10713 33C7.23101 33 8.14284 33.9195 8.14284 35.0625ZM29.8571 35.0625C29.8571 33.9195 30.7647 33 31.8928 33C33.021 33 33.9286 33.9195 33.9286 35.0625C33.9286 36.2055 33.021 37.125 31.8928 37.125C30.7647 37.125 29.8571 36.2055 29.8571 35.0625Z"
          fill={theme === "dark" || theme === "system" ? "white" : "black"}
        />
        <path
          opacity="0.4"
          d="M0 8.25C0 5.21211 2.43013 2.75 5.42857 2.75H32.5714C35.5656 2.75 38 5.21211 38 8.25V35.75C38 38.7836 35.5656 41.25 32.5714 41.25H5.42857C2.43013 41.25 0 38.7836 0 35.75V8.25ZM6.10714 6.875C4.98326 6.875 4.07143 7.79883 4.07143 8.9375C4.07143 10.0805 4.98326 11 6.10714 11C7.23103 11 8.14286 10.0805 8.14286 8.9375C8.14286 7.79883 7.23103 6.875 6.10714 6.875ZM31.8929 11C33.021 11 33.9286 10.0805 33.9286 8.9375C33.9286 7.79883 33.021 6.875 31.8929 6.875C30.7647 6.875 29.8571 7.79883 29.8571 8.9375C29.8571 10.0805 30.7647 11 31.8929 11ZM6.10714 33C4.98326 33 4.07143 33.9195 4.07143 35.0625C4.07143 36.2055 4.98326 37.125 6.10714 37.125C7.23103 37.125 8.14286 36.2055 8.14286 35.0625C8.14286 33.9195 7.23103 33 6.10714 33ZM31.8929 37.125C33.021 37.125 33.9286 36.2055 33.9286 35.0625C33.9286 33.9195 33.021 33 31.8929 33C30.7647 33 29.8571 33.9195 29.8571 35.0625C29.8571 36.2055 30.7647 37.125 31.8929 37.125Z"
          fill="rgb(129 140 248)"
        />
      </svg>

      <div className="w-full lg:w-[65%] flex flex-col justify-between h-[50%] lg:h-full items-center lg:items-start lg:text-start text-lg font-bold space-y-5">
        <span className="text-xl lg:text-3xl font-extrabold heading3">
          Data Persistence
        </span>{" "}
        <span className="desc3 text-muted-foreground ">
          Your data is stored by nodes on the network not single point of
          failure, which means it cannot disappear unless you delete that files.
        </span>
        <a
          href="#"
          ref={linkRef}
          className="relative w-fit text-foreground no-underline learnMorelink3"
        >
          <span className="flex justify-between items-center w-fit space-x-2 mb-2 transition duration-300">
            <span>Learn more</span> <ArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
}
