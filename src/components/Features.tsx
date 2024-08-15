import Container from "./Container";
import DistributedStorage from "./DistributedStorage";
import CompletelyPrivate from "./CompletelyPrivate";
import DataPersistence from "./DataPersistence";

const Features: React.FC = () => {
  return (
    <Container
      pclassName="relative h-fit min-h-screen overflow-hidden container"
      className="flex flex-col justify-center items-center min-h-full text-center"
    >
      <div className="flex justify-center items-center h-[100vh] scrollBox1">
        <DistributedStorage />
      </div>
      <div className="flex justify-center items-center h-[100vh] scrollBox2">
        <CompletelyPrivate />
      </div>
      <div className="flex justify-center items-center h-[100vh] scrollBox3">
        <DataPersistence />
      </div>
      <span className="fixed top-10 left-10 text-2xl lg:text-6xl font-extrabold featHeading kanit-regular">
        Why DS?
      </span>
    </Container>
  );
};

export default Features;
