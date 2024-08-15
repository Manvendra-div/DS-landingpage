import Container from "./Container";

export default function UseSteps() {
  return (
    <Container
      pclassName="min-h-screen h-[100vh] overflow-hidden"
      className="relative bg-muted/80 rounded-3xl h-[60%] max-h-[900px] flex justify-between items-center"
    >
        <div className="rounded-full bg-foreground h-32 w-32 lg:h-48 lg:w-48 border-[5px] border-muted"></div>
        <div></div>
        <div></div>
        <div></div>
      <span className="absolute  lg:left-5 -top-10 lg:-top-14 text-xl lg:text-4xl text-foreground font-extrabold">Store file on Decentralized Storage</span>
    </Container>
  );
}
