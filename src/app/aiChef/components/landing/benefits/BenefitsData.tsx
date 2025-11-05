import Picture from "../../../../../../public/images/benefits/Picture.png";
import Picture2 from "../../../../../../public/images/benefits/Picture2.png";
import { StaticImageData } from "next/image";
export interface DataItem {
  title: string;
  description: string;
  color?: string;
  background?: string;
  textColor?: string;
}
export interface DataType {
  data: DataItem[];
  img: StaticImageData;
  img2: StaticImageData;
}
export const BenefitsData: DataType = {
  data: [
    {
      title: "Personalized Nutrition",
      description:
        "Get meal plans tailored to your unique dietary needs, preferences, and goals, ensuring a balanced and enjoyable diet.",
      background: "#D9EF78",
    },
    {
      title: "Time-Saving Convenience",
      description:
        "Say goodbye to meal planning stress. Our AI-driven platform simplifies your weekly meal preparation, saving you valuable time.",
    },
    {
      title: "Healthier Eating Habits",
      description:
        "Easily adopt a healthier lifestyle with nutrient-rich meal plans and educational content on nutrition and wellness.",
      background: "#F1F2ED",
    },
    {
      title: "Cost-Effective Shopping",
      description:
        "Reduce food waste and save money with efficient grocery shopping lists that align perfectly with your meal plans.",
    },
    {
      title: "Seamless Grocery Delivery",
      description:
        "Enjoy the convenience of having all your meal ingredients delivered right to your doorstep through our local grocery store partnerships.",
    },
    {
      title: "Community Support",
      description:
        "Join a community of like-minded individuals, share experiences, recipes, and tips, and get motivated on your journey to healthier eating.",
      background: "#213D34",
      color: "#D9EF78",
      textColor: "#F8F5EF",
    },
  ],
  img: Picture,
  img2: Picture2,
};
