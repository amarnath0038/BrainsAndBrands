"use client";

import SideLogo from "./SideLogo";

const ContactSection = () => {
  return (
    <section className="relative bg-[#fff3e9] px-6 sm:px-8 md:px-16 lg:px-[123px] pt-24 md:pt-[140px] lg:pt-[200px]">

      <div className="flex flex-col gap-14 md:gap-20">

        <p className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight w-full">
          Get in Touch with us!
        </p>

        <form className="space-y-8">

          <div className="flex flex-col md:flex-row md:gap-7">
            <input
              type="text"
              placeholder="FIRST NAME"
              className="w-full md:w-1/2 pb-5 bg-transparent border-b border-gray-400 outline-none text-gray-800 placeholder-gray-500"
            />

            <input
              type="text"
              placeholder="LAST NAME"
              className="w-full md:w-1/2 pb-5 bg-transparent border-b border-gray-400 outline-none text-gray-800 placeholder-gray-500"
            />
          </div>

          <div className="flex flex-col md:flex-row md:gap-7">
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full md:w-1/2 pb-5 bg-transparent border-b border-gray-400 outline-none text-gray-800 placeholder-gray-500"
            />

            <input
              type="tel"
              placeholder="CONTACT"
              className="w-full md:w-1/2 pb-5 bg-transparent border-b border-gray-400 outline-none text-gray-800 placeholder-gray-500"
            />
          </div>

        
          <div className="relative w-full pt-5">
            <select
              className="w-full pb-5 bg-[#fff3e9] border-b border-gray-400 text-gray-800 appearance-none text-base font-medium outline-none"
            >
              <option>WHAT SERVICES ARE YOU LOOKING FOR ?</option>
              <option>Studio Rental</option>
              <option>Professional Equipment</option>
              <option>Production Services</option>
            </select>

            
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                d="M5 8L10 13L15 8"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          
          <input
            type="text"
            placeholder="COMMENTS"
            className="w-full pb-5 bg-transparent border-b border-gray-400 text-gray-800 placeholder-gray-500 outline-none"
          />

          
          <div className="flex justify-center md:justify-end mt-10">
            <SideLogo
                text="Create Without Limits"
                className="gap-8 mt-4 border border-[#603C54] hover:border-white/50 bg-white/10 hover:bg-black/30 rounded-full px-6 py-3 backdrop-blur-2xl transition-colors duration-300"
            />
          </div>

        </form>
      </div>

    </section>
  );
};

export default ContactSection;