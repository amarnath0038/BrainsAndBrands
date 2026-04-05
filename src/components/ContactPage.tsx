import { outfit } from "@/lib/fonts";
import SideLogo from "./SideLogo";

const ContactPage = () => {
  return (
    <section className="relative w-full min-h-[220px] md:min-h-[320px] lg:min-h-[420px] xl:min-h-[520px] overflow-hidden">
      {/*Bg Image*/}
      <div className="absolute inset-0">
        <img
          src="/ContactBackground.webp"
          alt="contact background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/*Content*/}
      <div className="relative z-10 flx items-start min-h-[220px] md:min-h-[320px] lg:min-h-[420px] xl:min-h-[520px] px-6 sm:px-8 md:px-16 lg:px-[123px] py-24 lg:pt-24">
        <div className="w-full flex flex-col items-start justify-between gap-24 lg:gap-10">
            {/*Left*/}
            <div className="text-left lg:flex-1 flex flex-col md:flex-row gap-5 md:justify-between w-full max-w-2xl lg:max-w-none">
                <h2 className="text-[#fff3e9] text-4xl md:text-5xl lg:text-[54px] font-medium tracing-[-0.01em] text-left">
                    CREATE WITHOUT LIMITS
                </h2>
                <div className="lg:text-left lg:flex-1 max-w-lg lg:max-w-md xl:max-w-lg">
                    <p className={`${outfit.className} text-[#fff3e9] text-base lg:text-lg font-normal leading-relaxed opacity-90`}>
                        From first-timers to full-timers, this is your space to explore, express, and execute.
                         Book now and bring your vision to life.
                    </p>
                </div>
            </div>

            {/*Right*/}
            <div className="flex justify-start">
                <SideLogo
                    text="Book Your Slot"
                    className="gap-8 mt-4 text-white border border-white/40 hover:border-white/50 bg-white/10 hover:bg-black/30 rounded-full px-6 py-3 backdrop-blur-sm transition duration-300"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;