import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/features/landing/components/ui/reveal";

export function FinalCtaSection() {
  return (
    <section className="final-cta">
      <div className="shell final-cta__inner">
        <Reveal>
          <span className="eyebrow eyebrow--light">
            <span className="eyebrow__dot" /> A fresh idea is waiting
          </span>
          <h2>
            Make tonight
            <br />
            <em>a little more delicious.</em>
          </h2>
          <p>Start with what you have. We will help you shape the idea.</p>
          <a href="#studio" className="button button--accent">
            Create your recipe brief <Icon name="arrow-up-right" size={17} />
          </a>
        </Reveal>
        <div className="final-cta__decoration" aria-hidden="true">
          <Icon name="leaf" size={145} />
        </div>
      </div>
    </section>
  );
}
