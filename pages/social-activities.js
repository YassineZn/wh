import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import PageHeader from "../components/widgets/PageHeader";

const SocialActivities = () => {
  const { t } = useTranslation("branches");
  const router = useRouter();
  const title =
    router.locale == "ar" ? "الأنشطة المجتمعية" : router.locale == "tr" ? "Sosyal Faaliyetler" : "Social Activities";
  const ACTIVITIES = [
    {
      titleTr: "Hayırseverler Pazarı’nda Kurban Bayramı Bağışları",
      titleEn: "Eid-al-Adha Donations at the Benevolent Market",
      titleAr: "تبرعات عيد الأضحى في السوق الخيرية",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/activities/1.jpg",
      href: "#",
    },
    {
      titleTr: "Ramazan İftar Sofrası – Sandıklı Belediyesi",
      titleEn: "Ramadan Iftar Table – Sandıklı Municipality",
      titleAr: "طاولة الإفطار الرمضانية - بلدية سندقلي",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/activities/2.jpg",
      href: "#",
    },
    {
      titleTr: "Evlerden Evrene çevre bilinci",
      titleEn: "Environmental awareness from home to home",
      titleAr: "وعي بيئي من المنزل إلى المنزل",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/activities/3.jpg",
      href: "#",
    },
    {
      titleTr: "?İyi düşünüp Geri dönüşelim ne dersini",
      titleEn: "Let's think well and return, what do you think",
      titleAr: "دعونا نفكر جيدًا ونعود ، ما رأيك",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/activities/4.jpg",
      href: "#",
    },
    {
      titleTr: "Ramazan İftar Sofrası – Küçükçekmece Belediyesi",
      titleEn: "Ramadan Iftar Table – Küçükçekmece Municipality",
      titleAr: "طاولة الإفطار الرمضانية - بلدية كوشكشكميشي",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/activities/5.jpeg",
      href: "#",
    },
  ];
  return (
    <>
      <PageHeader title={title} />
      <section className="my-container flex flex-wrap justify-center gap-10 lg:justify-start">
        {ACTIVITIES.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </section>
    </>
  );
};
export default SocialActivities;
1;

const Card = ({ item }) => {
  const router = useRouter();

  return (
    <Link
      href={item.href}
      className="group flex flex-col overflow-hidden rounded-lg bg-white"
      style={{
        width: "min(100%, 300px)",
      }}
    >
      <div className="relative h-[300px] w-full transition-transform duration-300 group-hover:scale-105">
        <Image src={item.image} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-between gap-2 p-4">
        <h3 className="text-center text-2xl font-bold">
          {router.locale == "ar" ? item.titleAr : router.locale == "tr" ? item.titleTr : item.titleEn}
        </h3>
        <p className="mt-2 text-center font-medium text-primary-400">
          {router.locale == "ar" ? item.typeAr : router.locale == "tr" ? item.typeTr : item.typeEn}
        </p>
      </div>
      <style jsx>{`
        p:before,
        p:after {
          content: "";
          display: inline-block;
          width: 8px;
          margin: 0 4px;
          vertical-align: baseline;
          border-bottom: 2px solid;
          margin-bottom: -2px;
          color: var(--primary-400);
        }
      `}</style>
    </Link>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["branches", "footer"])),
    },
  };
}
