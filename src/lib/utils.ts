import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Birleştirir ve çakışan Tailwind sınıflarını çözümler.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
