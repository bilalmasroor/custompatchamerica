import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  /** Render a `type="button"` element instead of a link. */
  asButton?: boolean;
  outline?: boolean;
  icon?: string;
  /** Sizing/layout overrides; include a height since this replaces the default. */
  className?: string;
}

export default function Button({
  children,
  href = "#quote",
  asButton = false,
  outline = false,
  icon = "?",
  className = "h-[38px]",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-[14px] whitespace-nowrap rounded-[9px] px-[18px] text-[11px] font-bold text-white ${
    outline ? "border border-white bg-transparent" : "bg-brand-red shadow-[0_5px_12px_#d51d2a18]"
  } ${className}`;
  const content = (
    <>
      {children}
      <span className="text-[17px]">{icon}</span>
    </>
  );

  return asButton ? (
    <button type="button" className={classes}>{content}</button>
  ) : (
    <a className={classes} href={href}>{content}</a>
  );
}
