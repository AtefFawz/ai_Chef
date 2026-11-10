"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "@/features/landing/data/content";
import { Icon } from "@/components/ui/icon";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      () => {
        // Resolve the active item against one stable reading line instead of
        // trusting a partial IntersectionObserver entries batch.
        const activationLine = Math.max(104, window.innerHeight * 0.28);
        const currentSection = sections.find((section) => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= activationLine && bounds.bottom > activationLine;
        });

        if (currentSection) setActiveHref(`#${currentSection.id}`);
      },
      {
        root: null,
        rootMargin: "-96px 0px -62% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <a
          className="brand"
          href="#home"
          aria-label="AI Chef Mate home"
          onClick={closeMenu}
        >
          <span className="brand__mark">
            <Icon name="utensils" size={21} />
          </span>
          <span className="brand__name">
            ai chef<span>mate.</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "location" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a className="header-cta" href="#studio">
          Build your recipe brief <Icon name="arrow-up-right" size={16} />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <Icon name={menuOpen ? "close" : "menu"} size={23} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: "easeInOut" }}
          >
            <div className="mobile-nav__inner shell">
              {navigation.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={isActive ? "is-active" : undefined}
                    aria-current={isActive ? "location" : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                    <Icon name="arrow-up-right" size={17} />
                  </a>
                );
              })}
              <a className="mobile-nav__cta" href="#studio" onClick={closeMenu}>
                Build your recipe brief <Icon name="arrow-up-right" size={17} />
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
