"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type CtaButtonVariant = "primary" | "secondary" | "ghost";

type CtaButtonProps = {
  children: ReactNode;
  variant?: CtaButtonVariant;
  showArrow?: boolean;
  className?: string;
} & Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "type" | "disabled" | "aria-label"
>;

const variantClassNames: Record<CtaButtonVariant, string> = {
  primary:
    "bg-[#F4A11A] text-[#0E2748] shadow-[0_8px_18px_rgba(244,161,26,0.22)] hover:-translate-y-px hover:bg-[#e99412] hover:shadow-[0_10px_22px_rgba(244,161,26,0.28)]",
  secondary:
    "border-2 border-[#0E2748]/45 bg-white text-[#0E2748] hover:border-[#F4A11A] hover:bg-[#F4A11A]/8",
  ghost:
    "bg-transparent text-[#0E2748]/70 hover:text-[#F4A11A] hover:underline hover:underline-offset-4",
};

export function CtaButton({
  children,
  variant = "primary",
  showArrow = variant === "primary",
  className = "",
  type = "button",
  ...buttonProps
}: CtaButtonProps) {
  return (
    <button
      type={type}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-6 py-3 text-base font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A11A] disabled:cursor-not-allowed disabled:opacity-50 ${variantClassNames[variant]} ${className}`}
      {...buttonProps}
    >
      {children}
      {showArrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1 group-disabled:translate-x-0"
        >
          →
        </span>
      )}
    </button>
  );
}
