import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getExperienceInYears = () => {
  const startYear = 2021;
  const startMonth = 6;

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;

  const diffInMonths =
    (currentYear - startYear) * 12 + (currentMonth - startMonth) + 2;
  const diffInYears = diffInMonths / 12;

  return Math.ceil(diffInYears * 10) / 10;
};
