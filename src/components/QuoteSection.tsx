import { patchTypes, quantities, quotePerks } from "@/data/homepage";
import Button from "./Button";

const fieldClass = "w-full rounded-[6px] border border-[#d8e2ef] bg-white text-[10px] text-[#536a86]";
const inputClass = `${fieldClass} h-[35px] px-[10px]`;

interface SelectFieldProps {
  label: string;
  options: string[];
}

function SelectField({ label, options }: SelectFieldProps) {
  return (
    <select defaultValue="" aria-label={label} className={inputClass}>
      <option value="" disabled>{label}</option>
      {options.map(option => <option key={option}>{option}</option>)}
    </select>
  );
}

export default function QuoteSection() {
  return (
    <section
      id="quote"
      className="bg-[linear-gradient(110deg,#f0f6fd,#fff_55%,#eaf2fc)] px-5 py-10 max-[650px]:px-[18px] max-[650px]:py-[25px]"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-[minmax(250px,.9fr)_minmax(380px,1.1fr)_minmax(260px,.9fr)] items-center gap-7 max-[1100px]:grid-cols-[minmax(220px,.85fr)_minmax(350px,1.15fr)_minmax(210px,.8fr)] max-[900px]:grid-cols-[.9fr_1.1fr_.7fr] max-[900px]:gap-[12px] max-[650px]:grid-cols-2 max-[650px]:gap-[14px]">
      <div className="relative self-start pt-[7px] max-[650px]:col-span-full max-[650px]:flex max-[650px]:items-center max-[650px]:justify-between max-[390px]:block">
        <h2 className="mb-[12px] text-[29px] leading-[1.08] tracking-[-1px] max-[650px]:m-0 max-[650px]:text-[26px]">
          Get Your Custom
          <br />
          Patch Quote
        </h2>
        <ul className="my-[17px] max-[650px]:m-0 max-[390px]:mt-[12px]">
          {quotePerks.map(perk => (
            <li
              key={perk}
              className="my-[13px] flex items-center gap-[11px] text-[12px] before:grid before:size-[19px] before:place-items-center before:rounded-[50%] before:bg-navy before:text-[11px] before:text-white before:content-['×'] max-[650px]:my-[6px] max-[650px]:text-[10px]"
            >
              {perk}
            </li>
          ))}
        </ul>
        <span className="absolute top-[130px] left-[58%] -rotate-[10deg] font-hand text-[16px] text-[#17458a] max-[900px]:hidden">
          Your ideas,
          <br />
          our expertise. ↘
        </span>
      </div>
      <form className="relative z-1 mx-auto flex w-full max-w-[500px] flex-col gap-[10px] rounded-[10px] border border-[#e6edf5] bg-white p-5 shadow-[0_10px_28px_#29476924] max-[650px]:col-span-full max-[650px]:row-[2] max-[650px]:p-[13px]">
        <div className="grid grid-cols-[1fr_1fr] gap-[9px]">
          <input placeholder="Full Name" aria-label="Full Name" className={inputClass} />
          <input placeholder="Email Address" aria-label="Email Address" className={inputClass} />
        </div>
        <div className="grid grid-cols-[1fr_1fr] gap-[9px]">
          <SelectField label="Patch Type" options={patchTypes} />
          <SelectField label="Quantity" options={quantities} />
        </div>
        <textarea
          placeholder="Tell us about your design (optional)"
          aria-label="Design details"
          className={`${fieldClass} h-[73px] resize-y p-[10px]`}
        />
        <Button asButton icon="→" className="h-[37px] w-full cursor-pointer">Get a Free Quote</Button>
        <small className="text-center text-[8px] text-[#547094]">No commitment. Just a faster way to get started.</small>
      </form>
      <div
        aria-hidden="true"
        className="relative aspect-[1.05/1] w-full bg-[url(/src/assets/landing-reference.png)] bg-cover bg-[position:86%_100%] bg-no-repeat max-[650px]:hidden"
      >
        <span className="absolute top-[7%] right-[8%] rotate-[8deg] font-hand text-[14px] leading-[1.2] text-[#164781]">
          Custom
          <br />
          Patches.
          <br />
          Stronger
          <br />
          Brands.
        </span>
      </div>
      </div>
    </section>
  );
}
