import Button from "./Button";
import Stars from "./Stars";
import { heroPerks } from "@/data/homepage";

const actionClass = "h-[clamp(48px,3.2vw,56px)] px-[clamp(20px,1.8vw,30px)] text-[clamp(14px,.9vw,17px)] max-[390px]:px-[13px]";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[clamp(640px,43.75vw,840px)] items-center bg-[#041a38] bg-[url(/hero.png)] bg-cover bg-[position:center_10%] bg-no-repeat text-white before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(90deg,#031b40_0%,#052657ed_34%,#061a3a4d_60%,#0002_100%)] max-[1100px]:min-h-[640px] max-[900px]:min-h-[590px] max-[650px]:min-h-0 max-[650px]:bg-[position:62%_50%] max-[650px]:before:bg-[linear-gradient(90deg,#031b40f7_0%,#052657e8_55%,#061a3a80_100%)]">
      <div className="mx-auto w-full max-w-[1360px] px-[clamp(28px,5vw,96px)] py-[clamp(64px,7vw,110px)] max-[900px]:px-[5%] max-[650px]:max-w-[460px] max-[650px]:px-[22px] max-[650px]:py-[50px] max-[650px]:pb-[27px]">
        <div className="w-[44%] max-[900px]:w-[56%] max-[650px]:w-full">
          <span className="text-[clamp(13px,1vw,19px)] tracking-[.04em] text-[#18a8e4]">PREMIUM CUSTOM PATCHES</span>
          <h1 className="mt-[clamp(16px,1.5vw,28px)] mb-[clamp(14px,1.4vw,25px)] text-[length:clamp(56px,4.2vw,80px)] leading-[.98] tracking-[-.045em] text-[#f4f7ff] max-[900px]:text-[clamp(48px,6vw,66px)] max-[650px]:text-[55px] max-[390px]:text-[48px]">
            Your Idea.
            <br />
            <em className="text-brand-red not-italic">Our Stitch.</em>
          </h1>
          <p className="mb-[clamp(22px,2vw,36px)] max-w-[540px] text-[clamp(16px,1.05vw,20px)] leading-[1.5] text-[#d4e3f5] max-[650px]:max-w-[330px] max-[650px]:text-[14px]">
            High-quality custom patches for businesses, teams, events, and brands across the USA.
          </p>
          <ul className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-x-[clamp(16px,1.6vw,30px)] gap-y-[clamp(12px,1vw,20px)] text-[clamp(12px,.78vw,15px)] text-[#c9e3fa] max-[650px]:grid-cols-[repeat(2,max-content)] max-[650px]:gap-y-[10px] max-[390px]:gap-[9px] max-[390px]:text-[9px]">
            {heroPerks.map(({ icon, title }) => (
              <li key={title} className="first-letter:text-[#10c2f5]">{icon} &nbsp;{title}</li>
            ))}
          </ul>
          <div className="mt-[clamp(28px,2.4vw,44px)] flex gap-[clamp(12px,1vw,20px)] max-[650px]:mt-[22px]">
            <Button className={actionClass}>Get a Free Quote</Button>
            <Button outline className={actionClass}>See Our Work</Button>
          </div>
          <div className="mt-[clamp(26px,2.2vw,40px)] flex items-center gap-[clamp(12px,1vw,20px)] max-[650px]:mt-[24px]">
            <span className="mr-[5px] text-[clamp(24px,1.8vw,34px)] tracking-[-8px]" aria-hidden="true">👩🏻‍🦰👨🏻👩🏽👨🏼</span>
            <Stars />
            <small className="text-[clamp(11px,.7vw,14px)] leading-[1.45] text-[#e0eafa]">
              Trusted by <b>10,000+</b> customers
              <br />
              across the United States
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
