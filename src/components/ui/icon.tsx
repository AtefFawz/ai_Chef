import type { ReactNode, SVGProps } from "react";

type IconName =
  | "arrow-up-right"
  | "arrow-right"
  | "arrow-left"
  | "check"
  | "chevron-down"
  | "clock"
  | "close"
  | "leaf"
  | "menu"
  | "sparkles"
  | "copy"
  | "chef-hat"
  | "utensils"
  | "plus";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

const paths: Record<IconName, ReactNode> = {
  "arrow-up-right": <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
  "arrow-right": <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  "arrow-left": <><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  close: <><path d="m18 6-12 12" /><path d="m6 6 12 12" /></>,
  leaf: <><path d="M20 4c-7 0-13 2-15 8-1 4 2 7 6 7 6-1 9-7 9-15Z" /><path d="M4 21c3-5 7-8 12-11" /></>,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  sparkles: <><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></>,
  copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>,
  "chef-hat": <><path d="M6 14a4 4 0 0 1-.4-8A5.4 5.4 0 0 1 17.8 6 4 4 0 0 1 18 14v6H6v-6Z" /><path d="M6 14h12" /></>,
  utensils: <><path d="M3 3v7a3 3 0 0 0 6 0V3" /><path d="M6 3v18" /><path d="M18 3v18" /><path d="M18 3c-3 3-3 7 0 9" /></>,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
};

export function Icon({ name, size = 20, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
