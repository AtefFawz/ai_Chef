import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`section-heading section-heading--${align} section-heading--${theme}`}
    >
      <span className="eyebrow">
        <span className="eyebrow__dot" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </Reveal>
  );
}
