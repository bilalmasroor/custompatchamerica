import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  sub?: string;
}

export default function SectionTitle({ children, sub }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="mb-[6px] text-[25px] tracking-[-.7px] max-[650px]:text-[24px]">{children}</h2>
      {sub && <p className="text-[12px] text-[#26446c]">{sub}</p>}
    </div>
  );
}
