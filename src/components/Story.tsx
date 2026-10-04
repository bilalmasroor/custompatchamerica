import { stats } from "@/data/homepage";

export default function Story() {
  return (
    <section
      id="story"
      className="relative isolate flex min-h-[400px] items-center overflow-hidden bg-[#031832] px-5 py-10 text-white max-[1000px]:min-h-0 max-[1000px]:py-14 max-[650px]:px-[20px] max-[650px]:py-9"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[center_60%]"
      >
        <source src="https://res.cloudinary.com/dcsgyp1xo/video/upload/v1791127564/WhatsApp_Video_2026-10-03_at_9.25.25_PM_s22gtj.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-[#031832]/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-[clamp(40px,6vw,100px)] max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:items-start max-[1000px]:gap-8 max-[650px]:gap-0">
      <div className="max-[1000px]:w-full">
        <h2 className="mb-4 text-[clamp(34px,2.7vw,42px)] leading-[1.07] font-extrabold max-[650px]:mb-3 max-[650px]:text-[clamp(28px,7vw,36px)]">
          Small Details.
          <br />
          Big Identities.
        </h2>
        <p className="max-w-[410px] text-[clamp(15px,1.15vw,18px)] leading-[1.55] max-[650px]:text-[15px]">
          Custom patches help teams, brands, and organizations stand out. Quality you can feel in every stitch.
        </p>
      </div>
      <div className="flex w-full max-w-[540px] items-center justify-end justify-self-center max-[1000px]:max-w-[620px] max-[1000px]:self-center max-[1000px]:justify-center max-[650px]:mt-[20px] max-[650px]:justify-end">
        {stats.map(({ icon, value, label }) => (
          <div key={value} className="flex min-w-0 flex-1 flex-col items-center gap-2 border-l border-white/25 px-[clamp(8px,1.2vw,18px)] text-center first:border-l-0 max-[650px]:w-[31%]">
            <span className="text-[clamp(26px,2vw,30px)] text-[#c5d8f1]">{icon}</span>
            <b className="text-[clamp(29px,2.45vw,38px)] font-extrabold max-[650px]:text-[clamp(22px,6vw,30px)]">{value}</b>
            <small className="mt-1 block text-[clamp(11px,.9vw,14px)] text-[#d6e2f3]">{label}</small>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
