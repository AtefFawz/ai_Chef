import Image from "next/image";
import DemoImage from "../../../../../../public/images/demo/demo.png";
export default function Demo() {
  const array = [
    "Every meal is",
    "a chance to",
    " nourish your",
    "body, inspire ",
    " your mind,",
    " and feed",
    "  your soul.",
  ];
  return (
    <section
      id="demo "
      className={` w-full h-full py-16 px-3 text-[#213D34] bg-[#ffffff] rounded-2xl `}
    >
      <div className="container mx-auto">
        <div className="md:mb-16 mb-10 px-5">
          <h1 className="text-4xl inline mx-2">Demo /</h1>
          <p className="inline text-lg">
            See how it works: your personalized meal planning journey
          </p>
        </div>
        <div className="border-1 rounded-4xl md:rounded-full ">
          <div className="flex md:flex-row flex-col items-center justify-between w-full md:m-4 lg:p-5 gap-5 p-2 md-p-0 h-full">
            {/*  */}
            <div className="border-1 rounded-4xl md:rounded-full w-full my-5 md:m-0 h-full">
              <Image
                src={DemoImage}
                alt="Demo Image"
                className="object-cover h-full w-full p-3 lg:p-5"
              />
            </div>
            <div className="w-full px-5 text-center md:text-start">
              {array.map((e, index) => (
                <p
                  key={index}
                  className="w-full font-medium md:text-xl lg:text-3xl xl:text-5xl tracking-wider md:block inline md:px-10 "
                >
                  {e}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
