import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import Buttons from "../../../shared/components/Button";
import { DataRecipes } from "../data/Data";
export const RecipeItem = ({ recipe }: { recipe: DataRecipes }) => {
  const [scope, animate] = useAnimate();

  const runAnimatedSequence = async () => {
    await animate(
      scope.current,
      { rotateX: 90, scale: 1.2 },
      { duration: 0.5 }
    );
    await animate(scope.current, { rotateX: 0 }, { duration: 0.5 });

    await animate(scope.current, { rotate: 90 }, { duration: 0.5 });

    animate(scope.current, { rotate: 0, scale: 1 }, { duration: 0.5 });
  };

  return (
    <div
      style={{
        borderRadius: recipe.rounded,
        backgroundColor: recipe.background,
      }}
      className={`border-1 px-5 lg:py-6 md:py-0 h-full flex justify-between items-center w-full border-[#213D34]`}
    >
      <div className="space-y-3 md:space-y-5  w-full py-5 px-2">
        <p className="text-[12px] lg:text-lg ">{recipe.description}</p>
        {/* Button */}
        <div
          className="xl:w-[30%] w-full md:w-[70%]"
          onClick={runAnimatedSequence}
        >
          <Buttons content={`${recipe.textButton} `} bg="#d9ef78" border="1" />
        </div>
      </div>
      {/* Image ==> ICON*/}
      <div>
        <motion.div
          ref={scope}
          style={{ width: 160, height: 160 }}
          className="object-cover"
        >
          <Image
            src={recipe.img}
            alt="image"
            width={140}
            height={140}
            className="w-full h-full scale-85 md:scale-95 lg:scale-100"
          />
        </motion.div>
      </div>
    </div>
  );
};
