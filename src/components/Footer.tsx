import { outfit } from "@/lib/fonts";
import Logo from "./Logo";
import LogoBroken from "./LogoBroken";
import FooterItem from "./FooterItem";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bottom-0 relative left-0 right-0 bg-[#221e20] text-white">
      <LogoBroken className="text-[#E9DACE]/20 absolute z-0 right-[7%] bottom-0 w-[90%] h-[60%] md:w-[22%] md:h-[100%] w-[272px] h-[212px]" />
      <div className="relative z-10 px-6 sm:px-6 md:px-12 lg:px-16 xl:px-[123px] pt-10 pb-24 lg:py-12 xl:py-15 h-full w-full">
        <div className="flex relative z-10 flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            {/*Logo section*/}
            <div className="flex-shrink-0 relative z-10">
                <Logo className="text-white w-auto h-24 mt-2 hover:text-white/70" />
            </div>

            {/*Navigation Links*/}
            <div className="relative z-10 grid grid-cols-2 gap-6 mt-10 lg:w-3xl sm:flex sm:flex-row sm:justify-between lg:justify-end flex-1 sm:gap-8 lg:gap-18 xl:gap-22">
                <div className="flex flex-col">
                    <p className="text-[#fff3e9] font-medium text-lg tracking-wider mb-3 lg:mb-4">
                        COMPANY
                    </p>
                    <div className={`flex flex-col space-y-2 lg:space-y-3 font-nomal text-white`}>
                        <FooterItem text="Home" />
                        <FooterItem text="Services" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-[#fff3e9] font-medium text-lg tracking-wider mb-3 lg:mb-4">
                        LEGAL
                    </p>
                    <div className={`flex flex-col space-y-2 lg:space-y-3 font-nomal text-white`}>
                        <FooterItem text="Terms And Conditions" />
                        <FooterItem text="Privacy" />
                        <FooterItem text="Booking & Cancellation Policy" />
                        <FooterItem text="Refund Policy" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-[#fff3e9] font-medium text-lg tracking-wider mb-3 lg:mb-4">
                        SUPPORT
                    </p>
                    <div className={`flex flex-col space-y-2 lg:space-y-3 font-nomal text-white`}>
                        <FooterItem text="Contact Us" />
                        <FooterItem text="FAQ" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-[#fff3e9] font-medium text-lg tracking-wider mb-3 lg:mb-4">
                        SOCIAL
                    </p>
                    <div className={`flex flex-col space-y-2 lg:space-y-3 font-nomal`}>
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;