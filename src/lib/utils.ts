import { ClassValue, clsx } from 'clsx';  // 798 bytes (gzipped: 451 bytes)
import { twMerge } from 'tailwind-merge';  // 20.3k (gzipped: 6.3k)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
