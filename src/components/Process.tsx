import { steps } from "@/data/homepage";
import SectionTitle from "./SectionTitle";

export default function Process() {
  return (
    <section id="process" className="bg-[linear-gradient(#fff,#f5f9ff)] px-5 py-10 max-[650px]:px-[18px] max-[650px]:py-[25px]">
      <div className="mx-auto max-w-[1280px]">
      <SectionTitle sub="From idea to delivery — custom patches made easy.">Our Simple Process</SectionTitle>
      <ol className="mt-10 grid grid-cols-4 gap-8 max-[900px]:gap-4 max-[650px]:mt-[26px] max-[650px]:grid-cols-2 max-[650px]:gap-x-[14px] max-[650px]:gap-y-[23px] max-[390px]:grid-cols-1">
        {steps.map(({ icon, title, text }, i) => (
          <li key={title} className="flex min-h-[104px] items-start gap-[14px] max-[650px]:min-h-0 max-[650px]:gap-[10px]">
            <div className="grid size-[68px] flex-none place-items-center rounded-[50%] bg-white text-[31px] text-[#1768ef] shadow-[0_4px_14px_#bfd2eb66] max-[650px]:size-[52px] max-[650px]:text-[25px]">
              {icon}
            </div>
            <div>
              <b className="text-[12px] text-brand-red">0{i + 1}</b>
              <h3 className="my-[6px] text-[13px] max-[650px]:text-[11px]">{title}</h3>
              <p className="max-w-[220px] text-[11px] leading-[1.5] text-[#294362] max-[650px]:text-[9px]">{text}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="relative mt-5 flex h-[2px] justify-around bg-[#dce7f5] max-[650px]:hidden" aria-hidden="true">
        {steps.map(({ title }) => (
          <span key={title} className="size-[6px] -translate-y-[2px] rounded-[50%] bg-[#a9c5e9]" />
        ))}
      </div>
      </div>
    </section>
  );
}
