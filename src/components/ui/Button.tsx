import Link from "next/link";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: BaseProps & { href: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
        variant === "primary"
          ? "bg-brand-700 text-white hover:bg-brand-800 focus-visible:outline-brand-700"
          : variant === "secondary"
            ? "bg-white text-brand-800 ring-1 ring-inset ring-brand-200 hover:bg-brand-50"
            : "text-ink-900 hover:bg-mist-100"
      } ${size === "lg" ? "px-6 py-3.5 text-base" : "px-5 py-2.5 text-sm"} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
        variant === "primary"
          ? "bg-brand-700 text-white hover:bg-brand-800 focus-visible:outline-brand-700"
          : variant === "secondary"
            ? "bg-white text-brand-800 ring-1 ring-inset ring-brand-200 hover:bg-brand-50"
            : "text-ink-900 hover:bg-mist-100"
      } ${size === "lg" ? "px-6 py-3.5 text-base" : "px-5 py-2.5 text-sm"} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
