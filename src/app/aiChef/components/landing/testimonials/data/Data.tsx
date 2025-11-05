import { StaticImageData } from "next/image";
import Emily from "../../../../../../../public/images/testimonial/Emily.png";
import Mark from "../../../../../../../public/images/testimonial/Mark.png";
import Sarah from "../../../../../../../public/images/testimonial/Sarah.png";
import Reb from "../../../../../../../public/images/testimonial/Rebecca.png";

export interface TestimonialDataType {
  id: number;
  description: string;
  personImage: StaticImageData;
  namePerson: string;
  background?: string;
  textColor?: string;
}
export const TestimonialItemData: TestimonialDataType[] = [
  // Emily
  {
    id: 1,
    description:
      "Since using AIChefMate, I've rediscovered my love for cooking! The meal plans are easy and delicious. It's been a game-changer for my busy lifestyle.",
    personImage: Emily,
    namePerson: "Emily R.",
  },
  // Mark
  {
    id: 2,
    description:
      "I never knew healthy eating could be this simple and satisfying. Thanks to AIChefMate, my family enjoys diverse, nutritious meals every day.",
    personImage: Mark,
    namePerson: "Mark T.",
    background: "#213D34",
    textColor: "#f1f2ed",
  },
  // Sarah
  {
    id: 3,
    description:
      "The grocery savings have been incredible! Plus, every meal feels tailored just for me. I'm eating better and feeling great. A big thumbs up!",
    personImage: Sarah,
    namePerson: "Sarah J.",
  },
  // Reb
  {
    id: 4,
    description:
      "Switching to AIChefMate has been a revelation for my meal prep routine. The AI-generated plans are spot-on with my tastes and nutritional needs, making healthy eating effortless and enjoyable.",
    personImage: Reb,
    namePerson: "Rebecca S.",
  },
];
