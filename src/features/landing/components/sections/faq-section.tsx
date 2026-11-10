import { faqs } from "@/features/landing/data/content";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/features/landing/components/ui/reveal";
import { SectionHeading } from "@/features/landing/components/ui/section-heading";

export function FaqSection() {
  return (
    <section className="section section--paper" id="faq">
      <div className="shell faq-layout">
        <SectionHeading
          eyebrow="Good to know"
          title="A few things you might be wondering."
          description="A clear kitchen starts with clear expectations. Here's how this experience works today."
        />
        <div className="faq-list">
          {faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.04}>
              <details className="faq-item" open={index === 0}>
                <summary>
                  <span className="faq-item__number">0{index + 1}</span>
                  <span className="faq-item__question">{item.question}</span>
                  <span className="faq-item__toggle"><Icon name="plus" size={17} /></span>
                </summary>
                <div className="faq-item__answer"><p>{item.answer}</p></div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
