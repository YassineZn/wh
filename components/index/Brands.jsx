import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { motion } from "framer-motion";
import { BRANDS } from "../../util/consts";
import { useRouter } from "next/router";

const Brands = () => {
  const router = useRouter();
  const title = router.locale == "ar" ? "شركاؤنا" : "Our Partners";
  return (
    <>
      <section className="my-container max-w-[1400px] rounded-lg bg-white shadow-xl md:my-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-14 -mt-2 text-center text-2xl font-bold text-secondary-400"
        >
          {title}
        </motion.h2>
        <div className="swiper-container">
          <Swiper
            key={router.locale}
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
            {BRANDS.map(({ title, src }, i) => (
              <SwiperSlide key={i}>
                <div className="img-wrapper">
                  <Image src={src} alt={title} fill className="object-contain" />
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
