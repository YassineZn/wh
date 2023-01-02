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

const WhoAreWe = () => {
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
      img: "/images/whoAreWe/google.png",
    },
    {
      titleAr: "مراحل التوسع في الوطن العربي",
      titleEn: "Expansion Stages in the Arab World",
      descAr:
        "بدأ السيد وليد الشريفي رئيس مجلس الإدارة بتوسيع نشاطات الشركة خارج نطاق الوطن العربي فكانت أول وجهة له هي الجمهورية التركية عام 2017م ابتداءً من مدينة اسطنبول التاريخية وانتهاءً بعموم محافظات الدولة، ليمتد نشاط المرحلة الأولى: الجمهورية اليمنية (مكان التأسيس الأول).\nالمرحلة الثانية: المملكة العربية السعودية ابتداءً من مدينة جدة.\nالمرحلة الثالثة: الإمارات العربية المتحدة ابتداءً من إمارة دبي.\nالمرحلة الرابعة: سلطنة عمان وملكة البحرين ودولة الكويت وقطر.",
      descEN:
        "The company's activity began with imports from Sursera and Korea Europe. Then the work developed to direct sorting and export. Then to assembly operations, sorting and export.",
      img: "/images/whoAreWe/google.png",
    },
    {
      titleAr: "مراحل التوسع خارج الوطن العربي",
      titleEn: "Expansion Stages outside the Arab World",
      descAr:
        "بدأ السيد وليد الشريفي رئيس مجلس الإدارة بتوسيع نشاطات الشركة خارج نطاق الوطن العربي فكانت أول وجهة له هي الجمهورية التركية عام 2017م ابتداءً من مدينة اسطنبول التاريخية وانتهاءً بعموم محافظات الدولة، ليمتد نشاط شركة (WH INTERNATIONAL GROUP) إلى أبعد مدى لتحقيق الأهداف الاستراتيجية والغايات النبيلة للشركة التي تتسم مع بناء التنمية المستدامة للأجيال القادمة.",
      descEN:
        "The company's activity began with imports from Sursera and Korea Europe. Then the work developed to direct sorting and export. Then to assembly operations, sorting and export.",
      img: "/images/whoAreWe/google.png",
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
    <section className="my-container">
      <div>
        <div className="f-ai-c gap-3">
          <div className="h-12 w-1 rounded-full bg-primary-400"></div>
          <h2 className="text-4xl font-bold">{t("h2")}</h2>
        </div>

        <div className="f-ai-c relative mb-12 mt-4 w-fit">
          <div
            className="absolute rounded-t-sm border-b-2 border-primary-400 bg-zinc-100 transition-all"
            style={{
              inset: "0",
              width: `33.33%`,
              left: `${activeStep * 33.33}%`,
            }}
          />
          {STEPS.map(({ titleAr, titleEn, Icon }, i) => (
            <button
              key={i}
              className={`f-ai-c w-48 justify-center gap-2 border-b-2 border-gray-200 py-3 transition-all ${
                i === activeStep ? "text-primary-400" : " text-zinc-600"
              }`}
              onClick={() => swiperRef.current.swiper.slideTo(i)}
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
        spaceBetween={100}
        ref={swiperRef}
        slidesPerView={"auto"}
        grabCursor={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 8000,
        }}
        className={`whoAreWe-swiper `}
        key={router.locale}
      >
        {CONTENT.map(({ titleAr, titleEn, descAr, descEN, img }, i) => (
          <SwiperSlide key={i}>
            <div className="f-ai-c gap-4">
              <ImagePlaceholder
                src={img}
                alt={router.locale === "ar" ? titleAr : titleEn}
                width={300}
                height={300}
                className="cursor-pointer object-contain  transition-all duration-300 hover:scale-105 hover:grayscale-0"
              />
              <div className="max-w-[40rem]">
                <h4 className="text-2xl font-bold">{router.locale === "ar" ? titleAr : titleEn}</h4>
                <p className="mt-4 text-lg opacity-90 ">{router.locale === "ar" ? descAr : descEN}</p>
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
