"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Buttons from "../../shared/components/Button";
import { dataItemBlog, blogDataType } from "./data/BlogData";
import Heading from "../../shared/components/Heading";
import {
  parentAnimate,
  childAnimateLeft,
} from "../../shared/animation/Animation";
export default function Blog() {
  return (
    <section
      id="blog"
      className="container mx-auto py-20 px-8 md:px-3 lg:px-8 text-[#213D34] xl:scale-85"
    >
      <Heading
        title="Healthy Insights"
        description="Latest News, Expert Blogs, and Nutritional Learning"
      />
      <motion.div
        variants={parentAnimate}
        initial="hidden"
        whileInView="visible"
        className=" grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-hull "
      >
        {/* Blog Item  */}
        {dataItemBlog?.length > 0 ? (
          dataItemBlog.map((item: blogDataType) => {
            return (
              <motion.article
                variants={childAnimateLeft}
                key={item.id}
                className="bg-white flex flex-col justify-evenly gap-y-7 w-full rounded-3xl p-5 pb-10"
              >
                <figure className="flex flex-col gap-y-7 items-start w-full  ">
                  <Image
                    width={500}
                    height={500}
                    src={item.img}
                    loading="lazy"
                    alt=" Image From Blog Section"
                    className="object-cover w-full "
                  />
                  <figcaption className="xl:text-2xl text-xl ">
                    {item.description}
                  </figcaption>
                </figure>
                <Buttons
                  content="Read More"
                  bg="#213D34"
                  textColor="#D9EF78"
                  size="60%"
                />
              </motion.article>
            );
          })
        ) : (
          <p className="text-4xl font-extrabold text-center text-red-500">
            Data Not Found
          </p>
        )}
      </motion.div>
    </section>
  );
}
