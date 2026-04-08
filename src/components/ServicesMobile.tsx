const services = [
  {
    number: "01",
    title: "Studio Rental",
    desc: "Flexible and completely adaptable studio space designed for multiple purposes, including recording, shoots, or any creative projects.",
    image: "/ServicesImage2.webp",
  },
  {
    number: "02",
    title: "Professional Equipment",
    desc: "A space with end-to-end solutions, high-quality cameras, lighting, audio gear, and accessories ready to bring your vision to life.",
    image: "/ServicesImage3.webp",
  },
  {
    number: "03",
    title: "On-ground Technical Support",
    desc: "Skilled technicians available to assist with setup, troubleshooting, and smooth execution.",
    image: "/ServicesImage4.webp",
  },
  {
    number: "04",
    title: "End-to-End Production Services",
    desc: "Rent the studio, equipment, and expert support altogether, a hassle-free, end-to-end solution.",
    image: "/ServicesImage5.webp",
  },
];

const ServicesMobile = () => {
  return (
    <section className="relative px-6 sm:px-8 py-24 bg-[#fff3e9] block md:hidden">

      <div className="flex flex-col gap-10 w-full">

    
        <div className="flex flex-col gap-5 text-left">
          <li className="text-[#643c54] text-base font-medium uppercase ml-4">
            OUR SERVICES
          </li>

          <h1 className="text-black text-4xl font-medium uppercase tracking-tight">
            From Space to Support, Covered
          </h1>
        </div>


        <div className="flex flex-col gap-14">

          {services.map((item, i) => (
            <div key={i} className="flex flex-col gap-10">


              <div className="flex flex-col gap-6">
                <div className="text-7xl text-[#e9dace] font-medium">
                  {item.number}
                </div>

                <div>
                  <p className="text-2xl text-[#3f1833] pb-2">
                    {item.title}
                  </p>

                  <p className="text-base text-black">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="w-full h-[240px] sm:h-[300px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ServicesMobile;