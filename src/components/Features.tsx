import { outfit } from "@/lib/fonts";
import BackgroundLogo from "./BackgroundLogo";
import SideLogo from "./SideLogo";
import Link from "next/link";

const Features = () => {
  return (
    <section className="relative px-6 sm:px-8 md:px-16 lg:px-[123px] py-24 lg:py-[120px] bg-black">
      <BackgroundLogo className="absolute bottom-0 lg-left-10 xl:left-30 h-[30%] md:h-[60%] w-[90%] md:w-[60%] xl:w-2xl  z-0 pointer-events-none" />
      <div className="relative flex flex-col-reverse md:flex-row gap-10 md:gap-3 w-full">
        <div className="md:w-1/2 relative z-10">
          <div className="relative z-10 flex-grow flex flex-col justify-start text-left gap-10 md:gap-5 xl:pt-[60px]">
  
            <li className="text-[#fff3e9] text-sm sm:text-base md:text-lg font-medium ml-4 md:ml-5 hidden md:list-item">
              STRATEGIC STUDIO SOLUTIONS
            </li>

            <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight w-full md:max-w-4xl mb-2 hidden md:block">
              SETUP. EQUIPMENT. SORTED.
            </h1>

            <p className={`${outfit.className} text-base md:text-lg text-white font-normal w-full lg:w-4/5 md:mb-5`}>
              Adaptive spaces, flexible lighting, mood-based setups, and reliable gear, everything in our studio is designed to keep your creative flow uninterrupted. With in-built AI intelligence enhancing every stage of production, each element helps you stay focused, comfortable, and fully in your zone.
            </p>
            <Link href="/services">
              <SideLogo text="Explore Services" className="self-start gap-3 text-white underline underline-offset-2 tracking-tight" />
            </Link>
          </div>
        </div>
        <div className="relative z-10 overflow-hidden group md:w-1/2">
            <img 
                src="/SpeakingGuy.webp"
                alt="vision"
                className="transition-transform duration-300 group-hover:scale-110 w-full h-full object-cover" 
            />
        </div>
        {/*Mobile display*/}
        <div className="block md:hidden">
          <li className="text-[#fff3e9] text-base md:text-lg font-medium ml-4 md:ml-5 mb-5">
            SRATEGIC STUDIO SOLUTIONS
          </li>
          <h1 className="text-white title text-4xl xl:text-5xl font-medium tracking-tight w-full md:max-w-4xl uppercase ">
          SETUP. EQUIPMENT. SORTED.       
          </h1>
        </div>





      </div>
    </section>
  );
};

export default Features;