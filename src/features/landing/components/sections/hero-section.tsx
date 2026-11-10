"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";

export function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
      <div className="shell hero-section__grid">
        <div className="hero-copy">
          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <span className="hero-kicker__spark"><Icon name="sparkles" size={15} /></span>
            A little more joy in every meal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Make room for <em>good</em> food.
          </motion.h1>

          <motion.p
            className="hero-copy__description"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
          >
            A thoughtful way to turn what you love, what you have and the time you have into your next kitchen idea.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.48 }}
          >
            <a href="#studio" className="button button--accent">
              Build a recipe brief <Icon name="arrow-up-right" size={17} />
            </a>
            <a href="#approach" className="text-link text-link--light">
              Explore the approach <span><Icon name="arrow-right" size={16} /></span>
            </a>
          </motion.div>

          <motion.div
            className="hero-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.7 }}
          >
            <div className="hero-note__avatars" aria-hidden="true">
              <span>01</span><span>02</span><span>03</span>
            </div>
            <p><strong>Made around you.</strong><br />Not the other way around.</p>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, rotate: 1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.05, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-visual__image-wrap">
            <Image
              src="/images/hero-table.webp"
              alt="A colourful table of fresh dishes ready to share"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 48vw"
              className="hero-visual__image"
            />
          </div>
          <motion.div
            className="hero-sticker hero-sticker--top"
            animate={{ y: [0, -7, 0], rotate: [4, 1, 4] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="hero-sticker__icon"><Icon name="leaf" size={17} /></span>
            <span>Fresh thinking<br /><strong>starts here</strong></span>
          </motion.div>
          <motion.div
            className="hero-sticker hero-sticker--bottom"
            animate={{ y: [0, 6, 0], rotate: [-4, -1, -4] }}
            transition={{ duration: 6.3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="hero-sticker__small">YOUR KITCHEN, YOUR RULES</span>
            <strong>One idea<br />at a time.</strong>
          </motion.div>
          <div className="hero-visual__caption"><span>FIG. 01</span><span>THE ART OF EVERYDAY EATING</span></div>
        </motion.div>
      </div>
      <div className="hero-bottom-line shell">
        <span>GOOD FOOD, WITHOUT THE GUESSWORK</span>
        <a href="#approach">Scroll to explore <span className="scroll-indicator" /></a>
      </div>
    </section>
  );
}
