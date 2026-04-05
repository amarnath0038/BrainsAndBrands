"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { outfit } from "@/lib/fonts";
import TestiminialSVG from "./TestimonialSVG";

type Testimonial = {
  text: string;
  name: string;
  profile: string;
  image: string;
};


const testimonials: Testimonial[] = [
  {
    text: "This studio is a game changer for creators. Comfortable, well equipped & thoughtfully designed, it sparks ideas & simplifies the entire content creation process!",
    name: "PAWANDEEP SINGH",
    profile: "/User1.webp",
    image: "/TestimonialImage1.webp",
  },
  {
    text: "Set up is warm and cozy — perfect vibe for an engaging podcast session.",
    name: "VIPUL DHAR",
    profile: "/User2.webp",
    image: "/TestimonialImage2.webp",
  },
  {
    text: "Well-equipped studio with a professional, friendly team. Loved the experience!",
    name: "ADITI NAYAK",
    profile: "/User3.webp",
    image: "/TestimonialImage3.webp",
  },
  {
    text: "The visit was impressive. It was inspiring. The experience was memeorable.",
    name: "KUSHBOO",
    profile: "/User4.webp",
    image: "/TestimonialImage4.webp",
  },
  {
    text: "Crazy corners, warm lights and endless conversations. Brains & Brands is a vibe that fuels creativity and sparks connections.",
    name: "NISHA DHAR",
    profile: "/User5.webp",
    image: "/TestimonialImage2.webp",
  },
  {
    text: "Top-notch lighting, great sound, and a premium yet comfortable studio space.",
    name: "PRONOY",
    profile: "/User6.webp",
    image: "/SwiperImage3.webp",
  },
  {
    text: "Super versatile space for podcasts, interviews, or product shoots.",
    name: "AUNKAN MANDAL",
    profile: "/User7.webp",
    image: "/L2RSwiperImage1.webp",
  },
  {
    text: "Beautiful studio with great equipment and an even better team. Highly recommend!",
    name: "VEDANT GODBOLE",
    profile: "/User8.webp",
    image: "/TestimonialImage5.webp",
  },
  {
    text: "Impressive setup, engaging hosts, quality production.",
    name: "KULDEEP KAUL",
    profile: "/User9.webp",
    image: "/R2LSwiperImage1.webp",
  },
  {
    text: "Totally dope studio. Inspo everywhere, and they got all the tech you need.",
    name: "GURNOOR SINGH",
    profile: "/User10.webp",
    image: "/StudioSupport.webp",
  },
];


const StoriesSwiper = () => {
  return (
    <section className="w-full pb-16"> 

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={40}
        loop={true}
        speed={600} // fast jump
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        className="w-full"
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            
            <div className="flex flex-col-reverse md:flex-row w-full h-full">

              {/* LEFT */}
              <div className="relative flex flex-col justify-between gap-10 md:w-1/2 bg-black text-[#fff3e9] py-10 px-5 md:p-10">
                
                <p className={`${outfit.className} text-xl md:text-3xl`}>
                  {item.text}
                </p>

                <div className="flex gap-3 items-end">
                  <img
                    src={item.profile}
                    alt={item.name}
                    className="w-[50px] h-[50px] rounded-full object-cover"
                  />
                  <p className="text-base md:text-lg uppercase font-medium">
                    {item.name}
                  </p>
                </div>

                <TestiminialSVG />

              </div>

              {/* RIGHT */}
              <div className="md:w-1/2">
                <img
                  src={item.image}
                  alt="story"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      
      <div className="custom-pagination flex justify-center mt-6 gap-3"></div>

    </section>
  );
};

export default StoriesSwiper;











// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";

// import { Pagination, Autoplay } from "swiper/modules";
// import { outfit } from "@/lib/fonts";

// type Testimonial = {
//   text: string;
//   name: string;
//   profile: string;
//   image: string;
// };

// const testimonials: Testimonial[] = [
//   {
//     text: "This studio is a game changer for creators. Comfortable, well equipped & thoughtfully designed, it sparks ideas & simplifies the entire content creation process!",
//     name: "Pawandeep Singh",
//     profile: "User1.webp",
//     image: "https://brainsandbrands.in/wp-content/uploads/2025/11/pawantestmonial.webp",
//   },
//   {
//     text: "Set up is warm and cozy — perfect vibe for an engaging podcast session.",
//     name: "Vipul Dhar",
//     profile: "User2.webp",
//     image: "https://brainsandbrands.in/wp-content/uploads/2025/10/rectforvn.webp",
//   },
//   {
//     text: "Well-equipped studio with a professional, friendly team. Loved the experience!",
//     name: "Aditi Nayak",
//     profile: "User3.webp",
//     image: "https://brainsandbrands.in/wp-content/uploads/2025/10/Aditirect.webp",
//   },
// ];

// const StoriesSwiper = () => {
//   return (
//     <section className="w-full">

//       <Swiper
//         modules={[Pagination, Autoplay]}
//         slidesPerView={1}
//         spaceBetween={40}
//         loop={true}
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         className="w-full"
//       >
//         {testimonials.map((item, i) => (
//           <SwiperSlide key={i}>
            
//             <div className="flex flex-col-reverse md:flex-row w-full h-full">

//               {/* LEFT CONTENT */}
//               <div className="relative flex flex-col justify-between gap-10 md:w-1/2 bg-black text-[#fff3e9] py-10 px-5 md:p-10">
                
//                 <p className={`${outfit.className} text-xl md:text-3xl font-normal z-10`}>
//                   {item.text}
//                 </p>

//                 <div className="flex gap-3 items-end z-10">
//                   <img
//                     src={item.profile}
//                     alt={item.name}
//                     className="w-[50px] h-[50px] rounded-full object-cover"
//                   />
//                   <p className="text-base md:text-lg uppercase font-medium leading-6">
//                     {item.name}
//                   </p>
//                 </div>

//                 {/* Decorative SVG */}
//                 <svg
//                   width="208"
//                   height="135"
//                   viewBox="0 0 208 135"
//                   fill="none"
//                   className="absolute right-11 bottom-12 hidden md:block"
//                 >
//                   <path
//                     d="M55.662 135H0L58.5916 0H90.8169L55.662 135ZM172.845 135H117.183L175.775 0H208L172.845 135Z"
//                     fill="#393939"
//                   />
//                 </svg>

//               </div>

//               {/* RIGHT IMAGE */}
//               <div className="md:w-1/2">
//                 <img
//                   src={item.image}
//                   alt="story"
//                   loading="lazy"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//             </div>

//           </SwiperSlide>
//         ))}
//       </Swiper>

//     </section>
//   );
// };

// export default StoriesSwiper;