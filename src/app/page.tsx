import HomComponent from "./aiChef/components/landing/home/Home";
import Blog from "./aiChef/components/landing/blog/Blog";
import Recipes from "./aiChef/components/landing/recipes/Recipes";
import Demo from "./aiChef/components/landing/demo/Demo";
import Work from "./aiChef/components/landing/works/Work";
import Benefits from "./aiChef/components/landing/benefits/BenefitCard";
import Testimonials from "./aiChef/components/landing/testimonials/Testimonials";
import Pricing from "./aiChef/components/pricing/Pricing";
import FAQ from "./aiChef/components/landing/faq/Faq";
import Assistance from "./aiChef/components/landing/assistance/Assistance";
import Footer from "./aiChef/components/ui/Footer";
export default function Home() {
  return (
    <div
      id="style"
      className="font-sans grid items-center justify-items-center min-h-screen overflow-hidden bg-[#F1F2ED] "
    >
      <HomComponent />
      <Demo />
      <Work />
      <Benefits />
      <Recipes />
      <Testimonials />
      <Pricing />
      <Blog />
      <FAQ />
      <Assistance />
      <Footer />
    </div>
  );
}
