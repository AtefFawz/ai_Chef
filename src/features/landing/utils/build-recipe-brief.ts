export type RecipeBriefInput = {
  meal: string;
  preference: string;
  ingredients: string;
  time: string;
  servings: string;
};

/** Build a consistent prompt from the recipe studio's current form state. */
export function buildRecipeBrief({
  meal,
  preference,
  ingredients,
  time,
  servings,
}: RecipeBriefInput): string {
  const ingredientLine = ingredients.trim() || "ingredients I have available";
  const servingCount = Number(servings);
  const peopleLabel = servingCount === 1 ? "person" : "people";

  return [
    `Create an original ${meal.toLowerCase()} recipe for ${servings} ${peopleLabel}.`,
    `Food preference: ${preference}.`,
    `Prioritise these ingredients: ${ingredientLine}.`,
    `Keep the active preparation and cooking time around ${time}.`,
    "Give me a clear recipe title, a concise ingredient list with quantities, step-by-step instructions, and practical substitutions.",
    "Keep the instructions easy to follow for a home cook. Mention common allergens where relevant, and do not make unsupported nutrition or health claims.",
  ].join("\n");
}
