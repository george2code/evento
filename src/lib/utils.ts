import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// combine clsx and twMerge in one function
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}