"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Studio Rental",
    desc: "Flexible and adaptable studio space for recording, shoots, or creative projects.",
    image: "/ServicesImage2.webp",
  },
  {
    number: "02",
    title: "Professional Equipment",
    desc: "High-quality cameras, lighting, and audio gear ready to bring your vision to life.",
    image: "/ServicesImage3.webp",
  },
  {
    number: "03",
    title: "On-ground Technical Support",
    desc: "Skilled technicians to assist with setup and smooth execution.",
    image: "/ServicesImage4.webp",
  },
  {
    number: "04",
    title: "End-to-End Production",
    desc: "Complete solution with space, equipment, and expert support.",
    image: "/ServicesImage5.webp",
  },
];

const ServicesDesktop = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current){
      return;
    } 

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${services.length * 1000}`, 
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      services.forEach((_, i) => {
        if (i === 0) return;

        const prevContent = contentRef.current[i - 1];
        const nextContent = contentRef.current[i];
        const prevImg = imageRef.current[i - 1];
        const nextImg = imageRef.current[i];

        if (prevContent && nextContent && prevImg && nextImg) {
          tl.to(prevContent, { y: "-100%", opacity: 0, duration: 1 }, `step-${i}`)
            .to(prevImg, { y: "-100%", duration: 1 }, `step-${i}`)
            .fromTo(nextContent, 
              { y: "100%", opacity: 0 }, 
              { y: "0%", opacity: 1, duration: 1 }, 
              `step-${i}`
            )
            .fromTo(nextImg, 
              { y: "100%" }, 
              { y: "0%", duration: 1 }, 
              `step-${i}`
            );
        }
      });
    }, sectionRef); 

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
     
      className="relative w-full h-screen flex items-center bg-[#fff3e9] hidden md:flex overflow-hidden px-6 sm:px-8 md:px-16 lg:px-[123px]"
    >
      <div className="relative flex flex-row gap-10 md:gap-3 w-full items-center">
        
        {/* Left*/}
        <div className="relative z-10 md:w-1/2 flex flex-col h-[620px] justify-between text-left py-10">
          <div>
            <span className="text-[#643c54] text-base md:text-lg font-medium uppercase mb-4 ml-1 md:ml-2 block border-l-4 border-[#643c54] pl-4">
              OUR SERVICES
            </span>
            <h1 className="text-black text-4xl lg:text-5xl font-medium uppercase max-w-2xl leading-tight">
              From Space to<br></br>Support, Covered
            </h1>
          </div>

          <div className="relative h-[300px] overflow-hidden">
            {services.map((item, i) => (
              <div
                key={i}
                ref={(el) => { contentRef.current[i] = el; }}
                className="absolute top-0 left-0 w-full flex flex-col gap-6"
                style={{ 
                  transform: i === 0 ? "translateY(0%)" : "translateY(100%)", 
                  opacity: i === 0 ? 1 : 0 
                }}
              >
                <div className="text-7xl text-[#e9dace] font-medium leading-none">
                  {item.number}
                </div>
                <div className="md:w-4/5">
                  <p className="text-3xl text-[#3f1833] pb-2 font-medium">
                    {item.title}
                  </p>
                  <p className="text-base md:text-lg text-black leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right*/}
        <div className="md:w-1/2 relative z-10 flex justify-center">
          <div className="relative w-full max-w-[596px] h-[340px] md:h-[620px] overflow-hidden shadow-xl">
            {services.map((item, i) => (
              <img
                key={i}
                ref={(el) => { imageRef.current[i] = el; }}
                src={item.image}
                alt={item.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{ transform: i === 0 ? "translateY(0%)" : "translateY(100%)" }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesDesktop;