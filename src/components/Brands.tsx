import type { ReactNode } from "react";

interface BrandMark {
  name: string;
  className: string;
  mark: ReactNode;
}

const brandMarks: BrandMark[] = [
  { name: "Nike", className: "-skew-x-[15deg] text-[25px] italic max-[650px]:text-[21px]", mark: "NIKE" },
  { name: "The North Face", className: "text-[19px] max-[650px]:text-[16px]", mark: <>THE<br />NORTH<br />FACE</> },
  { name: "Harley-Davidson", className: "rounded-[45%] border-[3px] border-double border-[#09224b] px-[4px] py-[9px] text-[11px]", mark: "HARLEY-DAVIDSON" },
  { name: "Coca-Cola", className: "font-hand text-[22px] text-[#df1827]", mark: "Coca-Cola" },
  { name: "FedEx", className: "text-[26px] max-[650px]:text-[22px]", mark: <>Fed<span className="text-[#e92637]">Ex</span></> },
  { name: "Apple", className: "text-[31px]", mark: "●" },
  { name: "U.S. Air Force", className: "text-[28px]", mark: <>✦<small className="block text-[7px]">U.S. AIR FORCE</small></> },
  { name: "NASA", className: "rounded-[50%] border-2 border-[#09224b] p-[9px] text-[13px] italic", mark: "NASA" },
];

export default function Brands() {
  return (
    <section className="bg-white px-5 py-7 text-center max-[650px]:px-[17px] max-[650px]:py-[24px]">
      <div className="mx-auto max-w-[1280px]">
      <h2 className="mb-5 text-[21px] tracking-[-.4px] max-[650px]:text-[19px] max-[650px]:leading-[1.2]">Trusted by Leading Brands Across the USA</h2>
      <div className="flex min-h-[52px] items-center justify-between gap-8 text-[#06214b] max-[900px]:gap-5 max-[650px]:flex-wrap max-[650px]:justify-center max-[650px]:gap-x-[24px] max-[650px]:gap-y-[16px]">
        {brandMarks.map(({ name, className, mark }) => (
          <b key={name} className={`leading-[.82] font-black ${className}`}>{mark}</b>
        ))}
      </div>
      </div>
    </section>
  );
}
