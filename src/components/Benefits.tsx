import { benefits } from "@/data/homepage";

export default function Benefits() {
  return (
    <section className="bg-[linear-gradient(90deg,#f6f9fe,#fff,#f6f9fe)] px-5 py-7 shadow-[0_7px_16px_#14294a0a] max-[650px]:py-4">
      <div className="mx-auto flex max-w-[1280px] justify-center max-[900px]:grid max-[900px]:grid-cols-3 max-[900px]:gap-y-3 max-[650px]:grid-cols-2 max-[650px]:gap-[10px] max-[390px]:grid-cols-1">
      {benefits.map(({ icon, title, text }) => (
        <div
          key={title}
          className="flex min-w-0 items-center gap-3 border-r border-[#e5edf8] px-4 last:border-0 max-[900px]:border-0 max-[900px]:px-[9px] max-[900px]:last:col-start-2 max-[650px]:p-[7px] max-[650px]:last:col-span-full max-[650px]:last:col-start-auto max-[650px]:last:justify-self-center max-[390px]:last:col-auto max-[390px]:last:justify-self-stretch"
        >
          <span className="grid size-[48px] flex-none place-items-center rounded-[50%] bg-white text-[28px] text-navy shadow-[0_4px_14px_#bad0ed60] max-[900px]:size-[39px] max-[900px]:text-[23px]">
            {icon}
          </span>
          <div>
            <b className="block text-[11px] max-[900px]:text-[10px]">{title}</b>
            <small className="mt-[4px] block text-[10px] text-[#45607f] max-[900px]:text-[9px]">{text}</small>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}
