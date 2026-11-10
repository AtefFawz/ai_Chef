import Image from "next/image";
import { principles } from "@/features/landing/data/content";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/features/landing/components/ui/reveal";
import { SectionHeading } from "@/features/landing/components/ui/section-heading";

export function PrinciplesSection() {
  return (
    <section className="section section--rose" id="principles">
      <div className="shell principles-layout">
        <div className="principles-copy">
          <SectionHeading
            eyebrow="The AI Chef point of view"
            title="A good meal should fit your real life."
            description="Not an idealised kitchen. Yours. The ingredients on your shelf, the people at your table and the time in your day."
          />
          <div className="principles-list">
            {principles.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.09}>
                <article className="principle-item">
                  <span>{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.description}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="principles-visual" direction="right">
          <div className="principles-visual__photo">
            <Image
              src="/images/preparing-food.webp"
              alt="Fresh ingredients being prepared for a home-cooked meal"
              fill
              sizes="(max-width: 900px) 90vw, 42vw"
            />
          </div>
          <div className="principles-visual__note">
            <span className="principles-visual__note-icon"><Icon name="leaf" size={20} /></span>
            <p>Keep the ingredients.<br /><strong>Change the possibilities.</strong></p>
          </div>
          <span className="principles-visual__vertical">COOK WITH WHAT YOU HAVE</span>
        </Reveal>
      </div>
    </section>
  );
}
