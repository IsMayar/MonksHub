import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost" | "dark";
type ButtonSize = "sm" | "default" | "lg" | "icon";

const variants: Record<ButtonVariant, string> = {
  default:
    "bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 focus-visible:ring-emerald-600",
  secondary:
    "bg-white text-slate-950 shadow-sm hover:bg-slate-100 focus-visible:ring-slate-500",
  outline:
    "border border-slate-300 bg-white text-slate-950 hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-slate-500",
  ghost: "text-slate-700 hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-slate-500",
  dark: "bg-slate-950 text-white shadow-sm hover:bg-slate-800 focus-visible:ring-slate-950",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  default: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10 p-0",
};

type ButtonStyleOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export function buttonStyles({
  variant = "default",
  size = "default",
  className,
}: ButtonStyleOptions = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyleOptions;

export function Button({
  className,
  variant = "default",
  size = "default",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}
