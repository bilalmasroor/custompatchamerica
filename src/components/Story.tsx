import { stats } from "@/data/homepage";

export default function Story() {
  return (
    <section
      id="story"
      className="relative isolate bg-[#031832] bg-[url(/src/assets/landing-reference.png)] bg-cover bg-[position:center_68%] bg-no-repeat px-5 py-10 text-white before:absolute before:inset-0 before:-z-1 before:bg-[linear-gradient(90deg,#03172ff5,#03172f6b_50%,#03172ff2)] max-[650px]:bg-[position:55%_60%] max-[650px]:px-[20px] max-[650px]:py-[25px] max-[650px]:before:bg-[linear-gradient(90deg,#03172ff2,#03172f9c)]"
    >
      <div className="mx-auto flex min-h-[190px] max-w-[1280px] items-center max-[900px]:min-h-[210px] max-[650px]:min-h-0 max-[650px]:flex-wrap">
      <div className="w-[34%] max-[650px]:w-[65%]">
        <h2 className="mb-[9px] text-[23px] leading-[1.05] max-[650px]:text-[25px]">
          Small Details.
          <br />
          Big Identities.
        </h2>
        <p className="max-w-[320px] text-[13px] leading-[1.55]">
          Custom patches help teams, brands, and organizations stand out. Quality you can feel in every stitch.
        </p>
      </div>
      <div className="mr-auto ml-[3%] flex items-center gap-[10px] text-[13px] max-[650px]:mr-0 max-[650px]:ml-auto">
          <a href="#process" aria-label="Watch our process" className="grid size-[48px] place-items-center rounded-[50%] bg-white pl-[3px] text-navy">▶</a>
        <span>
          <b>Watch</b>
          <small className="mt-[4px] block text-[11px] text-[#d6e2f3]">Our Process</small>
        </span>
      </div>
      <div className="flex items-center max-[650px]:mt-[20px] max-[650px]:w-full max-[650px]:justify-end">
        {stats.map(({ icon, value, label }) => (
          <div key={value} className="flex w-[140px] flex-col items-center gap-1 border-l border-[#ffffff1d] px-2 text-center max-[650px]:w-[31%]">
            <span className="text-[25px] text-[#c5d8f1]">{icon}</span>
            <b className="text-[26px] max-[650px]:text-[19px]">{value}</b>
            <small className="mt-1 block text-[11px] text-[#d6e2f3]">{label}</small>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
