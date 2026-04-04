import { outfit } from "@/lib/fonts";
import LogoBroken from "./LogoBroken";
import SideLogo from "./SideLogo";
import clsx from "clsx";

const StudioPage = () => {
  return (
    <section className="bg-[#fff3e9] px-6 sm:px-8 md:px-16 lg:px-[123px] pb-24 md:pb-[140px] lg:pb-[200px]">
      <div className="relative flex flex-col gap-10">
        <div className="relative z-10 flex-grow flex flex-col justify-items-start text-left">
            <li className="text-black text-base md:text-lg font-medium mb-5 ml-4 md:ml-5">
                SEAMLESS STUDIO SUPPORT
            </li>
            <h1
              className="reveal-heading title uppercase text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight max-w-4xl text-theme-primary-black"
              aria-label="Studio. Support. Sorted"
              >
                <div className="relative block text-black text-left overflow-hidden">
                    <div className="relative block text-black text-left overflow-hidden">
                        Studio. Support. Sorted
                    </div>
                </div>
            </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
            <div className="relative z-10 overflow-hidden group md:w-1/2">
                <img 
                    src="/StudioSupport.webp"
                    alt="vision"
                    className="transition-transform duration-300 group-hover:scale-110 w-full h-full object-cover" 
                />
            </div>

            <div className="md:w-1/2 flex items-end relative">
                <LogoBroken className="right-0 transform -translate-y-[50%] md:-translate-y-[0%] md:-top-75 lg:-top-62 xl:-top-52 absolute z-0 md:block w-[40%] md:w-[80%] w-[378px] h-[482px]" />
                <div className="relative z-10 flex flex-col gap-10 w-full">
                    <p className={`${outfit.className} text-black text-lg font-normal`}>
                        From studio space to professional gear and on-ground support,
                          we offer end-to-end solutions for content creation.
                           Rent the space, the tech, or both, our end-to-end setup is built to 
                        simplify your content production process.
                    </p>
                    {/* <div className="flex justify-start">
                        <SideLogo text="Explore Services" className={clsx("gap-8 text-black underline underline-offset-2 tracking-tight")} />
                    </div> */}
                    <SideLogo text="Explore Services" className={clsx("self-start gap-8 text-black underline underline-offset-2 tracking-tight")} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StudioPage;