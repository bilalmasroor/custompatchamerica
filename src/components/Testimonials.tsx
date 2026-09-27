import { reviews } from "@/data/homepage";
import Button from "./Button";
import Stars from "./Stars";

export default function Testimonials() {
  return (
    <section className="bg-[#f2f7fd] px-5 py-9 max-[650px]:px-[18px] max-[650px]:py-[25px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[minmax(220px,.8fr)_repeat(3,minmax(0,1fr))] items-stretch gap-4 max-[900px]:grid-cols-3 max-[900px]:gap-3 max-[650px]:grid-cols-1 max-[650px]:gap-[10px]">
      <div className="max-[900px]:col-span-full max-[900px]:flex max-[900px]:items-center max-[900px]:gap-[18px] max-[650px]:col-auto max-[650px]:block">
        <h2 className="mb-[12px] text-[length:clamp(24px,2.7vw,32px)] leading-[1.08] tracking-[-1px] max-[900px]:m-0 max-[900px]:text-[22px] max-[650px]:text-[27px]">
          What Our
          <br />
          Customers Say
        </h2>
        <p className="mb-[20px] max-w-[300px] text-[13px] leading-[1.45] text-[#18365f] max-[900px]:m-0 max-[650px]:mt-[8px] max-[650px]:mb-[13px]">
          Real stories. Real patches. Real results.
        </p>
        <Button className="h-[35px] max-[900px]:ml-auto max-[650px]:m-0">Read More Reviews</Button>
      </div>
      {reviews.map(({ quote, name, role }) => (
        <article
          key={name}
          className="min-h-[176px] rounded-[9px] border border-[#e6edf7] bg-white p-5 shadow-[0_4px_12px_#243e5b0c] max-[900px]:min-h-[164px] max-[650px]:min-h-0 max-[650px]:p-[13px]"
        >
          <Stars className="block text-[13px]" />
          <p className="mt-[8px] mb-[13px] min-h-[34px] text-[11px] leading-[1.4] max-[650px]:mt-[7px] max-[650px]:mb-[10px] max-[650px]:min-h-0">“{quote}”</p>
          <div className="flex items-center gap-[9px] text-[10px]">
            <span className="grid size-[29px] place-items-center rounded-[50%] bg-[#dbe6f5]" aria-hidden="true">{name[0]}</span>
            <b>
              {name}
              <small className="mt-[2px] block font-normal text-[#547094]">{role}</small>
            </b>
          </div>
        </article>
      ))}
      </div>
    </section>
  );
}
