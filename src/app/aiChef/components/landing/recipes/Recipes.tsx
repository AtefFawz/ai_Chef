"use client";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Buttons from "../../shared/components/Button";
import { DataItemRecipes } from "./data/Data";
import victoria from "../../../../../../public/images/recipes/victoria.png";
import { RecipeItem } from "./animation/Animated";
export default function Recipes() {
  const data = DataItemRecipes;
  return (
    <section
      id="recipes"
      className="w-full md:py-16 py-10 bg-white text-[#213D34] "
    >
      <div className="container mx-auto lg:px-5 px-4 flex justify-start items-center gap-3 flex-nowrap mb-16">
        {" "}
        <h1 className=" text-2xl  lg:text-3xl text-start ">Recipes/</h1>
        <p className=" lg:text-lg  lg:max-w-[50%] md:max-w-[50%] max-w-[70% ] text-sm">
          Recipes crafted by AI, personalized to perfectly align with your
          unique dietary needs and flavor preferences
        </p>{" "}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5  w-full justify-between gap-10 grid-rows-3  h-full container mx-auto lg:px-8 px-4 ">
        <div
          className={`row-span-3 h-full flex flex-col justify-around gap-5 md:col-span-3 w-full`}
        >
          {data.map((recipe) => (
            <RecipeItem key={recipe.id} recipe={recipe} />
          ))}
        </div>
        <div className="relative row-span-3 overflow-hidden flex items-center justify-center md:col-span-2 md:h-full h-[350px]">
          <div className="absolute bg-white py-3 px-2 flex gap-1 justify-evenly items-center rounded-e-full left-0 top-[-10px] md:max-w-[65%] lg:max-w-[50%] max-w-[50%] w-full z-10">
            <span className="text-[12px] md:text-sm xl:text-lg w-full">
              {" "}
              Explorer More Recipes{" "}
            </span>
            <div>
              <Buttons
                content={<ArrowForwardIcon />}
                border="1"
                borderColor="#213D34"
              />
            </div>
          </div>
          <Image
            src={victoria}
            alt="victoria"
            fill
            className="object-cover rounded-3xl "
          />
        </div>
      </div>
    </section>
  );
}
