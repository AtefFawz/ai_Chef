"use client";

import { useMemo, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/features/landing/components/ui/reveal";
import { buildRecipeBrief } from "@/features/landing/utils/build-recipe-brief";
import { SectionHeading } from "@/features/landing/components/ui/section-heading";

const mealOptions = ["Dinner", "Lunch", "Breakfast", "A quick snack"];
const preferenceOptions = [
  "No specific preference",
  "Vegetarian",
  "Vegan",
  "High protein",
  "Gluten-free preference",
];

export function RecipeStudio() {
  const [meal, setMeal] = useState("Dinner");
  const [preference, setPreference] = useState("No specific preference");
  const [ingredients, setIngredients] = useState(
    "chickpeas, lemon, spinach, garlic",
  );
  const [time, setTime] = useState("30 minutes");
  const [servings, setServings] = useState("2");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const brief = useMemo(
    () => buildRecipeBrief({ meal, preference, ingredients, time, servings }),
    [meal, preference, ingredients, time, servings],
  );

  function resetFeedback() {
    setCopied(false);
    setCopyError(false);
  }

  async function handleCopy(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCopied(false);
    setCopyError(false);

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard access is unavailable in this browser.");
      }
      await navigator.clipboard.writeText(brief);
      setCopied(true);
    } catch {
      setCopyError(true);
    }
  }

  return (
    <section className="section section--studio" id="studio">
      <div className="shell">
        <SectionHeading
          eyebrow="Your kitchen, your call"
          title="Let's cook up an idea."
          description="Set the scene and create a recipe brief tailored to your ingredients, preferences and time. Copy it into your preferred AI assistant to explore the possibilities."
          theme="dark"
        />

        <div className="studio-layout">
          <Reveal className="studio-form-wrap">
            <form className="studio-form" onSubmit={handleCopy}>
              <div className="studio-form__header">
                <span className="studio-form__step">
                  01 / YOUR STARTING POINT
                </span>
                <span className="studio-form__leaf">
                  <Icon name="leaf" size={20} />
                </span>
              </div>

              <span className="field-label">What are we making?</span>
              <div className="choice-grid" role="group" aria-label="Meal type">
                {mealOptions.map((option) => (
                  <button
                    className={`choice-chip ${meal === option ? "is-selected" : ""}`}
                    key={option}
                    type="button"
                    aria-pressed={meal === option}
                    onClick={() => {
                      setMeal(option);
                      resetFeedback();
                    }}
                  >
                    {meal === option ? <Icon name="check" size={14} /> : null}
                    {option}
                  </button>
                ))}
              </div>

              <label className="field-label" htmlFor="ingredients">
                What is already in your kitchen?
              </label>
              <textarea
                id="ingredients"
                className="studio-input studio-textarea"
                value={ingredients}
                onChange={(event) => {
                  setIngredients(event.target.value);
                  resetFeedback();
                }}
                placeholder="e.g. chickpeas, lemon, spinach, garlic"
                rows={3}
                maxLength={500}
              />
              <span className="field-hint">
                Separate ingredients with commas. You can leave this open-ended.
              </span>

              <div className="studio-form__row">
                <div className="studio-form__field">
                  <label className="field-label" htmlFor="preference">
                    Food preference
                  </label>
                  <select
                    id="preference"
                    className="studio-input"
                    value={preference}
                    onChange={(event) => {
                      setPreference(event.target.value);
                      resetFeedback();
                    }}
                  >
                    {preferenceOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="studio-form__field">
                  <label className="field-label" htmlFor="time">
                    Time available
                  </label>
                  <select
                    id="time"
                    className="studio-input"
                    value={time}
                    onChange={(event) => {
                      setTime(event.target.value);
                      resetFeedback();
                    }}
                  >
                    {[
                      "15 minutes",
                      "30 minutes",
                      "45 minutes",
                      "60 minutes",
                    ].map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="studio-form__bottom">
                <div className="servings-control">
                  <label className="field-label" htmlFor="servings">
                    Servings
                  </label>
                  <select
                    id="servings"
                    className="studio-input studio-input--compact"
                    value={servings}
                    onChange={(event) => {
                      setServings(event.target.value);
                      resetFeedback();
                    }}
                  >
                    {["1", "2", "3", "4", "5", "6"].map((option) => (
                      <option key={option} value={option}>
                        {option} {option === "1" ? "person" : "people"}
                      </option>
                    ))}
                  </select>
                </div>
                <motion.button
                  className="button button--accent studio-copy-button"
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                >
                  <Icon name="copy" size={17} /> Copy recipe brief
                </motion.button>
              </div>
              <p
                className={`studio-status ${copied ? "studio-status--success" : ""}`}
                role="status"
                aria-live="polite"
              >
                {copied
                  ? "Your brief is copied. Paste it into your preferred AI assistant."
                  : copyError
                    ? "Clipboard access was blocked. You can still select and copy the preview."
                    : "Your details stay in this browser. Nothing is sent to a server."}
              </p>
            </form>
          </Reveal>

          <Reveal
            className="studio-preview-wrap"
            direction="right"
            delay={0.12}
          >
            <div className="studio-preview">
              <div className="studio-preview__top">
                <div>
                  <span className="studio-preview__eyebrow">
                    02 / YOUR RECIPE BRIEF
                  </span>
                  <h3>A note for the chef.</h3>
                </div>
                <span className="studio-preview__spark">
                  <Icon name="sparkles" size={21} />
                </span>
              </div>
              <div className="studio-preview__paper">
                <span className="studio-preview__paper-label">
                  AI CHEF MATE · KITCHEN NOTE
                </span>
                <p className="studio-preview__prompt">{brief}</p>
                <div className="studio-preview__rule" />
                <div className="studio-preview__footer">
                  <span>MADE TO YOUR TASTE</span>
                  <span>✳</span>
                </div>
              </div>
              <div className="studio-preview__bottom">
                <span>
                  <Icon name="check" size={15} /> Updates as you type
                </span>
                <span>LIVE PREVIEW</span>
              </div>
            </div>
            <p className="studio-disclaimer">
              This tool creates a prompt, not a generated or nutrition-verified
              recipe. Connect a server-side AI provider to enable live
              generation.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
