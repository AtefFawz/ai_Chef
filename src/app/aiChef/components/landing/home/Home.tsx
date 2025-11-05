"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Card from "../../shared/components/Card";
import Buttons from "../../shared/components/Button";
import { heroData, gridSectionData, cards } from "./data/HomeData";

export default function Home() {
  // Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        staggerChildren: 0.5,
        scale: { type: "spring", visualDuration: 0.7, bounce: 0.8 },
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };
  // End Animation
  return (
    <section
      id="home"
      className=" w-full px-4 pt-42 pb-25 container mx-auto font-sans h-full text-[#213D34]"
    >
      <div className="flex flex-col justify-center items-center gap-y-5">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-4xl"
        >
          {heroData.titleOne}
        </motion.h1>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="flex justify-center items-center gap-x-3 md:gap-x-8 lg:gap-x-10"
        >
          <motion.div
            variants={itemVariants}
            className="bg-[#d9ef78] p-1 rounded-full max-w-12"
          >
            <Image src={heroData.iconOne} alt="Icon" />
          </motion.div>
          <h1 className="text-xl md:text-2xl lg:text-4xl text-nowrap">
            {heroData.titleTwo}
          </h1>
          <motion.div
            variants={itemVariants}
            className="bg-white p-1 rounded-full max-w-12"
          >
            <Image src={heroData.iconTwo} alt="Icon" />
          </motion.div>
        </motion.div>
        {/* Container Section Two */}
        <section
          className="grid grid-cols-2 md:grid-cols-5 md:grid-rows-5  lg:h-[470px]
          xl:h-[550px] md:h-[370px]  h-full gap-3 md:mt-10"
        >
          {/* Column One Card*/}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "tween", ease: "easeInOut" }}
            className="col-span-1 row-span-4 w-full order-2 md:order-0 overflow-hidden"
          >
            <Card
              percentage={`${cards[0].title}`}
              title={`${cards[0].subTitle}`}
              imageSrc={cards[0].imageSrc}
              altText={`${cards[0].altText}`}
            />
          </motion.div>
          {/* Column Tow  =>Title */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "tween", ease: "easeInOut" }}
            className="flex items-center justify-around col-span-2 md:col-span-3 row-span-1 w-full mb-7 order-1 md:order-0 "
          >
            <motion.span
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "tween", ease: "easeInOut" }}
            >
              <Image
                src={gridSectionData.iconThree}
                alt="Icon Three"
                className="object-cover w-full md:max-w-12 max-w-10 "
              />
            </motion.span>
            <h1 className="text-nowrap text-md md:text-xl">
              {gridSectionData.subTitle}
            </h1>
            <motion.span
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "tween", ease: "easeInOut" }}
            >
              <Image
                src={gridSectionData.iconFour}
                alt="Icon Four"
                className="object-cover md:max-w-10  h-full max-w-8"
              />
            </motion.span>
          </motion.div>
          {/* Column Five => Image Plant*/}
          <motion.div
            className="col-span-1 md:row-span-4 h-full order-5 md:order-0"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "tween", ease: "easeInOut" }}
          >
            <Image
              src={gridSectionData.plantImage}
              alt="Image Shopping"
              className=" w-full h-full"
            />
          </motion.div>
          {/* Column Four => Image Food */}
          <motion.div
            className=" h-full w-full col-span-1 md:row-span-4 order-4  md:order-0"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "tween", ease: "easeInOut" }}
          >
            <Image
              src={gridSectionData.foodImage}
              alt="Image Food"
              className="h-full"
            />
          </motion.div>
          {/* Column Three => Buttons Group */}
          <div className="md:col-span-1 col-span-2 row-span-4 w-full flex md:flex-col justify-around order-6 md:order-0 gap-5 items-center">
            <div className="flex flex-col gap-8 text-[#213D34] lg:w-[70%] md:w-full">
              <Buttons
                content="Try Our Demo"
                border="1"
                borderColor="#213D34"
                textColor="#213D34"
              />
              <Buttons
                content="Start For Free"
                bg="#d9ef78"
                textColor="#213D34"
              />
            </div>
            <div className="w-full max-h-42 bg-[#213D34] md:p-4  text-center rounded-3xl text-[#d9ef78] md:space-y-10  py-5 ">
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                30 000 +
              </h1>
              <h2 className="text-lg lg:text-2xl ">Happy Users</h2>
            </div>
          </div>
          {/* Column Card  */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "tween", ease: "easeInOut" }}
            className="col-span-1 row-span-4 w-full order-3 md:order-0 overflow-hidden"
          >
            <Card
              percentage={`${cards[1].title}`}
              title={`${cards[1].subTitle}`}
              imageSrc={cards[1].imageSrc}
              altText={`${cards[1].altText}`}
              order="2"
            />
          </motion.div>
        </section>
        {/*End Container Section Two */}
      </div>
    </section>
  );
}
