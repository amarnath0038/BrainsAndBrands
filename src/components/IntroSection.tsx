import { outfit } from "@/lib/fonts";
import { text } from "stream/consumers";
import LogoBroken from "./LogoBroken";

const IntroSection = () => {
  return (
    <section className="px-6 sm:px-8 md:px-16 lg:px-[123px] pt-10 pb-24 md:py-[140px] lg:py-[200px] bg-[#fff3e9]">
      <div className=" relative z-10 h-full flex flex-col gap-14 md:gap-28">
        {/*Mobile content*/}
        <div className="block md:hidden">
           Mobile Content
        </div>

        <div className="flex-grow flex flex-col items-center justify-center text-center">
            <li className="text-[#0a0101] text-base md:text-lg mb-5 font-medium">
                A SPACE TO EXPRESS & EXPERIENCE
            </li>
            <h1 className={`${outfit.className} max-w-4xl lg:max-w-5xl text-black font-normal tracking-tight text-3xl lg:text-4xl xl:text-5xl`}>
                Our platform empowers young creators to express boldly and connect globally to unlock potential.
            </h1>
        </div>

        <div className=" relative z-0 flex flex-col gap-12 md:gap-0">
            <div className="flex flex-col md:flex-row gap-10 md:gap-0">
                <div className="relative overflow-hidden group md:w-1/2">
                    <img 
                    src="/IntroSectionImage1.webp"
                    alt="vision"
                    className="transition-transform duration-300 group-hover:scale-110 w-full h-full object-cover" 
                    />
                </div>

                <div className="w-full md:w-1/2 flex md:flex-col gap-10 md:justify-between md:mb-11">
                    <div className="text-4xl md:text-7xl md:pl-10 md:leading-20 text-[#eed7c4] font-medium">
                        01
                    </div>
                    <div className="w-full md:w-80 lg:w-96 md:pl-10">
                        <p className={`${outfit.className} text-2xl md:text-3xl text-black font-normal mb-3`}>Vision</p>
                        <p className={`${outfit.className} text-black text-base md:text-lg lg:w-sm font-normal}`}>
                            We aspire to nurture a global constellation of creators, from seasoned 
                            podcasters to emerging storytellers, amplifying voices that challenge,
                             comfort, and connect across cultures and generations.
                        </p>
                    </div>

                </div>
            </div>
            
            <div className="relative z-0 flex flex-col md:flex-row-reverse gap-10 md:gap-0">
                <div className="absolute opacity-0 md:opacity-100 inset-0 flex items-start justify-center -top-13 -right-8">
                    <LogoBroken className=" text-[#E9DACE] relative z-10 w-[91px] h-[116px]" />
                </div>
                
                <div className="relative overflow-hidden group md:w-1/2">
                    <img 
                    src="/IntroSectionImage2.webp"
                    alt="vision"
                    className="transition-transform duration-300 group-hover:scale-110 w-full h-full object-cover" 
                    />
                </div>

                {/* Text (now on left on desktop) */}
                <div className="w-full md:w-1/2 flex md:flex-col gap-10 md:justify-between mt-10 md:mt-12">

                    <div className="w-full md:w-80 lg:w-96">
                        <p className={`${outfit.className} text-2xl md:text-3xl text-black font-normal mb-3`}>
                            Mission
                        </p>
                        <p className={`${outfit.className} text-black text-base md:text-lg lg:w-sm font-normal`}>
                            To empower creators with a seamless, fully equipped ecosystem
                             that bridges artistry and technology,
                             turning every narrative into an unforgettable experience.
                        </p>
                    </div>

                    <div className="text-4xl md:text-7xl md:leading-20 text-[#eed7c4] font-medium">
                        02
                    </div>

                </div>











            </div>
        </div>
        
      </div>
    </section>
  );
};

export default IntroSection;