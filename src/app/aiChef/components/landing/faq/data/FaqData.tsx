"use client";
import { Variants } from "framer-motion";
import {
  childAnimateLeft,
  childAnimateRight,
} from "../../../shared/animation/Animation";
export interface faqDataType {
  id: number;
  title: string;
  description: string;
  animated: Variants;
}
export const itemFaqData = [
  {
    id: 1,
    title: "How does the AI create personalized meal plans?",
    description:
      "Our AI system analyzes your dietary preferences, health goals, and budget to curate meal plans that are unique to you. It continually learns from your feedback and choices to improve its suggestions over time.",
    animated: childAnimateLeft,
  },
  {
    id: 2,
    title: "Can I integrate special dietary requirements into my meal plan?",
    description:
      "Absolutely! Our platform is designed to accommodate a range of dietary needs, including vegetarian, vegan, gluten-free, and keto options. Just specify your requirements in your profile, and your meal plans will be adjusted accordingly.",
    animated: childAnimateRight,
  },
  {
    id: 3,
    title: "How does the grocery delivery service work?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    animated: childAnimateLeft,
  },
  {
    id: 4,
    title: "Are there options for budget-conscious users?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    animated: childAnimateRight,
  },
  {
    id: 5,
    title: "How can I access nutrition education and healthy eating tips?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    animated: childAnimateLeft,
  },
  {
    id: 6,
    title:
      "How does the platform accommodate allergies and food sensitivities?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    animated: childAnimateRight,
  },
  {
    id: 7,
    title: "Can I adjust my meal plans after they've been created?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    animated: childAnimateLeft,
  },

  {
    id: 8,
    title:
      "What makes your AI-driven meal planning different from other meal planning services?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    animated: childAnimateRight,
  },
];
