interface LogoProps {
  light?: boolean;
  className?: string;
}

export default function Logo({ light = false, className = "" }: LogoProps) {
  return (
    <a
      href="#top"
      className={`flex items-center gap-[6px] whitespace-nowrap text-[12px] leading-[.96] font-black tracking-[-.3px] ${light ? "text-white" : ""} ${className}`}
    >
      <span className="text-[25px]">????</span>
      <span>
        CUSTOM
        <br />
        PATCH AMERICA
        <small className="mt-[3px] block text-[5px] tracking-[1px]">PATCHES THAT REPRESENT</small>
      </span>
    </a>
  );
}
