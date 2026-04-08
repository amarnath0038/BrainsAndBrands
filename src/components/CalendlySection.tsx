"use client";

import { useEffect } from "react";

const CalendlySection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative px-6 sm:px-0 mb-10 md:mb-0 bg-[#fff3e9]">

      <div className="w-full min-w-[320px] h-[700px] relative">
        <iframe
          src="https://calendly.com/help-brainsandbrands/30min"
          className="w-full h-full border-0"
          title="Calendly"
        />
      </div>

    </section>
  );
};

export default CalendlySection;