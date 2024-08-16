import Container from "./Container";
import UploadSection from "./UploadSection";
import EncryptSection from "./EncryptSecton";
import SplitSection from "./SplitSection";
import DistributeSection from "./DistributeSection";
export default function UseSteps() {
  return (
    <Container
      pclassName="relative min-h-screen overflow-hidden"
      className="flex justify-center items-center"
    >
      <span className="fixed bottom-10 text-2xl lg:text-6xl font-extrabold flowHeading kanit-regular z-10">
        Features
      </span>
      <div className="flex flex-col scrollArea w-full">
        <UploadSection />
        <EncryptSection />
        <SplitSection />
        <DistributeSection />
      </div>
    </Container>
  );
}
