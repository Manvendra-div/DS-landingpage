import { Globe2, Lock, Table, Upload } from "lucide-react";
import Container from "./Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function UseSteps() {
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".scrollArea",
        start: "top 40%",
        end: "top -10%",
        scrub: 2,
      },
    });
    tl.to(
      ".line",
      {
        height: "1700px",
        duration: 1,
        ease: "power1.out",
      },
      "elongate"
    );
    tl.to(
      ".scrollArea",
      {
        height: "1700px",
        duration: 1,
        ease: "power1.out",
      },
      "elongate"
    );
    tl.from(
      ".uploadSection",
      {
        opacity: 0,
        ease: "power1.out",
      },
      "upload"
    )
      .from(
        ".uploadHeading",
        {
          opacity: 0,
          y: -100,
          ease: "power1.out",
          duration: 0.5,
        },
        "upload"
      )
      .from(
        ".uploadDescription",
        {
          opacity: 0,
          y: 100,
          ease: "power1.out",
          duration: 0.5,
        },
        "upload"
      );

    // Lock Section Animations
    tl.from(
      ".lockSection",
      {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
      },
      "lock"
    )
      .from(
        ".lockHeading",
        {
          opacity: 0,
          y: -100,
          ease: "power1.out",
          duration: 0.5,
        },
        "lock"
      )
      .from(
        ".lockDescription",
        {
          opacity: 0,
          y: 100,
          ease: "power1.out",
          duration: 0.5,
        },
        "lock"
      );

    // Split Section Animations
    tl.from(
      ".splitSection",
      {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
      },
      "split"
    )
      .from(
        ".splitHeading",
        {
          opacity: 0,
          y: -100,
          ease: "power1.out",
          duration: 0.5,
        },
        "split"
      )
      .from(
        ".splitDescription",
        {
          opacity: 0,
          y: 100,
          ease: "power1.out",
          duration: 0.5,
        },
        "split"
      );

    // Distribute Section Animations
    tl.from(
      ".distributeSection",
      {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
      },
      "distribute"
    )
      .from(
        ".distributeHeading",
        {
          opacity: 0,
          y: -100,
          ease: "power1.out",
          duration: 0.5,
        },
        "distribute"
      )
      .from(
        ".distributeDescription",
        {
          opacity: 0,
          y: 100,
          ease: "power1.out",
          duration: 0.5,
        },
        "distribute"
      );
  });
  return (
    <Container
      pclassName="min-h-screen overflow-hidden"
      className="h-full flex flex-col justify-center space-y-5"
    >
      <p className="text-xl lg:text-4xl text-foreground font-extrabold kanit-regular headinSteps">
        Storing file on Decentralized Storage
      </p>
      <div className="flex justify-between w-full lg:w-[75%] scrollArea pb-10">
        <div className="h-[10vh] bg-foreground w-[8px] rounded-full line" />
        <div className="flex flex-col justify-between h-full py-20">
          <div className="flex items-center h-fit space-x-3 uploadSection">
            <div className="ml-3 lg:ml-0 rounded-full bg-gradient-to-r from-[#818cf8] to-transparent w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] flex justify-center items-center">
              <Upload className="w-[50%] h-[50%]" />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-base lg:text-lg text-foreground font-bold kanit-regular uploadHeading">
                Upload
              </span>
              <span className="text-xs lg:text-sm text-foreground/70 uploadDescription">
                Your data will be accessible on the Decentralized Storage
                network where it is perpetually.
              </span>
            </div>
          </div>
          <div className="flex items-center h-fit space-x-3 lockSection">
            <div className="ml-3 lg:ml-0 rounded-full bg-gradient-to-r from-[#818cf8] to-transparent w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] flex justify-center items-center">
              <Lock className="w-[50%] h-[50%]" />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-base lg:text-lg text-foreground font-bold kanit-regular lockHeading">
                Encrypt
              </span>
              <span className="text-xs lg:text-sm text-foreground/70 lockDescription">
                Your data will be encrypted and stored in a secure way.
              </span>
            </div>
          </div>
          <div className="flex items-center h-fit space-x-3 splitSection">
            <div className="ml-3 lg:ml-0 rounded-full bg-gradient-to-r from-[#818cf8] to-transparent w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] flex justify-center items-center">
              <Table className="w-[50%] h-[50%]" />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-base lg:text-lg text-foreground font-bold kanit-regular splitHeading">
                Split
              </span>
              <span className="text-xs lg:text-sm text-foreground/70 splitDescription">
                Your data will be split into multiple files.
              </span>
            </div>
          </div>
          <div className="flex items-center h-fit space-x-3 distributeSection">
            <div className="ml-3 lg:ml-0 rounded-full bg-gradient-to-r from-[#818cf8] to-transparent w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] flex justify-center items-center">
              <Globe2 className="w-[50%] h-[50%]" />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-base lg:text-lg text-foreground font-bold kanit-regular distributeHeading">
                Distribute
              </span>
              <span className="text-xs lg:text-sm text-foreground/70 distributeDescription">
                then data will be distributed to multiple locations.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
