"use client";
import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
// Images
import { works } from "./Data";
import Button from "../../shared/components/Button";
// External Component
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
export default function Work() {
  const [selected, setSelected] = useState(works[0]);
  const handleNextWork = useCallback(() => {
    const currentIndex = works.findIndex((item) => item.id === selected.id);
    const nextIndex = (currentIndex + 1) % works.length;
    setSelected(works[nextIndex]);
  }, [selected]);

  const handlePrevWork = useCallback(() => {
    const currentIndex = works.findIndex((item) => item.id === selected.id);
    const prevIndex = (currentIndex - 1 + works.length) % works.length;
    setSelected(works[prevIndex]);
  }, [selected]);
  const button = useMemo(
    () => [
      {
        id: "prev",
        content: <ArrowBackIcon />,
        bg: "",
        textColor: "#213D34",
        border: "1",
        borderColor: "#213D34",
        fun: handlePrevWork,
        aria: "Previous Work",
      },
      {
        id: "next",
        content: <ArrowForwardIcon />,
        bg: "#d9ef78",
        textColor: "#213D34",
        border: "1",
        borderColor: "#213D34",
        fun: handleNextWork,
        aria: "Next Work",
      },
    ],
    [handlePrevWork, handleNextWork]
  );
  return (
    <section className="container mx-auto px-3 w-full mt-26 text-[#213D34]">
      <div className="flex flex-col md:flex-row w-full justify-around gap-10 p-5">
        <div className="max-w-lg">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">{`0${selected.id}`}</h1>
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl py-8">
            {selected.title}
          </h1>
          <motion.p
            key={selected.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut }}
            className="md:text-md text-sm lg:text-xl "
          >
            {selected.description}
          </motion.p>
          <div className="mt-10 flex gap-x-5">
            {button.map((e, index) => (
              <div key={index}>
                <Button
                  bg={e.bg}
                  border={e.border}
                  textColor={e.textColor}
                  content={e.content}
                  onClick={e.fun}
                  aria-label={index === 0 ? "Previous Work" : "Next Work"}
                />
              </div>
            ))}
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-15 md:py-16">{`0${selected.id}/ 0${works.length}`}</h1>
        </div>
        <div className="relative h-full md:max-w-sm w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              className="relative w-full h-[400px]"
            >
              <Image
                src={selected.img}
                alt={selected.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
