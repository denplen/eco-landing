"use client";

import { useEffect, useState } from "react";

type CopyEmailLinkProps = {
  email: string;
  className?: string;
  compact?: boolean;
  truncate?: boolean;
  nowrap?: boolean;
};

export function CopyEmailLink({
  email,
  className = "",
  compact = false,
  truncate = true,
  nowrap = false,
}: CopyEmailLinkProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timer = window.setTimeout(() => {
      setCopied(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <span
      className={`group relative inline-flex min-w-0 items-center gap-2 ${className}`}
    >
      <a
        href={`mailto:${email}`}
        className={`transition-colors duration-200 hover:text-[#F4A11A] ${
          truncate
            ? "min-w-0 truncate"
            : nowrap
              ? "shrink-0 whitespace-nowrap"
              : "min-w-0"
        }`}
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copyEmail}
        aria-label="Скопировать email"
        title={copied ? "Скопировано" : "Скопировать email"}
        className="inline-flex size-7 shrink-0 items-center justify-center rounded-sm border border-current/15 text-current opacity-100 transition-all duration-200 hover:-translate-y-px hover:border-[#F4A11A] hover:text-[#F4A11A] hover:shadow-sm lg:opacity-70 lg:group-hover:opacity-100"
      >
        <svg
          aria-hidden="true"
          className="size-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 8.5V6.75A2.75 2.75 0 0 1 10.75 4h6.5A2.75 2.75 0 0 1 20 6.75v6.5A2.75 2.75 0 0 1 17.25 16H15.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 10.75A2.75 2.75 0 0 1 6.75 8h6.5A2.75 2.75 0 0 1 16 10.75v6.5A2.75 2.75 0 0 1 13.25 20h-6.5A2.75 2.75 0 0 1 4 17.25v-6.5Z"
          />
        </svg>
      </button>
      <span
        aria-live="polite"
        className={`pointer-events-none absolute left-0 top-full mt-1 whitespace-nowrap text-[11px] font-medium text-[#F4A11A] transition-opacity duration-150 ${
          copied && !compact ? "opacity-100" : "opacity-0"
        }`}
      >
        Скопировано
      </span>
    </span>
  );
}
