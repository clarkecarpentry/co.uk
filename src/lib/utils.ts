import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Truncate text to a specified number of words with ellipsis
 */
export function truncateWords(text: string, wordCount: number): string {
  const words = text.split(/\s+/);
  if (words.length <= wordCount) {
    return text;
  }
  return words.slice(0, wordCount).join(" ") + "…";
}
