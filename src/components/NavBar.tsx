import { useState, useEffect } from "react";
import Container from "./Container";
import { Database } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ModeToggle } from "./mode-toggle";

gsap.registerPlugin(useGSAP);

export default function NavBar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useGSAP(() => {
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && showNav) {
        gsap.to(navbar, {
          y: -100, // Move navbar out of view
          opacity: 0,
          duration: 0.3,
          ease: "easeInOut",
          onComplete: () => setShowNav(false), // Update state after animation
        });
      } else if (window.scrollY < lastScrollY && !showNav) {
        gsap.to(navbar, {
          y: 0, // Bring navbar back into view
          opacity: 1,
          duration: 0.3,
          ease: "easeInOut",
          onComplete: () => setShowNav(true), // Update state after animation
        });
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, showNav]);

  return (
    <Container
      pclassName="fixed top-0 h-fit navbar z-20 transition-all duration-300 ease-in-out"
      className={`lg:w-[80%] max-w-[1540px] flex justify-between items-center border-foreground/30 py-5 px-6 backdrop-blur-lg bg-background/70 rounded-full border-[1px] mt-2 ${
        showNav ? "transform translate-y-0" : "transform -translate-y-full"
      } `}
    >
      <div className="flex items-center justify-between w-[20%] lg:w-[6%] max-w-[90px]">
        <Database size={32} />
        <span className="text-xl lg:text-2xl font-bold">DS</span>
      </div>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Item One
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="md:w-[400px] lg:w-[500px] p-6"></div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Item Two
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="md:w-[400px] lg:w-[500px] p-6"></div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Item Three
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="md:w-[400px] lg:w-[500px] p-6"></div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center space-x-3">
        <ModeToggle />
        <Button className="hidden lg:block rounded-lg">Get Started</Button>
      </div>
    </Container>
  );
}
