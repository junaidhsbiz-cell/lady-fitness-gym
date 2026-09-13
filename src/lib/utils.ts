import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return `৳ ${amount.toLocaleString('en-IN')}`;
}

export function formatPriceBn(amount: number): string {
  const enToBnDigits: Record<string, string> = {
    '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
    '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯', ',': ','
  };
  const str = amount.toLocaleString('en-IN');
  return `৳ ${str.split('').map(char => enToBnDigits[char] || char).join('')}`;
}
