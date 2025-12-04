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
      className="container mx-auto py-20  text-[#213D34] xl:scale-85"
    >
      <div className="px-8 md:px-3 lg:px-8">
        {" "}
        <Heading
          title="Healthy Insights"
          description="Latest News, Expert Blogs, and Nutritional Learning"
        />
      </div>

      <motion.div
        variants={parentAnimate}
        initial="hidden"
        whileInView="visible"
        className=" grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-hull px-2"
      >
        {/* Blog Item  */}
        {dataItemBlog?.length > 0 ? (
          dataItemBlog.map((item: blogDataType) => {
            return (
              <motion.article
                variants={childAnimateLeft}
                key={item.id}
                className="bg-white flex flex-col justify-evenly gap-y-7 w-full rounded-3xl pb-10 p-2"
              >
                <figure className="w-full space-y-7">
                  <div className="overflow-hidden rounded-3xl">
                    <Image
                      src={item.img}
                      loading="lazy"
                      alt=" Image From Blog Section"
                      className="object-cover w-full hover:scale-125 duration-300"
                    />
                  </div>

                  <figcaption className="xl:text-2xl text-xl text-start px-2">
                    {item.description}
                  </figcaption>
                </figure>
                <div className="flex justify-center items-center">
                  <Buttons
                    content="Read More"
                    bg="#213D34"
                    textColor="#D9EF78"
                    size="80%"
                  />
                </div>
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
