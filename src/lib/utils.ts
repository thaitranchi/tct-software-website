// lib/utils.ts

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names conditionally.
 * Uses `clsx` for conditional logic and `twMerge` to handle Tailwind conflicts.
 *
 * @param inputs - ClassValue arguments (string | undefined | boolean)
 * @returns Merged string of class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
