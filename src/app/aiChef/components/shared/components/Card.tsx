"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface StatsCardProps {
  percentage: string;
  title: string;
  imageSrc: StaticImageData;
  altText: string;
  order?: string;
}

export default function StatsCard({
  percentage,
  title,
  imageSrc,
  altText,
  order,
}: StatsCardProps) {
  return (
    <div className=" bg-white rounded-3xl w-full flex flex-col items-start justify-between py-4 px-2 h-full ">
      <h1 className={`text-xl md:text-2xl lg:text-4xl px-3 order-${order}`}>
        {percentage}
      </h1>
      <h2 className={`text-lg md:text-xl lg:text-xl px-1 order-${order}`}>
        {title}
      </h2>
      <motion.div layout
      whileHover={{scale:1.03}}
      transition={{duration:.3}}
        className={`flex items-center justify-center w-full overflow-hidden `}>
        <Image
          src={imageSrc}
          alt={altText}
          className={` h-full object-cover w-full overflow-hidden`}
        />
      </motion.div>
    </div>
  );
}
