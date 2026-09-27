export default function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`tracking-[1px] text-[#ffb600] ${className}`} role="img" aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  );
}
