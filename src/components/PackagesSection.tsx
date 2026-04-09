const packages = [
  {
    number: "01",
    title: "Spotlight",
    image: "/Spotlight.webp",
    desc: [
      "2× Godox FV150 LED lights",
      "1× Digitek 250 bi colour",
      "2× Honeycomb softboxes",
      "1 lantern soft box",
      "1× Wellborn RGB light",
      "1× 10W RGB Flash Light",
      "1× C Boom Stand",
      "Ideal for creators with their own cameras and mics",
    ],
    offer:
      "Discounted pricing for full-day and half-day bookings is available on request.",
  },
  {
    number: "02",
    title: "Action!",
    image: "/Action.webp",
    desc: [
      "3× 4K DSLR cameras",
      "Memory Cards",
      "Backup Batteries",
      "2× Shure SM7B mics",
      "Backup mics – Hollyland/DJI",
      "Rodecaster Pro II",
    ],
    offer:
      "Discounted pricing for full-day and half-day bookings is available on request.",
  },
  {
    number: "03",
    title: "Director’s Cut",
    image: "/DirectorsCut.webp",
    desc: [
      "On-site Production Director",
      "Camera framing support",
      "Lighting & audio setup",
    ],
    offer:
      "Discounted pricing for full-day and half-day bookings is available on request.",
  },
  {
    number: "04",
    title: "Screenplay",
    image: "/Story.webp",
    desc: [
      "Conceptualisation & direction",
      "End-to-end content strategy",
      "Editing & post-production",
    ],
    offer: "—",
  },
];

const PackagesSection = () => {
  return (
    <section className="relative px-6 sm:px-8 md:px-16 lg:px-[123px] py-24 md:py-[60px] lg:py-[120px] bg-[#231F20] text-white">

      {/* HEADER */}
      <div className="mb-16">
        <li className="text-base md:text-lg font-medium mb-5 ml-4 md:ml-5 list-disc uppercase">
          Brains Behind the Strategy, Brands That Shine
        </li>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight max-w-5xl uppercase">
          Podcast Studio Rental Packages
        </h1>
      </div>

      {/* PACKAGES */}
      <div>
        {packages.map((item, i) => (
          <div
            key={i}
            className={`${
              i !== packages.length - 1 ? "border-b border-white" : ""
            } py-12 md:py-16`}
          >
            <div className="flex flex-col gap-7">

              {/* TITLE */}
              <div className="flex gap-5 text-2xl md:text-3xl font-medium tracking-tight">
                <h3 className="text-[#e9dace]">{item.number}</h3>
                <h2 className="text-[#fff3e9]">{item.title}</h2>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-7">

                {/* IMAGE */}
                <div>
                  <div className="relative overflow-hidden w-full h-80 md:h-96">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="flex flex-col gap-5">
                  <h4 className="text-base md:text-lg font-medium uppercase">
                    Description
                  </h4>

                  <ul className="text-base md:text-lg space-y-2 pl-5 list-disc">
                    {item.desc.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                </div>

                {/* OFFER */}
                <div>
                  <h4 className="text-sm md:text-base font-medium uppercase tracking-wider pb-2">
                    Offer
                  </h4>

                  <p className="text-base md:text-lg">
                    {item.offer}
                  </p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <div className="mt-10">
        <p className="text-base md:text-lg font-medium uppercase">
          For details on package fees Whatsapp on +91-98765 43210
        </p>
      </div>

    </section>
  );
};

export default PackagesSection;