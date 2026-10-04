"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { CircleCheck, FileUp, FileText, Spool, Truck } from "lucide-react";

type Step = {
  title: string;
  text: string;
  icon: ReactNode;
};

const iconClass = "size-[46%] text-navy";
const stroke = 1.6;

const steps: Step[] = [
  {
    title: "Upload Your Design",
    text: "Submit your logo, artwork, or idea through our easy form. Choose the size, colors, backing, and patch type.",
    icon: (
      <span className="relative grid size-full place-items-center">
        <FileUp className={iconClass} strokeWidth={stroke} aria-hidden="true" />
      </span>
    ),
  },
  {
    title: "Review & Approve",
    text: "Receive a digital proof of your custom patch with unlimited revisions until you are satisfied.",
    icon: (
      <span className="relative grid size-full place-items-center">
        <FileText className={iconClass} strokeWidth={stroke} aria-hidden="true" />
        <CircleCheck
          className="absolute right-[24%] bottom-[24%] size-[24%] rounded-full bg-[#eef4fc] text-[#EF1B2D]"
          strokeWidth={2.2}
          aria-hidden="true"
        />
      </span>
    ),
  },
  {
    title: "Production Begins",
    text: "Once approved, we start manufacturing your custom patches with high quality materials.",
    icon: (
      <span className="relative grid size-full place-items-center">
        <Spool className={iconClass} strokeWidth={stroke} aria-hidden="true" />
        <span className="absolute bottom-[25%] left-1/2 h-[3px] w-[22%] -translate-x-1/2 rounded-full bg-[#EF1B2D]" aria-hidden="true" />
      </span>
    ),
  },
  {
    title: "Fast Delivery",
    text: "Delivered in 10–12 days after the order is placed. Free shipping on every order, USA and worldwide.",
    icon: (
      <span className="relative grid size-full place-items-center">
        <Truck className={`${iconClass} translate-x-[8%]`} strokeWidth={stroke} aria-hidden="true" />
        <span className="absolute top-[38%] left-[17%] flex flex-col gap-[0.35em] text-[clamp(7px,0.5vw,9px)]" aria-hidden="true">
          <span className="h-[2px] w-[1.6em] rounded-full bg-[#EF1B2D]" />
          <span className="h-[2px] w-[1.1em] rounded-full bg-[#EF1B2D]" />
          <span className="h-[2px] w-[1.4em] rounded-full bg-[#EF1B2D]" />
        </span>
      </span>
    ),
  },
];

// Timeline (ms)
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const HEADING_DURATION = 700;
const LINE_START = 250;
const LINE_DURATION = 1100;
const STEP_START = 350;
const STEP_STAGGER = 160;
const BADGE_OFFSET = 220;
const TEXT_OFFSET = 300;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

function useRevealOnce<T extends Element>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function Process() {
  const { ref, visible } = useRevealOnce<HTMLElement>();
  const reduced = usePrefersReducedMotion();
  const shown = visible || reduced;

  const anim = (delay: number, duration: number, hidden: string, transformOrigin?: string): CSSProperties => {
    if (reduced) return {};
    return {
      opacity: shown ? 1 : 0,
      transform: shown ? "none" : hidden,
      transformOrigin,
      transition: `opacity ${duration}ms ${EASE} ${delay}ms, transform ${duration}ms ${EASE} ${delay}ms`,
      willChange: shown ? undefined : "opacity, transform",
    };
  };

  const lineStyle = (axis: "x" | "y"): CSSProperties =>
    anim(LINE_START, LINE_DURATION, axis === "x" ? "scaleX(0)" : "scaleY(0)", axis === "x" ? "left center" : "center top");

  const dotted = (dir: "right" | "bottom") =>
    `repeating-linear-gradient(to ${dir}, #b9cde6 0 6px, transparent 6px 12px)`;

  return (
    <section
      ref={ref}
      id="process"
      aria-labelledby="process-heading"
      className="bg-[#f6f9fe] px-5 py-[clamp(64px,6vw,96px)] font-sans max-[767px]:px-4 max-[767px]:py-14"
    >
      <div className="mx-auto max-w-[1400px]">
        <header className="text-center" style={anim(0, HEADING_DURATION, "translateY(18px)")}>
          <div className="flex items-center justify-center gap-4 text-[clamp(12px,0.9vw,14px)] font-medium tracking-[.2em] text-[#4c6a92]">
            <span className="h-px w-8 bg-[#c3d3e6]" aria-hidden="true" />
            <span>HOW IT WORKS</span>
            <span className="h-px w-8 bg-[#c3d3e6]" aria-hidden="true" />
          </div>
          <h2
            id="process-heading"
            className="mt-3 text-[clamp(32px,3.2vw,50px)] leading-[1.1] font-bold tracking-[-.03em] text-navy"
          >
            How to Order Your Custom Patch
          </h2>
          <p className="mt-3 text-[clamp(15px,1.25vw,20px)] leading-[1.5] text-[#4c6a92]">
            Create the Best American Custom Patch in Minutes
          </p>
        </header>

        <div className="relative mt-[clamp(40px,3.5vw,56px)] [--circle:clamp(72px,7.6vw,132px)] max-[639px]:[--circle:72px]">
          {/* Horizontal connector (desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[calc(var(--circle)/2)] right-[12.5%] left-[12.5%] h-[2px] -translate-y-1/2 max-[1023px]:hidden"
          >
            <div className="h-full w-full" style={{ background: dotted("right"), ...lineStyle("x") }} />
          </div>
          {/* Vertical connector (mobile) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[calc(var(--circle)/2)] bottom-[calc(var(--circle)*1.2)] left-[calc(var(--circle)/2)] hidden w-[2px] -translate-x-1/2 max-[639px]:block"
          >
            <div className="h-full w-full" style={{ background: dotted("bottom"), ...lineStyle("y") }} />
          </div>

          <ol className="relative grid grid-cols-4 gap-x-[clamp(16px,2vw,40px)] max-[1023px]:grid-cols-2 max-[1023px]:gap-y-12 max-[639px]:grid-cols-1 max-[639px]:gap-y-9">
            {steps.map(({ title, text, icon }, i) => {
              const base = STEP_START + i * STEP_STAGGER;
              return (
                <li
                  key={title}
                  className="flex flex-col items-center text-center max-[639px]:flex-row max-[639px]:items-start max-[639px]:gap-5 max-[639px]:text-left"
                >
                  <div className="relative flex-none">
                    <div
                      className="size-(--circle) rounded-full bg-[#eaf1fb]"
                      style={anim(base, 650, "scale(0.85)")}
                    >
                      {icon}
                    </div>
                    <span className="absolute left-1/2 size-[clamp(30px,2.2vw,38px)] -translate-x-1/2 top-[calc(var(--circle)-clamp(30px,2.2vw,38px)/2+clamp(6px,0.8vw,14px))] max-[639px]:top-[calc(var(--circle)-15px)]">
                      <span
                        className="grid size-full place-items-center rounded-full bg-[#EF1B2D] text-[clamp(12px,0.85vw,14px)] font-semibold text-white shadow-[0_4px_10px_#ef1b2d40]"
                        style={anim(base + BADGE_OFFSET, 450, "scale(0.4)")}
                      >
                        <span className="sr-only">Step </span>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                  </div>
                  <div
                    className="mt-[clamp(32px,3vw,48px)] max-[639px]:mt-1"
                    style={anim(base + TEXT_OFFSET, 600, "translateY(14px)")}
                  >
                    <h3 className="text-[clamp(18px,1.45vw,24px)] leading-[1.25] font-bold text-navy">{title}</h3>
                    <p className="mx-auto mt-2 max-w-[330px] text-[clamp(14px,1.05vw,17px)] leading-[1.55] text-[#4c6a92] max-[639px]:mx-0">
                      {text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
