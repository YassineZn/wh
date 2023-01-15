import { useTranslation } from "next-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import ImagePlaceholder from "../widgets/ImagePlaceholder";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Vision from "/public/icons/components/whoAreWe/Vision";
import Goals from "/public/icons/components/whoAreWe/Goals";
import Mission from "/public/icons/components/whoAreWe/Mission";
import { useRef } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import Stats from "../widgets/Stats";

const WhoAreWe = ({ isTitleHidden }) => {
  const router = useRouter();
  const { t } = useTranslation("whoAreWe");

  const swiperRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const CONTENT = [
    {
      titleAr: "مراحل التطور",
      titleEn: "Development Stages",
      descAr:
        "بدأ نشاط الشركة مقتصرا على الاستيراد من سورسرا وكوريا اوربا.ثم تطور العمل إلى الفرز المباشر والتصدير.ثم إلى عمليات التجميع والفرز والتصدير.",
      descEN:
        "The company's activity began with imports from Sursera and Korea Europe. Then the work developed to direct sorting and export. Then to assembly operations, sorting and export.",
      img: "/icons/logo.webp",
    },
    {
      titleAr: "مراحل التوسع في الوطن العربي",
      titleEn: "Expansion Stages in the Arab World",
      descAr:
        "بدأ السيد وليد الشريفي رئيس مجلس الإدارة بتوسيع نشاطات الشركة خارج نطاق الوطن العربي فكانت أول وجهة له هي الجمهورية التركية عام 2017م ابتداءً من مدينة اسطنبول التاريخية وانتهاءً بعموم محافظات الدولة، ليمتد نشاط المرحلة الأولى: الجمهورية اليمنية (مكان التأسيس الأول).\nالمرحلة الثانية: المملكة العربية السعودية ابتداءً من مدينة جدة.\nالمرحلة الثالثة: الإمارات العربية المتحدة ابتداءً من إمارة دبي.\nالمرحلة الرابعة: سلطنة عمان وملكة البحرين ودولة الكويت وقطر.",
      descEN:
        "The company's activity began with imports from Sursera and Korea Europe. Then the work developed to direct sorting and export. Then to assembly operations, sorting and export.",
      img: "/icons/logo.webp",
    },
    {
      titleAr: "مراحل التوسع خارج الوطن العربي",
      titleEn: "Expansion Stages outside the Arab World",
      descAr:
        "بدأ السيد وليد الشريفي رئيس مجلس الإدارة بتوسيع نشاطات الشركة خارج نطاق الوطن العربي فكانت أول وجهة له هي الجمهورية التركية عام 2017م ابتداءً من مدينة اسطنبول التاريخية وانتهاءً بعموم محافظات الدولة، ليمتد نشاط شركة (WH INTERNATIONAL GROUP) إلى أبعد مدى لتحقيق الأهداف الاستراتيجية والغايات النبيلة للشركة التي تتسم مع بناء التنمية المستدامة للأجيال القادمة.",
      descEN:
        "The company's activity began with imports from Sursera and Korea Europe. Then the work developed to direct sorting and export. Then to assembly operations, sorting and export.",
      img: "/icons/logo.webp",
    },
  ];
  const STEPS = [
    {
      titleAr: "الرؤية",
      titleEn: "Vision",
      Icon: Vision,
    },
    {
      titleAr: "الرسالة",
      titleEn: "Mission",
      Icon: Mission,
    },
    {
      titleAr: "الأهداف",
      titleEn: "Goals",
      Icon: Goals,
    },
  ];

  // Get the index of the current slide (autoplaying)
  const updateIndex = useCallback(() => {
    setActiveStep(swiperRef.current.swiper.realIndex);
  }, []);
  // useEffect(() => {
  //   swiperRef.current.swiper.slideTo(activeStep);
  // }, [activeStep]);

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
    <section key={router.locale} className="my-container">
      <div>
        {!isTitleHidden && (
          <div className="f-ai-c mx-auto mb-10 w-fit flex-col justify-center gap-2">
            <h2 className="text-center text-3xl font-bold md:text-4xl">{t("h2")}</h2>
            <div className="h-1 w-full rounded-full bg-primary-400"></div>
          </div>
        )}

        <div
          className="f-ai-c relative mx-auto  w-fit"
          style={{
            width: "min(800px, 100%)",
          }}
        >
          <div
            className="absolute rounded-t-sm border-b-2 border-primary-400 bg-zinc-100 transition-all"
            style={{
              height: "100%",
              width: `33.33%`,
              left: `${router.locale != "ar" ? activeStep * 33.33 : "unset"}%`,
              right: `${router.locale == "ar" ? activeStep * 33.33 : "unset"}%`,
            }}
          />
          {STEPS.map(({ titleAr, titleEn, Icon }, i) => (
            <button
              key={i}
              className={`f-ai-c w-32 justify-center gap-2 border-b-2 border-gray-200 py-3 transition-all md:w-48 lg:w-full ${
                i === activeStep ? "text-primary-400" : " text-zinc-600"
              }`}
              onClick={() => {
                swiperRef.current.swiper.slideTo(i === 0 ? 1 : i === 1 ? 2 : 0);
                setActiveStep(i);
              }}
            >
              <Icon className="z-10" />
              <h3 className="z-10 text-xl font-semibold ">{router.locale === "ar" ? titleAr : titleEn}</h3>
              {/* <div
                  className={`h-6 w-6 rounded-[50%]  border-[6px]
                ${i === activeStep ? "bg-primary-400 shadow-2xl " : "border-white bg-gray-400"}
                
                `}
                /> */}
            </button>
          ))}
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 8000,
        }}
        className={`whoAreWe-swiper mt-20`}
      >
        {CONTENT.map(({ titleAr, titleEn, descAr, descEN, img }, i) => (
          <SwiperSlide key={i}>
            <div className="f-ai-c flex-wrap justify-center gap-20 md:flex-nowrap lg:gap-28">
              <Image
                src={img}
                alt={router.locale === "ar" ? titleAr : titleEn}
                width={300}
                height={300}
                className="object-contain"
              />
              <div className="max-w-[40rem]">
                <h4 className="text-center text-2xl font-bold">{router.locale === "ar" ? titleAr : titleEn}</h4>
                <p className="mt-4 text-center text-lg opacity-90">{router.locale === "ar" ? descAr : descEN}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .step:after {
          content: "";
          position: absolute;
          bottom: 11px;
          left: 0px;
          width: 100%;
          height: 1px;
          background-image: linear-gradient(90deg, currentColor, currentColor 50%, transparent 50%, transparent 100%);
          background-size: 10px;
        }
      `}</style>
    </section>
  );
};

export default WhoAreWe;
