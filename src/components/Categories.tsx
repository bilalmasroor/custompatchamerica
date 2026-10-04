import { categories } from "@/data/homepage";
import Image from "next/image";

export default function Categories() {
  return (
    <section
      id="categories"
      className="bg-[linear-gradient(180deg,#fff_0%,#f7fbff_100%)] px-5 py-[clamp(80px,6vw,96px)] max-[767px]:px-4 max-[767px]:py-14"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 text-[13px] font-semibold tracking-[.2em] text-[#6d91bb]">
            <span className="h-px w-8 bg-[#a9bed8]" aria-hidden="true" />
            <span>PATCH TYPES</span>
            <span className="h-px w-8 bg-[#a9bed8]" aria-hidden="true" />
          </div>
          <h2 className="mt-4 text-[clamp(36px,3.5vw,54px)] leading-[1.08] font-extrabold tracking-[-.045em] text-navy max-[767px]:text-[clamp(32px,6vw,42px)]">
            Find the Perfect Patch for Your Vision
          </h2>
          <p className="mx-auto mt-5 max-w-[800px] text-[clamp(16px,1.2vw,19px)] leading-[1.6] text-[#476489] max-[767px]:text-[15px]">
            From timeless embroidered patches to modern PVC and leather options, we create patches that fit your style, purpose, and budget.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-4 gap-[clamp(16px,1.4vw,20px)] max-[1199px]:grid-cols-2 max-[440px]:grid-cols-1">
          {categories.map(({ name, image }) => (
            <a
              key={name}
              href="#quote"
              className="group flex h-[clamp(290px,21vw,320px)] min-w-0 flex-col items-center justify-center rounded-[18px] border border-[#e2eaf4] bg-white p-[clamp(16px,1.5vw,24px)] text-center shadow-[0_12px_30px_#1230550d] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_#1230551c] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#4f84bd] max-[1199px]:h-[clamp(270px,28vw,320px)] max-[767px]:h-[clamp(230px,42vw,300px)] max-[767px]:p-3 max-[440px]:h-[285px]"
            >
              <span className="flex min-h-0 w-full flex-1 items-center justify-center">
                <Image
                  src={image}
                  width={220}
                  height={220}
                  alt={`${name} patch`}
                  className="h-full max-h-[220px] w-full max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </span>
              <b className="mt-3 block shrink-0 text-[clamp(18px,1.3vw,21px)] leading-[1.15] font-extrabold text-navy max-[767px]:text-[16px]">
                {name}
                <br />
                Patches
              </b>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
