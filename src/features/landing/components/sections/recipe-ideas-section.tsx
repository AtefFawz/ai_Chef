"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { recipeIdeas } from "@/features/landing/data/content";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/features/landing/components/ui/reveal";
import { SectionHeading } from "@/features/landing/components/ui/section-heading";

export function RecipeIdeasSection() {
  return (
    <section className="section section--white" id="ideas">
      <div className="shell">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="A taste of what's possible"
            title="Start with something delicious."
            description="A few ideas to get your imagination moving. Think of them as a starting point, not a strict recipe book."
          />
          <Reveal className="section-side-note" direction="right">
            <span>THE GOOD STUFF</span>
            <p>Fresh ideas.<br />Flexible ingredients.</p>
          </Reveal>
        </div>

        <div className="recipe-grid">
          {recipeIdeas.map((recipe, index) => (
            <Reveal key={recipe.id} delay={index * 0.09}>
              <motion.article
                className={`recipe-card recipe-card--${recipe.tone}`}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <div className="recipe-card__image-wrap">
                  <Image
                    src={recipe.image}
                    alt={recipe.imageAlt}
                    fill
                    sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 30vw"
                    className="recipe-card__image"
                  />
                  <span className="recipe-card__index">0{index + 1}</span>
                </div>
                <div className="recipe-card__body">
                  <div className="recipe-card__meta"><span>{recipe.tag}</span><span><Icon name="clock" size={14} />{recipe.time}</span></div>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.description}</p>
                  <a href="#studio" className="recipe-card__link">Make it yours <Icon name="arrow-up-right" size={17} /></a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
        <p className="content-note"><span>*</span> These are illustrative recipe ideas included with the site, not live AI-generated results.</p>
      </div>
    </section>
  );
}
