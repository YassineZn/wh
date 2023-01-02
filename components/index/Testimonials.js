import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import ArrowLong from "../../public/icons/components/ArrowLong";
import { useRouter } from "next/router";
const Testimonials = () => {
  const figures = [
    {
      author: "Alena Pale.",
      text: "I Am Very Happy To Come, I Get Very Good Service With Very Friendly Doctor. I Am Very Happy To Come",
      company: "Google",
      industry: "Healthcare",
      rating: 5,
      image: "/icons/testimonials/bos.png",
    },
    {
      author: "Henrieta U.",
      text: "Just what I was looking for. I am really satisfied with my Doctor. I Am Very Happy To Come",
      company: "Google",
      industry: "Healthcare",
      rating: 4,
      image: "/icons/testimonials/google.png",
    },
    {
      author: "Abraham M.",
      text: "Doctor is the most valuable business resource we have EVER purchased. I Am Very Happy To Come ",
      company: "Google",
      industry: "Healthcare",
      rating: 5,
      image: "/icons/testimonials/bos.png",
    },
  ];

  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const updateIndex = useCallback(() => {
    setCurrentIndex(swiperRef.current.swiper.realIndex);
  }, []);

  // Add event listeners for swiper after initializing
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex);
      }
    };
  }, [updateIndex]);
  return (
    <section key={router.locale}>
      <div className="swiper-container">
        <Swiper
          ref={swiperRef}
          grabCursor={true}
          pagination={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="testimonials-swiper"
        >
          {figures &&
            figures.map((figure, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-wrapper">
                  <Testimonial figure={figure} />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <button
          className="btn-next hidden md:block"
          onClick={() => {
            swiperRef && swiperRef.current.swiper.slideNext();
          }}
        >
          <ArrowLong
            fontSize="3em"
            style={{
              transform: ` ${router.locale == "ar" ? "" : "rotate(180deg)"}`,
            }}
          />
          <div className="blue-circle"></div>
        </button>
      </div>

      <style jsx>{`
        section {
          margin-top: 8rem;
          background-color: var(--secondary-400);
          color: white;
          padding: 4rem 2rem;
          margin-inline: auto;
          position: relative;
        }
        .swiper-container {
          max-width: 1000px;
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-inline: auto;
        }

        .testimonial-wrapper {
          position: relative;
          padding-block: 2rem;
        }
        .btn-next {
          position: relative;
          transform: translateY(-2rem); // because of margin bottom in figure
          cursor: pointer;
          outline: none;
          min-width: 80px;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: #fff;
          overflow: hidden;
          transition: all 0.25s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          color: var(--dark-400);
        }

        .blue-circle {
          position: absolute;
          width: 0px;
          inset: 0;
          background: var(--primary-400);
          transition: width 0.25s ease-out;
          z-index: -1;
          position: absolute;
          border-radius: 50%;
        }
        .btn-next:hover {
          color: #fff;
          background-color: var(--primary-400);
        }
        .btn-next:hover .blue-circle {
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

const Testimonial = ({ figure }) => {
  const router = useRouter();
  const { author, text, company, industry, rating, image } = figure;
  return (
    <figure>
      <figcaption>
        <blockquote>{text}</blockquote>
        <div className="author">
          <div className="author-info">
            <h3>{author}</h3>
            <p>{company}</p>
            <p>{industry}</p>
          </div>
          <Image src={image} alt={author} width={150} height={150} className="objeect-contain" />
        </div>
      </figcaption>
      <style jsx>
        {`
          figure {
            width: 85%;
            margin-inline: auto;
            height: 100%;
            margin-bottom: 4rem;
          }
          blockquote {
            font-size: 2.25rem;
            line-height: 1.34;
            position: relative;
          }

          blockquote::before {
            position: absolute;
            left: ${(router.locale = "ar" ? "unset" : "-1.5rem")};
            right: ${(router.locale = "ar" ? "-1.5rem" : "unset")};
            transform: ${(router.locale = "ar" ? "rotate(180deg)" : "rotate(0deg)")};
            background-image: url("data:image/svg+xml,%3Csvg fill='none' height='31' viewBox='0 0 33 31' width='33' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m32.4 24.1002c0-3.7-2.5-6-6.3-6h-2c.3-7.2 4.1-10.5 8.8-11.30001v-6.599995c-9.3.999995-14.3 7.499995-14.3 18.400005 0 8.6 2.9 11.7 7.5 11.7 3.9 0 6.3-2.7 6.3-6.2zm-18.5 0c0-3.7-2.5-6-6.29999-6h-2c.3-7.2 4.1-10.5 8.79999-11.30001v-6.599995c-9.29999.999995-14.299994 7.499995-14.299994 18.400005 0 8.6 2.900004 11.7 7.500004 11.7 3.89999 0 6.29999-2.7 6.29999-6.2z' fill='%23ccb260'/%3E%3C/svg%3E");
            content: "";
            display: block;
            height: 31px;
            width: 33px;
          }
          .author {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;

            margin-top: 2rem;
          }

          @media (max-width: 800px) {
            blockquote {
              font-size: 1.75rem;
            }
            blockquote::before {
              left: 0px;
              opacity: 0.05;
              transform: scale(2);
            }
          }
        `}
      </style>
    </figure>
  );
};
