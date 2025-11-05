interface types {
  title: string;
  description: string;
}
export default function Heading({ title, description }: types) {
  return (
    <div className="flex md:max-w-[80%] lg:max-w-[70%] w-full pb-16 items-baseline items-center">
      <h1 className="text-xl md:text-3xl xl:text-4xl md:text-nowrap">
        {title}{" "}
      </h1>
      <span className="text-4xl mx-1">/</span>
      <p className="text-sm xl:text-lg "> {description}</p>
    </div>
  );
}
