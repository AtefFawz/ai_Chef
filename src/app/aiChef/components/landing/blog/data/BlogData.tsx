import { StaticImageData } from "next/image";
import Gabriel from "../../../../../../../public/images/blog/Gabriel.png";
import Plant from "../../../../../../../public/images/blog/Plant.png";
import Jodie from "../../../../../../../public/images/blog/jodie.png";

export interface blogDataType {
  img: StaticImageData;
  description: string;
  id: number;
}

export const dataItemBlog = [
  {
    id: 1,
    img: Gabriel,
    description: "Mastering Meal Prep: Time-Saving Tips for Busy Weekdays",
  },
  {
    id: 2,
    img: Plant,
    description: "The Power of Plant-Based: Benefits Beyond the Plate",
  },
  {
    id: 3,
    img: Jodie,
    description: "Balancing Nutrients: A Guide to a Well-Rounded Diet",
  },
];
