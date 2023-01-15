import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import PageHeader from "../components/widgets/PageHeader";

const Index = () => {
  const { t } = useTranslation("branches");
  const router = useRouter();
  const title =
    router.locale == "ar"
      ? "المناسبات والإحتفالات الوطنية"
      : router.locale == "tr"
      ? "Ulusal Etkinlikler"
      : "National Events";
  const EVENTS = [
    {
      titleTr: "Çevre Haftası etkinliği – Süleyman Paşa Belediyesi, Tekirdağ",
      titleEn: "Environmental Week Activity – Süleyman Paşa Municipality, Tekirdağ",
      titleAr: "نشاط أسبوع البيئة - بلدية سليمان باشا ، تكريداج",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/events/1.jpg",
      href: "#",
    },
    {
      titleTr: "Çevre Haftası Etkinliği – Fatih Belediyesi, İstanbul",
      titleEn: "Environmental Week Activity – Fatih Municipality, Istanbul",
      titleAr: "نشاط أسبوع البيئة - بلدية فاتيه ، اسطنبول",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/events/2.jpeg",
      href: "#",
    },
    {
      titleTr: "Çevre Haftası Etkinliği – Fatih Belediyesi, İstanbul",
      titleEn: "Environmental Week Activity – Fatih Municipality, Istanbul",
      titleAr: "نشاط أسبوع البيئة - بلدية فاتيه ، اسطنبول",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/events/3.jpg",
      href: "#",
    },
    {
      titleTr: "Çevre Haftası Etkinliği – Fatih Belediyesi, İstanbul",
      titleEn: "Environmental Week Activity – Fatih Municipality, Istanbul",
      titleAr: "نشاط أسبوع البيئة - بلدية فاتيه ، اسطنبول",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/events/4.jpg",
      href: "#",
    },
    {
      titleTr: "Çevre Haftası Etkinliği – Fatih Belediyesi, İstanbul",
      titleEn: "Environmental Week Activity – Fatih Municipality, Istanbul",
      titleAr: "نشاط أسبوع البيئة - بلدية فاتيه ، اسطنبول",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/events/5.jpg",
      href: "#",
    },
    {
      titleTr: "Çevre Haftası Etkinliği – Fatih Belediyesi, İstanbul",
      titleEn: "Environmental Week Activity – Fatih Municipality, Istanbul",
      titleAr: "نشاط أسبوع البيئة - بلدية فاتيه ، اسطنبول",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/events/6.jpg",
      href: "#",
    },
  ];
  return (
    <>
      <PageHeader title={title} />
      <section className="my-container flex flex-wrap justify-center gap-10 lg:justify-start">
        {EVENTS.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </section>
    </>
  );
};
export default Index;
1;

const Card = ({ item }) => {
  const router = useRouter();

  return (
    <Link
      href={item.href}
      className="flex flex-col overflow-hidden rounded-lg bg-white"
      style={{
        width: "min(100%, 400px)",
      }}
    >
      <div className="relative h-[400px] w-full transition-transform duration-300 group-hover:scale-105">
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
