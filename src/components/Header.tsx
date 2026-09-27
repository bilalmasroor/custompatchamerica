import Logo from "./Logo";
import Button from "./Button";
import { navLinks } from "@/data/homepage";

export default function Header() {
  return (
    <header className="relative z-2 flex h-[54px] items-center gap-[28px] bg-white px-[5.3%] shadow-[0_1px_8px_#071b3b12] max-[900px]:gap-[14px] max-[900px]:px-[3%] max-[650px]:h-[58px] max-[650px]:px-[17px]">
      <Logo className="max-[650px]:mr-auto" />
      <nav className="m-auto flex gap-[26px] text-[11px] font-bold max-[900px]:gap-[14px] max-[900px]:text-[10px] max-[650px]:hidden">
        {navLinks.map(({ label, href }) => (
          <a key={label} href={href} className="hover:text-brand-red">{label}</a>
        ))}
      </nav>
      <a href="#categories" aria-label="Search" className="-rotate-[25deg] text-[23px] font-bold max-[650px]:hidden">⌕</a>
      <Button className="h-[38px] max-[650px]:hidden">Get a Free Quote</Button>
      <button aria-label="Open menu" className="hidden border-0 bg-transparent text-[22px] text-navy max-[650px]:block">☰</button>
    </header>
  );
}
