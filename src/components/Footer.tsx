import Logo from "./Logo";
import { footerGroups } from "@/data/homepage";

const headingClass = "mt-[3px] mb-[11px] text-[12px]";
const blurbClass = "max-w-[205px] text-[10px] leading-[1.5] text-[#bdcce0]";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[radial-gradient(ellipse_at_30%_110%,#0c3261,#041832_70%)] px-5 pt-8 text-white max-[650px]:px-[18px] max-[650px]:pt-[25px]">
      <div className="mx-auto max-w-[1280px]">
      <div className="grid grid-cols-[1.3fr_.9fr_.8fr_1fr_1.35fr] gap-7 pb-7 max-[900px]:grid-cols-[1.3fr_.8fr_.7fr_.9fr_1.4fr] max-[900px]:gap-[15px] max-[650px]:grid-cols-2 max-[650px]:gap-x-[14px] max-[650px]:gap-y-[20px]">
        <div className="max-[650px]:col-span-full">
          <Logo light />
          <p className={`${blurbClass} mt-3 max-[650px]:max-w-[300px]`}>
            Custom patches for businesses, teams, and creators across the United States. Quality patches. Bigger stories.
          </p>
          <div className="mt-[18px] text-[15px] text-[#d9e5f4]">◎　f　▶　◉　in</div>
        </div>
        {footerGroups.map(({ heading, links }) => (
          <nav key={heading} aria-label={heading}>
            <h3 className={headingClass}>{heading}</h3>
            {links.map(link => (
              <a key={link} href="#categories" className="my-[8px] block text-[10px] text-[#c3d0e0] hover:text-brand-red">{link}</a>
            ))}
          </nav>
        ))}
        <div className="max-[650px]:col-span-full">
          <h3 className={headingClass}>Stay in the Loop</h3>
          <p className={blurbClass}>Get updates, offers, and patch inspiration.</p>
          <div className="flex h-[35px] items-center rounded-[19px] bg-white p-[3px]">
            <input placeholder="Enter your email" aria-label="Email address" className="min-w-0 flex-1 border-0 px-[10px] text-[10px] outline-0" />
            <button aria-label="Subscribe" className="size-[29px] rounded-[50%] border-0 bg-brand-red text-[18px] text-white">→</button>
          </div>
        </div>
      </div>
      <div className="flex min-h-[50px] items-center justify-between border-t border-[#ffffff25] text-[10px] text-[#c0cee0] max-[650px]:min-h-[60px] max-[650px]:flex-wrap max-[650px]:gap-[10px] max-[650px]:py-[12px] max-[650px]:text-[8px]">
        <span>© 2024 Custom Patch America. All rights reserved.</span>
        <div className="flex gap-[22px] max-[650px]:gap-[12px]">
          <a href="#footer">Privacy Policy</a>
          <a href="#footer">Terms of Service</a>
        </div>
        <span className="max-[650px]:ml-auto">🇺🇸　Proudly Serving the USA</span>
      </div>
      </div>
    </footer>
  );
}
