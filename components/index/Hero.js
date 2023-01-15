import { useTranslation } from "next-i18next";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { useRouter } from "next/router";

const Hero = () => {
  const bgs = ["/images/hero/bg1.webp", "/images/hero/bg2.webp", "/images/hero/bg3.webp"];
  const { t } = useTranslation("hero");
  const router = useRouter();
  return (
    <div className="relative isolate text-white">
      <Swiper
        key={router.locale}
        spaceBetween={80}
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        className="hero-swiper !absolute -z-10 h-full w-full"
      >
        {bgs.map((bg, i) => (
          <SwiperSlide key={i}>
            <Image src={bg} alt="wh-international" fill className="object-cover object-center " />
            <div className="absolute inset-0 bg-black bg-opacity-[0.65]"></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <section className="f-ai-c my-container relative z-20 min-h-[78vh] flex-wrap items-center justify-between gap-4">
        <div className="">
          <h1 className="max-w-[25ch] text-4xl font-semibold !leading-tight md:text-5xl">{t("h1")}</h1>
          <p className="mt-4 max-w-[60ch] text-lg opacity-90  md:mt-6 ">{t("p")}</p>
          <button className="cta mt-8 md:mt-10 lg:mt-14">{t("cta")}</button>
        </div>
        <Image
          src="/images/hero/mr-walid.jpg"
          alt="walid wh-international"
          width={700}
          height={400}
          className="rounded-md object-cover"
        />
      </section>
    </div>
  );
};

export default Hero;
