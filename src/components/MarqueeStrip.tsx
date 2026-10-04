import { BadgeCheck, Coins, Presentation, Truck } from "lucide-react";
import styles from "./MarqueeStrip.module.css";

const items = [
  { label: "Low Minimum Order Qty", Icon: BadgeCheck },
  { label: "Competitive Prices", Icon: Coins },
  { label: "Free Shipping", Icon: Truck },
  { label: "Free Art Setup", Icon: Presentation },
] as const;

export default function MarqueeStrip() {
  return (
    <section
      aria-label="Service benefits"
      className={`${styles.viewport} overflow-hidden border-y border-[#dce7f2] bg-white shadow-[0_2px_10px_#061b3d0a]`}
    >
      <div className={`${styles.track} flex h-[clamp(82px,7vw,112px)] w-max items-center`}>
        {Array.from({ length: 4 }, (_, copy) => (
          <ul key={copy} aria-hidden={copy > 0} className="flex shrink-0 items-center">
            {items.map(({ label, Icon }) => (
              <li
                key={label}
                className="flex h-[clamp(48px,4vw,58px)] w-[clamp(215px,14vw,250px)] shrink-0 items-center gap-[clamp(12px,1vw,18px)] border-r border-[#cad8e8] px-[clamp(16px,1.3vw,24px)] text-navy"
              >
                <span className="grid size-[clamp(42px,3.4vw,52px)] shrink-0 place-items-center rounded-full bg-[#edf3fa]">
                  <Icon aria-hidden="true" className="size-[clamp(24px,1.8vw,30px)]" strokeWidth={2} />
                </span>
                <span className="text-[clamp(14px,1.05vw,18px)] leading-[1.25] font-semibold">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}