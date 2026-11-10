import { HeroSection } from "@/features/landing/components/sections/hero-section";
import { ApproachSection } from "@/features/landing/components/sections/approach-section";
import { RecipeIdeasSection } from "@/features/landing/components/sections/recipe-ideas-section";
import { PrinciplesSection } from "@/features/landing/components/sections/principles-section";
import { RecipeStudio } from "@/features/landing/components/sections/recipe-studio";
import { FaqSection } from "@/features/landing/components/sections/faq-section";
import { FinalCtaSection } from "@/features/landing/components/sections/final-cta-section";
import { SiteFooter } from "@/components/layout/site-footer";

export function LandingPage() {
  return (
    <main id="main-content">
      <HeroSection />
      <ApproachSection />
      <RecipeIdeasSection />
      <PrinciplesSection />
      <RecipeStudio />
      <FaqSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
