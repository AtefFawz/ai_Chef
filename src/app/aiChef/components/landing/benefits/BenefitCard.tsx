"use client";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { BenefitsData } from "./BenefitsData";
import BenefitCard from "./BeneFit";
import Heading from "../../shared/components/Heading";
export default function Benefits() {
  const { data, img, img2 } = BenefitsData;
  const parent = { visible: { transition: { staggerChildren: 0.2 } } };
  const child = {
    hidden: { rotateY: 90, scaleX: 0 },
    visible: {
      rotateY: 0,
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };
  return (
    <section className=" text-[#213D34] bg-white w-full pb-26">
      {/*  */}
      <div className="container mx-auto px-3 mt-26 h-full ">
        <Heading
          title="Benefits"
          description="Get meal plans tailored to your unique dietary needs, preferences, and goals, ensuring a balanced and enjoyable diet."
        />
        <motion.article
          layout
          variants={parent}
          initial={"hidden"}
          whileInView="visible"
          className="grid grid-cols-2 md:grid-cols-4  gap-6 lg:gap-10 justify-between justify-items-between"
        >
          <motion.div variants={child}>
            <BenefitCard item={data[0]} />
          </motion.div>
          <motion.div
            variants={child}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-full overflow-hidden "
          >
            <Image src={img} alt="Grocery bag" fill className="object-cover" />
          </motion.div>

          <motion.div variants={child}>
            <BenefitCard item={data[1]} />
          </motion.div>

          <motion.div variants={child}>
            <BenefitCard item={data[2]} />
          </motion.div>

          <motion.div variants={child}>
            <BenefitCard item={data[5]} />
          </motion.div>

          <motion.div variants={child}>
            <BenefitCard item={data[3]} />
          </motion.div>

          <motion.div variants={child}>
            <BenefitCard item={data[4]} />
          </motion.div>

          <motion.div
            variants={child}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-full overflow-hidden"
          >
            <Image
              src={img2}
              alt="Green grocery bag"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
}
