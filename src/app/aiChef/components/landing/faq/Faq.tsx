"use client";
import { motion } from "framer-motion";
import FaqItem from "./FaqItem";
import { parentAnimate } from "../../shared/animation/Animation";
import { itemFaqData } from "./data/FaqData";
import Heading from "../../shared/components/Heading";
export default function Faq() {
  return (
    <section
      id="customer"
      className=" bg-white w-full h-full py-26 text-[#213D34]"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <Heading
          title="Frequently Asked Questions"
          description="Meal planning made easy: your questions, answered"
        />
        <motion.div
          variants={parentAnimate}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center"
        >
          {itemFaqData?.length > 0 ? (
            itemFaqData.map((faqData) => {
              if (!faqData) return null;
              return <FaqItem faqData={faqData} key={faqData.id} />;
            })
          ) : (
            <p className="text-red-500 text-5xl text-center">Not Data Found</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
