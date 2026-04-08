"use client";

import LogoBroken from "./LogoBroken";

const ContactInfo = () => {
  return (
    <section className="relative px-6 sm:px-8 md:px-16 lg:px-[123px] py-20 md:py-[140px] lg:pt-[200px] bg-[#fff3e9] overflow-hidden">

      
      <LogoBroken
        className="
            absolute
            left-[350px] top-0
            w-[180px] md:w-[220px] lg:w-[250px]
            text-[#e9dace]
            opacity-60
            z-10
        "
        />

      <div className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-7 w-full">

        {/* LEFT */}
        <div className="md:w-1/2 flex flex-col gap-10 md:justify-evenly text-left">

          <p className="text-black text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight">
            Whatsapp us or send us mail!
          </p>

          <div className="text-lg font-medium text-[#603C54] uppercase leading-6">

            <div className="flex items-center gap-3 pb-7 border-b border-gray-400">
              Phone :
              <a href="tel:+918983225507" className="hover:text-gray-900">
                +91-89832 25507
              </a>
            </div>

            <div className="flex items-center gap-3 py-7 border-b border-gray-400">
              Email :
              <a
                href="mailto:info@brainsandbrands.in"
                className="hover:text-gray-900"
              >
                info@brainsandbrands.in
              </a>
            </div>

            <div className="flex items-start gap-3 py-7 border-b border-gray-400">
              Timings : 9am - 9pm
            </div>

            <div className="flex items-start gap-3 py-7 border-b border-gray-400">
              Address : 506, Water Square Mall, Pimple Nilakh, Pune – 411027
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-7 text-[#603C54]">
              <a href="#" className="hover:text-gray-900">
                <i className="ri-linkedin-box-fill text-xl" />
              </a>
              <a href="#" className="hover:text-gray-900">
                <i className="ri-facebook-circle-fill text-xl" />
              </a>
              <a href="#" className="hover:text-gray-900">
                <i className="ri-instagram-line text-xl" />
              </a>
            </div>

          </div>
        </div>

        {/* RIGHT (MAP) */}
        <div className="md:w-1/2 relative h-[420px] md:h-[550px]">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4653.460244333453!2d73.7845869!3d18.580360499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9124e59c5d9%3A0x3071675c61e6c12b!2sWater's%20Square!5e1!3m2!1sen!2sin!4v1760424139369!5m2!1sen!2sin"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;