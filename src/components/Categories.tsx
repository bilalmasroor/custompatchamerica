import { categories } from "@/data/homepage";
import Button from "./Button";

export default function Categories() {
  return (
    <section
      id="categories"
      className="bg-[linear-gradient(110deg,#fff,#f4f8fe)] px-5 py-16 max-[650px]:px-[18px] max-[650px]:py-10"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-[minmax(260px,.8fr)_minmax(0,1.6fr)] items-center gap-8 max-[900px]:grid-cols-[minmax(220px,.7fr)_minmax(0,1.6fr)] max-[900px]:gap-[18px] max-[650px]:block">
      <div>
        <h2 className="mb-4 text-[length:clamp(30px,3.2vw,42px)] leading-[1.06] font-extrabold tracking-[-1.4px] max-[650px]:text-[30px]">
          Find the Perfect
          <br />
          Patch for Your Vision
        </h2>
        <p className="mb-6 max-w-[390px] text-[15px] leading-[1.6] text-[#18365f] max-[650px]:max-w-[410px] max-[650px]:text-[14px]">
          From timeless embroidered patches to modern PVC and leather options, we create patches that fit your style, purpose, and budget.
        </p>
        <Button className="h-[37px] max-[650px]:mb-[20px]">Explore All Patch Types</Button>
      </div>
      <div className="grid grid-cols-4 gap-5 max-[900px]:gap-3 max-[650px]:mt-5 max-[650px]:grid-cols-2 max-[650px]:gap-[12px] max-[390px]:gap-[9px]">
        {categories.map(({ name, image }) => (
          <a
            key={name}
            href="#quote"
            className="grid aspect-[.94/1] min-h-[220px] grid-rows-[minmax(0,1fr)_2.6em] justify-items-center gap-2 overflow-hidden rounded-[12px] border border-[#e6edf7] bg-white p-4 text-center text-[16px] leading-[1.3] shadow-[0_8px_22px_#223b5c14] transition-transform hover:-translate-y-[3px] hover:shadow-[0_12px_26px_#223b5c20] max-[900px]:min-h-[190px] max-[650px]:aspect-[1.02/1] max-[650px]:min-h-[170px] max-[650px]:p-3 max-[390px]:min-h-[150px]"
          >
            <img src={image} alt={`${name} patch`} className="h-full w-full min-h-0 object-contain" />
            <b className="flex h-[2.6em] items-center justify-center self-stretch text-[17px] font-bold leading-[1.25] max-[650px]:text-[15px]">
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
