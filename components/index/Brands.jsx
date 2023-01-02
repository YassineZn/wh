import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { motion } from "framer-motion";

const Brands = () => {
  const BRANDS = [
    {
      title: "Google",
      img: "/icons/brands/google.png",
    },
    {
      title: "bos",
      img: "/icons/brands/bos.png",
    },
    {
      title: "Youtube",
      img: "/icons/brands/youtube.png",
    },
    {
      title: "bucks",
      img: "/icons/brands/bucks.png",
    },
  ];
  return (
    <>
      <section className="my-container rounded-md bg-white shadow-xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center text-2xl font-bold text-secondary-400"
        >
          These brands trust us
        </motion.h2>
        <div className="swiper-container">
          <Swiper
            spaceBetween={80}
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 1000,
            }}
            className="brands-swiper"
          >
            {BRANDS.map(({ title, img }, i) => (
              <SwiperSlide key={i}>
                <div className="img-wrapper">
                  <Image src={img} alt={title} fill className="object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <style jsx>{`
        .img-wrapper {
          width: 100px;
          height: 100px;
          position: relative;
        }
      `}</style>
    </>
  );
};

export default Brands;
