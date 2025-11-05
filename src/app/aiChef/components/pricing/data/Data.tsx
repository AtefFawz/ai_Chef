export interface PricingDataType {
  id: number;
  plan: string;
  price: string | number;
  planDate: string;
  features: string[];
  dedicatedTO: string;
  textButton: string;
  bgButton: string;
  backgroundCard?: string;
  logicStyle?: false | true;
}
export const PricingItemData: PricingDataType[] = [
  {
    // Plan One
    id: 1,
    plan: "Free Plan",
    price: "$0",
    planDate: "per month",
    features: [
      "Basic AI meal planning",
      "Limited recipe access",
      "Manual grocery list creation",
    ],
    dedicatedTO:
      " Those who want to explore the platform's basic functionalities.",
    textButton: "Get Started For Free",
    bgButton: "transparent",
  },
  // Plan Tow
  {
    id: 2,
    plan: "Standard Plan",
    price: "$9.99",
    planDate: "per month",
    features: [
      "Comprehensive AI meal planning",
      "Full recipe library access",
      "Automated grocery lists",
      "Grocery delivery integration",
    ],
    dedicatedTO:
      "Individuals or families looking for full meal planning support and convenience.",
    textButton: "Subscribe Now",
    bgButton: "#213D34",
    backgroundCard: "#d9ef78",
    logicStyle: true,
  },
  //   Plan Three
  {
    id: 3,
    plan: "Premium Plan",
    price: "$19.99",
    planDate: "per month",
    features: [
      "All Standard features",
      "Exclusive gourmet recipes",
      "Nutritional consultations",
      "Advanced customization options",
    ],
    dedicatedTO:
      " Users seeking a premium culinary experience with added personalization and expert guidance.",
    textButton: "Go Premium",
    bgButton: "transparent",
  },
];
