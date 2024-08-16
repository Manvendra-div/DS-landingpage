import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function fknpme(due: string) {
  const dueDate = new Date(due);
  const currentDate = new Date();
  const daysDeadline = 60;
  const days = Math.floor(
    (dueDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const opacity = days > 0 ? 1 : 1 - Math.abs(days / daysDeadline);
  return opacity;
}