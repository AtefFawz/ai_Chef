interface types {
  title: string;
  description: string;
}
export default function Heading({ title, description }: types) {
  return (
    <div className="flex md:max-w-[80%] lg:max-w-[70%] w-full pb-16 items-baseline items-center">
      <h1 className="text-lg md:text-2xl xl:text-3xl md:text-nowrap">
        {title}{" "}
      </h1>
      <span className="text-2xl mx-1">|</span>
      <p className="text-[12px] xl:text-lg "> {description}</p>
    </div>
  );
}
