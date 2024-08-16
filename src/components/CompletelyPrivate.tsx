import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { useTheme } from "./theme-provider";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function CompletelyPrivate() {
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
        trigger: ".scrollBox2",
        start: "top 50%",
        end: "top -7%",
        scrub: 2,
      },
    });
    tl.from(
      ".heading2",
      {
        scale: 0,
        opacity: 0,
        ease: "power2.out",
      },
      "loadwithsvg2"
    );
    tl.from(
      ".rotateSvg2",
      {
        rotate: 270,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "loadwithsvg2"
    );
    tl.from(".desc2", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "power2.out",
    });
    tl.from(".learnMorelink2", {
      opacity: 0,
      duration: 0.5,
      ease: "circ.out",
    });
  });
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center h-[70vh] lg:h-[30vh] max-h-[200px] w-full space-y-16 lg:space-y-0 scrollBox2">
      <div className="w-full lg:w-[65%] flex flex-col justify-between h-[50%] lg:h-full items-center lg:items-start lg:text-start text-lg font-bold space-y-5">
        <span className="text-xl lg:text-3xl font-extrabold heading2">
        Completely Private
        </span>{" "}
        <span className="desc2 text-muted-foreground ">
          The DS peer-to-peer network works same way as Bitcoin base on
          blockchain making it an unhackable storage like a centralized cloud.
        </span>
        <a
          href="#"
          ref={linkRef}
          className="relative w-fit text-foreground no-underline learnMorelink2"
        >
          <span className="flex justify-between items-center w-fit space-x-2 mb-2 transition duration-300">
            <span>Learn more</span> <ArrowRight />
          </span>
        </a>
      </div>
      <svg
        className="flex justify-center items-center w-[60%] lg:w-[20%] h-[50%] lg:h-full rotateSvg2"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.7812 19.1781V24.3438C20.7812 25.3271 19.9834 26.125 19 26.125C18.0166 26.125 17.2188 25.3271 17.2188 24.3438V19.1781C15.816 18.5102 14.8438 17.0926 14.8438 15.4375C14.8438 13.1419 16.7044 11.2812 19 11.2812C21.2956 11.2812 23.1562 13.1419 23.1562 15.4375C23.1562 17.0926 22.184 18.5102 20.7812 19.1781Z"
          fill={theme === "dark" || theme === "system" ? "white" : "black"}
        />
        <path
          opacity="0.4"
          d="M34.623 6.21137L20.373 0.273125C20.0094 0.122906 19.3934 0 19.0074 0C18.6141 0 17.998 0.122906 17.6344 0.273719L3.38437 6.21196C2.05512 6.75984 1.1875 8.06016 1.1875 9.4332C1.1875 28.5891 15.2297 38 18.9332 38C22.7926 38 36.8125 28.4852 36.8125 9.4332C36.8125 8.06016 35.9441 6.75984 34.623 6.21137ZM20.7812 19.1781V24.3438C20.7812 25.3271 19.9834 26.125 19 26.125C18.0166 26.125 17.2188 25.3271 17.2188 24.3438V19.1781C15.816 18.5102 14.8438 17.0926 14.8438 15.4375C14.8438 13.1419 16.7044 11.2812 19 11.2812C21.2956 11.2812 23.1562 13.1419 23.1562 15.4375C23.1562 17.0926 22.184 18.5102 20.7812 19.1781Z"
          fill="rgb(129 140 248)"
        />
      </svg>
    </div>
  );
}
