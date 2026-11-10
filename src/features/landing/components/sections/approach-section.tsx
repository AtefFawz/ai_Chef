import { processSteps } from "@/features/landing/data/content";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/features/landing/components/ui/reveal";
import { SectionHeading } from "@/features/landing/components/ui/section-heading";

export function ApproachSection() {
  return (
    <section className="section section--paper" id="approach">
      <div className="shell">
        <div className="approach-intro">
          <SectionHeading
            eyebrow="A simpler ritual"
            title="From 'what's for dinner?' to 'that was delicious.'"
            description="A little clarity can change the way you plan, shop and cook. Start with a thought, then make it yours."
          />
          <Reveal className="approach-aside" direction="right" delay={0.12}>
            <span className="aside-mark">
              <Icon name="sparkles" size={19} />
            </span>
            <p>
              Good cooking is not about having everything figured out. It is
              about knowing where to start.
            </p>
          </Reveal>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <Reveal
              className="process-card"
              delay={index * 0.1}
              key={step.number}
            >
              <div className="process-card__top">
                <span className="process-card__number">{step.number}</span>
                <span className="process-card__icon">
                  <Icon
                    name={
                      index === 0
                        ? "utensils"
                        : index === 1
                          ? "sparkles"
                          : "leaf"
                    }
                    size={19}
                  />
                </span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="process-card__line">
                <span style={{ width: `${(index + 1) * 33.333}%` }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
