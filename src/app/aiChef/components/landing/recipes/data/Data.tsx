import { StaticImageData } from "next/image";
import Plate1 from "../../../../../../../public/images/recipes/Plate1.png";
import Plate2 from "../../../../../../../public/images/recipes/Plate2.png";
import Plate3 from "../../../../../../../public/images/recipes/Plate3.png";

export interface DataRecipes {
  textButton?: string;
  description?: string;
  img: StaticImageData;
  id: number;
  rounded?: string;
  background?: string;
}
export const DataItemRecipes: DataRecipes[] = [
  {
    id: 1,
    textButton: "Learn More ",
    description: "Savory Quinoa and Roasted Vegetable Bowl",
    img: Plate1,
    rounded: "2rem",
  },
  {
    id: 2,
    textButton: "Learn More ",
    description: "Herb-Infused Grilled Chicken with Seasonal Greens",
    img: Plate2,
    rounded: "9999px",
    background: "#d9ef78",
  },
  {
    id: 3,
    textButton: "Learn More ",
    description: "Mediterranean Lentil and Kale Salad",
    img: Plate3,
    rounded: "2rem",
    background: "#f1f2ed",
  },
];
