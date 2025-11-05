"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TestimonialItemData, TestimonialDataType } from "./data/Data";
import Heading from "../../shared/components/Heading";
export default function Testimonials() {
  const parentAnimate = { visible: { transition: { staggerChildren: 0.2 } } };
  const childAnimate = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  return (
    <section className="w-full h-full bg-white text-[#213D34] py-26 scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8 ">
        <Heading
          title="Testimonials"
          description="Real stories from satisfied users: see how our platform changes
            lives"
        />
        <motion.div
          variants={parentAnimate}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5"
        >
          {TestimonialItemData.map((item: TestimonialDataType) => (
            <motion.article
              variants={childAnimate}
              whileHover={{ scaleY: 1.1, rotate: 3 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              style={{
                backgroundColor: item.background ?? "#f1f2ed",
                color: item.textColor ?? "#213D34",
              }}
              className="xl:p-8 p-4 bg-[#f1f2ed] rounded-3xl w-full h-full flex flex-col justify-around gap-1 hover:shadow-xl"
            >
              <p className="xl:text-lg text-sm">{item.description} </p>

              <span
                style={{
                  color:
                    item.textColor == "#f1f2ed" ? "#d9ef78" : item.textColor,
                }}
                className="text-4xl text-end"
              ></span>

              <figure className=" flex justify-between items-center w-full gap-x-2 md:gap-x-5">
                <Image
                  alt={item.namePerson}
                  src={item.personImage}
                  width={60}
                  height={60}
                  className=" object-cover"
                />
                <figcaption className=" w-full text-sm md:text-lg">
                  {item.namePerson}
                </figcaption>
              </figure>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

//
