import Container from "./Container";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import handImg from "../assets/hand.png"
gsap.registerPlugin(useGSAP);
export default function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 1 });
    tl.from(".hand", {
      y:300,
      opacity: 0,
      duration: 1,
      ease: "expo",
    });
    tl.to(".circlel", {
      x:-100,
      opacity: 1,
      duration: 0.5,
      ease: "expo.inOut",
    });
    tl.to(".circler", {
      x:-100,
      opacity: 1,
      duration: 0.5,
      ease: "expo.inOut",
    });
    tl.to(
      ".animate2",
      {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      },
      "a"
    );
    tl.to(
      ".animate3",
      {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      },
      "a"
    );
    tl.to(".animate4", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });
    tl.to(".animateHighlights", {
      duration: 1,
      ease: "power3.in",
      "textDecorationLine": "underline",
      "textDecorationColor": "rgb(99 102 241)",
      "textDecorationSkipInk": "auto",

    });
    tl.to(".animate1", {
      opacity: 1,
      duration: 1,
      boxShadow: "0 0 5px 5px rgb(99 102 241)",
      ease: "power3",
    });
  });
  return (
    <Container
      pclassName="relative min-h-screen overflow-hidden"
      className="flex flex-col justify-center items-center  text-center space-y-4"
    >
      <Badge
        variant={"secondary"}
        className="flex justify-center items-center px-4 py-2 backdrop-blur-3xl bg-secondary/50 animate1 opacity-0 z-10"
      >
        Build on Block-Chain Technology ✨
      </Badge>
      <span className="text-2xl lg:text-4xl font-extrabold leading-tight lg:w-[80%] animate2 opacity-0 z-10">
        Store your files <span className="animateHighlights">permanently</span>{" "}
        and <span className="animateHighlights">uncensored</span> on the
        decentralized network with IPFS
      </span>
      <span className="text-sm lg:w-[80%] text-foreground/60 animate3 opacity-0 z-10">
        You are looking for a tool to store your files on IPFS? You are in the
        right place, Decentralized Storage is a Web3 file manager on IPFS and
        Sia network that allows you to privately upload files and share files
        easily via CID or HTTP.
      </span>
      <div className="w-[80%] lg:w-[26%] flex justify-between items-center animate4 opacity-0 z-10">
        <Button>Getting Started</Button>{" "}
        <Button variant={"outline"}>Learn more</Button>
      </div>
      <div className="hidden lg:block absolute -bottom-[20%] -left-[20%] bg-gradient-to-r from-indigo-400/80 to-transparent p-[30vh] lg:p-[55vh] rounded-full z-0 opacity-0 circlel"/>
      <div className="hidden lg:block absolute -bottom-[20%] -right-[30%] bg-gradient-to-r from-transparent to-indigo-400/80 p-[30vh] lg:p-[55vh] rounded-full z-0 opacity-0 circler"/>
      <img src={handImg} alt="glowblock" className="absolute w-full lg:w-[50%] bottom-0 lg:-bottom-[20vh] block z-0 hand opacity-50"/>
    </Container>
  );
}
