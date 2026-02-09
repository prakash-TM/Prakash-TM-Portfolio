import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getExperienceInYears = () => {
  const start: Date = new Date("2021-06-28");
  const today: Date = new Date();

  const diffInMs = today.getTime() - start.getTime();
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

  return Number(diffInYears.toFixed(1));
};
