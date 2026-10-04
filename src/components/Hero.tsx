"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { name: "Embroidered Patches", image: "/images/categories/EMBROIDERY.png" },
  { name: "PVC Patches", image: "/images/categories/PVC.png" },
  { name: "Woven Patches", image: "/images/categories/WOVEN.png" },
  { name: "Leather Patches", image: "/images/categories/LEATHER.png" },
  { name: "Chenille Patches", image: "/images/categories/CHENILLE.png" },
] as const;
const perks = [
  { label: "Free Shipping", first: "Free", second: "Shipping", icon: "shipping" },
  { label: "12-Hour Mockup", first: "12-Hour", second: "Mockup", icon: "mockup" },
  { label: "7–12 Day Turnaround", first: "7–12 Day", second: "Turnaround", icon: "time" },
] as const;

function PerkIcon({ name }: { name: (typeof perks)[number]["icon"] }) {
  const props = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className: "h-full w-full", "aria-hidden": true as const };
  if (name === "shipping") return <svg viewBox="0 0 28 24" {...props}><path d="M3 7.5h11.5V17H3zM14.5 11h4.5l3.5 3v3h-8M1 10h2.2M1 12.5h2.2M1 15h2.2" /><circle cx="7.5" cy="18.5" r="1.5" /><circle cx="19" cy="18.5" r="1.5" /></svg>;
  if (name === "mockup") return <svg viewBox="0 0 24 24" {...props}><path d="M9 4.2 12 6.2l3-2M8.2 5.4 4.5 8.2 6.8 10.4V19.2a1 1 0 0 0 1 1h8.4a1 1 0 0 0 1-1v-8.8l2.3-2.2L15.8 5.4M9.6 13.8h4.8" /></svg>;
  return <svg viewBox="0 0 24 24" {...props}><circle cx="12" cy="12" r="8" /><path d="M12 7.5v5l3.2 1.8" /></svg>;
}

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 4500);
    return () => window.clearInterval(timer);
  }, [timerKey]);
  function selectSlide(index: number) {
    setActiveSlide(index);
    setTimerKey((key) => key + 1);
  }

  return (
    <section className="relative overflow-x-clip bg-white px-3 pt-[110px] pb-10 text-navy sm:px-4 lg:px-5 max-[767px]:pt-8 max-[767px]:pb-6" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-[1600px]">
        <div className="relative isolate min-h-[670px] rounded-[34px] shadow-[0_20px_60px_#061b3d13] max-[1199px]:min-h-[640px] max-[767px]:flex max-[767px]:min-h-0 max-[767px]:flex-col max-[767px]:rounded-[24px]">
          <div className="absolute inset-0 overflow-hidden rounded-[34px] bg-gradient-to-r from-[#103968] via-[#28639a] to-[#79a9d1] max-[767px]:rounded-[24px]" aria-hidden="true" />
          <div className="relative z-20 flex h-[670px] w-[42%] flex-col justify-center pr-0 pl-[clamp(38px,4.6vw,78px)] max-[1199px]:h-[640px] max-[1199px]:w-[49%] max-[1199px]:pl-[38px] max-[767px]:h-auto max-[767px]:w-full max-[767px]:px-6 max-[767px]:pt-12 max-[767px]:pb-9 max-[390px]:px-5">
            <h1 id="hero-heading" className="max-w-[680px] text-[clamp(42px,3.5vw,54px)] leading-[1.12] font-extrabold tracking-[-.045em] text-white max-[1100px]:text-[clamp(39px,4vw,46px)] max-[767px]:text-[clamp(37px,8vw,52px)]">
              Custom Patches<br />in the USA Made<br />Exactly Your Way
            </h1>
            <p className="mt-6 max-w-[520px] text-[clamp(15px,1.1vw,18px)] leading-[1.65] text-white/90 max-[767px]:mt-5 max-[767px]:text-[15px]">
              Premium custom patches for brands, teams, uniforms, events, and businesses across the United States. We focus on every detail, from material quality to color accuracy, with reliable nationwide delivery.
            </p>
            <a href="#quote" className="mt-8 inline-flex min-h-14 w-fit items-center justify-center rounded-[10px] bg-brand-red px-8 text-[16px] font-bold text-white shadow-[0_10px_24px_#e51c2a35] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red max-[767px]:mt-7">Get a Free Mockup</a>
          </div>
          <div className="absolute bottom-0 left-[42%] z-10 h-[112%] w-auto max-[1199px]:left-[47%] max-[1199px]:h-[105%] max-[767px]:relative max-[767px]:bottom-auto max-[767px]:left-auto max-[767px]:h-[400px] max-[767px]:w-full max-[767px]:overflow-hidden max-[480px]:h-[360px]">
            <Image src="/hero.png" alt="Woman wearing a custom patch on her jacket" width={1024} height={1536} priority sizes="(max-width: 767px) 320px, 540px" className="h-full w-auto max-w-none object-contain max-[767px]:absolute max-[767px]:bottom-0 max-[767px]:left-1/2 max-[767px]:h-full max-[767px]:-translate-x-1/2" />
          </div>
          <ul className="absolute top-[105px] right-[clamp(8px,1vw,24px)] z-20 flex w-[clamp(215px,18.5vw,340px)] items-stretch max-[1199px]:top-auto max-[1199px]:right-auto max-[1199px]:bottom-[38px] max-[1199px]:left-[38px] max-[1199px]:w-[clamp(240px,30vw,330px)] max-[767px]:relative max-[767px]:bottom-auto max-[767px]:left-auto max-[767px]:w-full max-[767px]:px-6 max-[767px]:py-7 max-[390px]:px-4" aria-label="Benefits">
            {perks.map((perk) => <li key={perk.label} className="flex min-w-0 flex-1 flex-col items-center gap-[clamp(5px,.65vw,11px)] border-r border-white/60 px-[clamp(2px,.35vw,6px)] text-center text-[clamp(12px,.95vw,18px)] leading-[1.2] font-semibold text-white last:border-r-0">
              <span className="flex size-[clamp(24px,2vw,36px)] shrink-0 items-center justify-center text-white"><PerkIcon name={perk.icon} /></span>
              <span>{perk.first}<br />{perk.second}</span>
            </li>)}
          </ul>
          <div className="absolute right-[clamp(32px,4vw,68px)] bottom-[30px] z-30 w-[clamp(205px,19vw,275px)] rounded-[20px] border border-[#e1eaf5] bg-white p-4 text-center shadow-[0_16px_45px_#061b3d35] max-[1100px]:right-6 max-[1100px]:w-[205px] max-[767px]:relative max-[767px]:right-auto max-[767px]:bottom-auto max-[767px]:mx-auto max-[767px]:mb-8 max-[767px]:w-[min(280px,calc(100%-48px))]" aria-label="Patch styles">
            <div className="relative aspect-[1.25/1] overflow-hidden rounded-[12px] bg-[#f2f6fc]">
              {slides.map((slide, index) => <Image key={slide.name} src={slide.image} alt={index === activeSlide ? slide.name : ""} aria-hidden={index !== activeSlide} fill sizes="(max-width: 767px) 248px, 250px" className={`object-contain p-2 transition-all duration-500 motion-reduce:transition-none ${index === activeSlide ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"}`} />)}
            </div>
            <strong className="mt-3 block text-[15px] font-bold text-navy" aria-live="polite">{slides[activeSlide].name}</strong>
            <div className="mt-3 flex justify-center gap-2" role="group" aria-label="Choose a patch style">
              {slides.map((slide, index) => <button key={slide.name} type="button" onClick={() => selectSlide(index)} aria-label={slide.name} aria-pressed={index === activeSlide} className={`size-2.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${index === activeSlide ? "bg-brand-red" : "bg-[#b8c9df] hover:bg-[#1765ad]"}`} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

