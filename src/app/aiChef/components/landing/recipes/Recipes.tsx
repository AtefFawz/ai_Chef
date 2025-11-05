"use client";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Buttons from "../../shared/components/Button";
import { DataItemRecipes } from "./data/Data";
import victoria from "../../../../../../public/images/recipes/victoria.png";
import { RecipeItem } from "./animation/Animated";
import Heading from "../../shared/components/Heading";
export default function Recipes() {
  const data = DataItemRecipes;
  return (
    <section id="recipes" className="w-full bg-white text-[#213D34] ">
      <div className="container mx-auto lg:px-8 px-4  ">
        <Heading
          title="Recipes"
          description="Recipes crafted by AI, personalized to perfectly align with your
          unique dietary needs and flavor preferences"
        />
        <div className="grid grid-cols-1 md:grid-cols-5  w-full justify-between gap-10 grid-rows-3  h-full  ">
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
      </div>
    </section>
  );
}
