import Image from "next/image";
import { Check } from "lucide-react";

const benefits = [
  "Premium materials and detailed craftsmanship",
  "Clear communication from design to delivery",
  "Free digital mockups before production",
  "Fast turnaround with free U.S. shipping",
  "Custom options for different styles, sizes, and quantities",
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" aria-labelledby="why-choose-us-heading" className="overflow-hidden bg-[#f6f9fe] px-5 py-16 font-sans sm:px-6 md:py-20 xl:py-24">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 md:grid-cols-[minmax(0,48fr)_minmax(0,52fr)] md:gap-[clamp(32px,4vw,80px)] lg:px-5 xl:px-8">
        <div className="relative mx-auto w-full max-w-[580px] md:max-w-none">
          <div aria-hidden="true" className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,#dceafa_0%,#eaf3fc_35%,transparent_72%)] blur-2xl" />
          <Image
            src="/images/jacket.png"
            alt="Denim jacket and cap decorated with custom American patches"
            width={1364}
            height={1153}
            sizes="(max-width: 767px) 90vw, (max-width: 1440px) 44vw, 640px"
            className="relative h-auto w-full object-contain"
          />
        </div>
        <div className="min-w-0 max-w-[620px] text-navy">
          <h2 id="why-choose-us-heading" className="text-[clamp(34px,3.3vw,54px)] leading-[1.1] font-bold tracking-[-.035em]">
            Why Choose Custom Patch America?
          </h2>
          <p className="mt-6 text-[clamp(16px,1.1vw,18px)] leading-[1.7] text-[#3f5878]">
            At Custom Patch America, we create premium custom patches for brands, businesses, teams, uniforms, events, and organizations across the United States. From embroidered and PVC patches to woven, chenille, leather, and more, every patch is produced with close attention to material quality, color accuracy, and finishing.
          </p>
          <p className="mt-6 text-[clamp(16px,1.1vw,18px)] font-semibold text-navy">
            We&rsquo;re proud to offer:
          </p>
          <ul className="mt-4 space-y-3 text-[clamp(15px,1vw,17px)] leading-[1.5] text-[#3f5878]">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <a href="#quote" className="mt-8 inline-flex min-h-14 items-center justify-center rounded-[10px] bg-brand-red px-8 text-center text-[16px] font-bold text-white shadow-[0_10px_24px_#e51c2a35] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red">
            Get a Free Patch Mockup
          </a>
        </div>
      </div>
    </section>
  );
}