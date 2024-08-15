export default function Container({
  children,
  className,
  pclassName
}: {
  children?: React.ReactNode;
  className?: string;
  pclassName?:string
}) {
  return (
    <div className={`${pclassName} w-full flex justify-center items-center`}>
      <div className={` ${className} w-[90%] lg:w-[80%] max-w-[1440px]`}>
        {children}
      </div>
    </div>
  );
}
