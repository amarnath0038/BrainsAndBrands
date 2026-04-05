import StoriesSwiper from "./StoriesSwiper";

const StoriesSwiperPage = () => {
  return (
    <section className="bg-[#fff3e9] px-6 sm:px-8 md:px-16 lg:px-[123px] py-24 md:py-[140px] lg:py-[200px]">
        <div className="relative flex flex-col gap-10">
            <div className="relative z-10 flex-grow flex flex-col text-left">
                <li className="text-black text-base md:text-lg font-medium mb-5 ml-4 md:ml-5">
                    HEAR FROM THE CREATORS THEMSELVES
                </li>
                <h1 className="text-black text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight max-w-4xl">
                    STORIES FROM THE STUDIO
                </h1>
            </div>

            {/*Stories Swiper */}
            <StoriesSwiper />
        </div>
    </section>
  );
};

export default StoriesSwiperPage;