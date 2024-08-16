import { useEffect, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { ReactLenis, useLenis } from "lenis/react";

import { ThemeProvider } from "./components/theme-provider";
import Features from "./components/Features";
import gsap from "gsap";
import UseSteps from "./components/UseSteps";
function App() {
  const lenisRef = useRef<any>()
  useEffect(() => {
    function update(time: any) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });
  return (
    <ReactLenis ref={lenisRef} root>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="w-full max-h-fit min-h-screen flex flex-col justify-between items-center">
          <NavBar />
          <Hero />
          <Features />
          <UseSteps />
        </div>
      </ThemeProvider>
    </ReactLenis>
  );
}

export default App;
