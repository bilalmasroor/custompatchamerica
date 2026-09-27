import { industries } from "@/data/homepage";

export default function Industries() {
  return (
    <section id="industries" className="bg-[#f5f8fd] px-5 py-10 max-[650px]:px-0 max-[650px]:py-0">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 items-center gap-8 max-[900px]:gap-5 max-[650px]:grid-cols-1 max-[650px]:gap-0">
      <div
        aria-hidden="true"
        className="aspect-[1.25/1] w-full rounded-lg bg-[#122948] bg-[url(/src/assets/landing-reference.png)] bg-cover bg-[position:70%_51%] bg-no-repeat max-[650px]:aspect-[1.6/1] max-[650px]:rounded-none max-[650px]:bg-[position:center_54%]"
      />
      <div className="py-5">
        <h2 className="mb-2 text-[29px] tracking-[-.8px] max-[650px]:text-[26px]">Built for Every Industry</h2>
        <p className="mb-5 max-w-[480px] text-[13px] leading-[1.5] text-[#284361]">
          From corporate uniforms to outdoor brands, we create patches that make a statement.
        </p>
        <ul className="grid grid-cols-3 gap-3 max-[900px]:gap-2 max-[650px]:grid-cols-2">
          {industries.map(({ icon, title }) => (
            <li
              key={title}
              className="flex min-h-[64px] items-center justify-center gap-2 rounded-[8px] border border-[#e9eff7] bg-white p-2 text-center text-[10px] font-bold shadow-[0_3px_9px_#2139540c] transition-all duration-200 ease-[ease] hover:-translate-y-[2px] hover:shadow-[0_8px_18px_#223b5c18] max-[900px]:text-[8px] max-[650px]:min-h-[54px] max-[650px]:text-[9px]"
            >
              <span className="text-[22px] text-[#1768ef]">{icon}</span>
              {title}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
}
