"use client";
import { motion } from "framer-motion";
import { PricingItemData, PricingDataType } from "./data/Data";
import Buttons from "../shared/components/Button";
import Heading from "../shared/components/Heading";

export default function Pricing() {
  const parentAnimate = { visible: { transition: { staggerChildren: 0.3 } } };
  const childAnimate = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  let headingStyle = `text-xl lg:text-2xl font-bold`;

  return (
    <section className="w-full h-full bg-white pb-26 text-[#213D34]">
      <div className="container mx-auto px-8 w-full h-full">
        <Heading
          title="Pricing"
          description="Find your perfect plan: tailored pricing for every need"
        />
        <motion.div
          variants={parentAnimate}
          initial="hidden"
          whileInView="visible"
          className=" grid grid-cols-1 md:grid-cols-3 justify-around items-center gap-x-2 gap-y-10  xl:scale-x-85"
        >
          {PricingItemData?.length > 0 ? (
            PricingItemData.map((pricing: PricingDataType) => {
              const textColor =
                pricing.bgButton == "#213D34" ? "#F1F2ED" : "#213D34";
              const cardStyle = {
                backgroundColor: pricing.backgroundCard,
                scale: pricing.logicStyle ? "1.1" : "1",
                zIndex: pricing.logicStyle ? "10" : "1",
                boxShadow: pricing.logicStyle
                  ? "0 6px 8px rgba(0, 0, 0, 0.4)"
                  : "none",
              };
              return (
                <motion.article
                  variants={childAnimate}
                  style={cardStyle}
                  key={pricing.id}
                  className={`flex flex-col justify-evenly items-center gap-10 xl:gap-10  md:gap-y-5 p-8 md:p-3 lg:p-8 border-1 rounded-3xl w-full h-full `}
                >
                  <h1 className={`${headingStyle}`}>{pricing.plan}</h1>
                  <h2 className={`${headingStyle}`}>{pricing.price}</h2>
                  <span>{pricing.planDate}</span>
                  {renderFeatures(pricing.features)}
                  <hr className="w-full" />
                  <p className="text-sm">
                    <span className={`${headingStyle} italic`}>Best For: </span>{" "}
                    {pricing.dedicatedTO}
                  </p>
                  <Buttons
                    content={pricing.textButton}
                    bg={pricing.bgButton}
                    border="1"
                    textColor={textColor}
                  />
                </motion.article>
              );
            })
          ) : (
            <p className="text-red-600 italic">Data Not Found</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
// ================================ Extracted Function ================================
const renderFeatures = (feature: string[]) => {
  if (!feature?.length)
    return <p className="text-gray-500 italic">No features listed.</p>;
  return (
    <ul className="list-disc list-inside space-y-4 w-full">
      {feature.map((feature: string, id) => (
        <li key={id}>{feature}</li>
      ))}
    </ul>
  );
};
