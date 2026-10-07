import Image from "next/image";
import { ArrowRight, Box, Check, ChevronDown, FileText, Layers, Mail, ShieldCheck, UserRound } from "lucide-react";
import { patchTypes, quantities } from "@/data/homepage";

const field = "w-full rounded-[9px] border border-[#d6e2ef] bg-white text-[14px] text-[#536b8b] outline-none placeholder:text-[#8192a9] focus:border-[#829fc8] focus:ring-2 focus:ring-[#dceafb]";
const perks = [
  ["Free Digital Mockup", "See your design before production."],
  ["No Minimum Order", "Order the quantity that works for you."],
  ["Fast Turnaround", "Get your patches quickly without delays."],
  ["U.S. Based Support", "Clear communication and real support."],
];

function SelectField({ label, options, icon: Icon }: { label: string; options: string[]; icon: typeof Layers }) {
  return <div className="relative">
    <Icon aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-[#7089aa]" />
    <select defaultValue="" aria-label={label} className={`${field} h-[52px] appearance-none pl-11 pr-9`}>
      <option value="" disabled>{label}</option>
      {options.map(option => <option key={option}>{option}</option>)}
    </select>
    <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 size-[17px] -translate-y-1/2 text-[#536b8b]" />
  </div>;
}

export default function QuoteSection() {
  return <section id="quote" className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_48%_48%,#dceafa_0%,#f5f9fe_45%,#fff_84%)] px-5 py-[clamp(70px,7vw,105px)] max-[700px]:py-16">
    <Image src="/images/quote/patch-stack.png" alt="" aria-hidden="true" width={1224} height={1140} sizes="(max-width: 1024px) 220px, 380px" className="pointer-events-none absolute bottom-[-45px] left-[-95px] z-0 w-[clamp(230px,25vw,390px)] object-contain max-[1100px]:left-[-130px] max-[700px]:hidden" />
    <Image src="/images/quote/denim-jacket.png" alt="" aria-hidden="true" width={1336} height={1177} sizes="(max-width: 1024px) 240px, 430px" className="pointer-events-none absolute bottom-[-110px] right-[-155px] z-0 w-[clamp(260px,30vw,490px)] object-contain max-[1100px]:right-[-195px] max-[700px]:hidden" />
    <div className="relative z-10 mx-auto grid w-full max-w-[1155px] grid-cols-[minmax(0,45fr)_minmax(0,55fr)] items-center gap-[clamp(28px,3vw,48px)] max-[900px]:grid-cols-[minmax(0,43fr)_minmax(0,57fr)] max-[700px]:grid-cols-1 max-[700px]:gap-10">
      <div className="max-w-[530px]">
        <p className="mb-5 text-[15px] font-bold tracking-[.15em] text-[#ed1e2b] max-[700px]:text-[13px]">— START YOUR PATCH</p>
        <h2 className="text-[clamp(38px,3.9vw,56px)] font-extrabold leading-[1.08] tracking-[-.045em] text-[#071c3d] max-[900px]:text-[clamp(32px,3.4vw,45px)] max-[700px]:text-[clamp(36px,8vw,48px)]">Let&apos;s Bring Your Patch Idea to Life.</h2>
        <p className="mt-5 max-w-[520px] text-[clamp(15px,1.25vw,18px)] leading-[1.45] text-[#587092]">Tell us what you have in mind and we&apos;ll help turn your idea into a custom patch made for your brand, team, event, or organization.</p>
        <ul className="mt-7 grid grid-cols-2 gap-x-5 gap-y-6 max-[900px]:gap-x-3 max-[420px]:grid-cols-1">
          {perks.map(([title, description]) => <li key={title} className="flex items-start gap-4 max-[900px]:gap-2.5">
            <span className="grid size-[58px] shrink-0 place-items-center rounded-full bg-[#e4f0fd] max-[900px]:size-[44px]"><span className="grid size-6 place-items-center rounded-full bg-[#06234b] text-white"><Check aria-hidden="true" className="size-4" strokeWidth={2.5} /></span></span>
            <span className="pt-1"><strong className="block text-[15px] font-bold leading-tight text-[#071c3d] max-[900px]:text-[13px]">{title}</strong><span className="mt-2 block text-[14px] leading-[1.4] text-[#587092] max-[900px]:text-[12px]">{description}</span></span>
          </li>)}
        </ul>
        <div className="mt-7 flex items-center justify-center gap-4 border-t border-[#d8e5f3] pt-5 text-[14px] text-[#5e7597] max-[700px]:justify-start"><ShieldCheck aria-hidden="true" className="size-6 shrink-0" /><span>No commitment. No setup fees.</span></div>
      </div>
      <form className="relative z-10 w-full rounded-[24px] bg-white px-[clamp(24px,2.6vw,40px)] py-[clamp(30px,3vw,44px)] shadow-[0_20px_55px_#244a7820]">
        <p className="text-[15px] font-bold tracking-[.12em] text-[#ed1e2b]">FREE QUOTE</p>
        <h3 className="mt-2 text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.15] tracking-[-.035em] text-[#071c3d]">Tell Us About Your Patch</h3>
        <p className="mt-2 text-[16px] text-[#587092]">Share a few details and we&apos;ll take it from there.</p>
        <div className="mt-5 grid grid-cols-2 gap-4 max-[900px]:gap-2.5 max-[700px]:grid-cols-1">
          <div className="relative"><UserRound aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-[#7089aa]" /><input name="name" autoComplete="name" placeholder="Full Name" aria-label="Full Name" className={`${field} h-[52px] pl-11 pr-4`} /></div>
          <div className="relative"><Mail aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-[#7089aa]" /><input name="email" type="email" autoComplete="email" placeholder="Email Address" aria-label="Email Address" className={`${field} h-[52px] pl-11 pr-4`} /></div>
          <SelectField label="Patch Type" options={patchTypes} icon={Layers} />
          <SelectField label="Quantity" options={quantities} icon={Box} />
        </div>
        <div className="relative mt-4"><FileText aria-hidden="true" className="pointer-events-none absolute left-4 top-[17px] size-[18px] text-[#7089aa]" /><textarea name="design" placeholder="Tell us about your design (optional)" aria-label="Design details" className={`${field} min-h-[94px] resize-y py-[14px] pl-11 pr-4`} /></div>
        <button type="button" className="mt-4 flex h-[56px] w-full cursor-pointer items-center justify-center gap-5 rounded-[10px] bg-[#ed1e2b] px-4 text-[16px] font-bold text-white shadow-[0_10px_20px_#ed1e2b21] hover:bg-[#d91825] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d91825]">Get My Free Quote <ArrowRight aria-hidden="true" className="size-6" /></button>
        <p className="mt-4 text-center text-[13px] text-[#7187a5]">Free mockup&nbsp; • &nbsp;No obligation&nbsp; • &nbsp;Fast response</p>
      </form>
    </div>
  </section>;
}
