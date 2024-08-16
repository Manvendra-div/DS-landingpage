import Container from "./Container";
import UploadSection from "./UploadSection";
import EncryptSection from "./EncryptSecton";
import SplitSection from "./SplitSection";
import DistributeSection from "./DistributeSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function UseSteps() {
  return (
    <Container
      pclassName="relative min-h-screen overflow-hidden"
      className="flex justify-center items-center"
    >
      <div className="flex flex-col scrollArea">
        <UploadSection />
        <EncryptSection />
        <SplitSection />
        <DistributeSection />
      </div>
    </Container>
  );
}
