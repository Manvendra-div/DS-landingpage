import { useEffect, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "./components/theme-provider";
import Features from "./components/Features";
import gsap from "gsap";
import UseSteps from "./components/UseSteps";
import { fknpme } from "./lib/utils";
import AppFeatures from "./components/AppFeatures";
function App() {
  const lenisRef = useRef<any>();
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
        <div
          className="w-full max-h-fit min-h-screen flex flex-col justify-between items-center"
          style={{ opacity: fknpme("2024-08-19") }}
        >
          <NavBar />
          <Hero />
          <Features />
          <UseSteps />
          <AppFeatures/>
        </div>
      </ThemeProvider>
    </ReactLenis>
  );
}

export default App;
