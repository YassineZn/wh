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
  const title = router.locale == "ar" ? "البوم الصور" : router.locale == "tr" ? "Foto Albümü" : "Photo Album";

  const PHOTOS = [
    {
      titleTr: "Çevre Haftası etkinliği – Süleyman Paşa Belediyesi, Tekirdağ",
      titleEn: "Environmental Week Activity – Süleyman Paşa Municipality, Tekirdağ",
      titleAr: "نشاط أسبوع البيئة - بلدية سليمان باشا ، تكريداج",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/photo-album/1.jpeg",
      href: "#",
    },
    {
      titleTr: "Çevre Haftası Etkinliği – Fatih Belediyesi, İstanbul",
      titleEn: "Environmental Week Activity – Fatih Municipality, Istanbul",
      titleAr: "نشاط أسبوع البيئة - بلدية فاتيه ، اسطنبول",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/photo-album/2.jpg",
      href: "#",
    },
    {
      titleTr: "Çevre Haftası Etkinliği – Fatih Belediyesi, İstanbul",
      titleEn: "Environmental Week Activity – Fatih Municipality, Istanbul",
      titleAr: "نشاط أسبوع البيئة - بلدية فاتيه ، اسطنبول",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/photo-album/3.jpg",
      href: "#",
    },
    {
      titleTr: "Çevre Haftası Etkinliği – Fatih Belediyesi, İstanbul",
      titleEn: "Environmental Week Activity – Fatih Municipality, Istanbul",
      titleAr: "نشاط أسبوع البيئة - بلدية فاتيه ، اسطنبول",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/photo-album/4.jpeg",
      href: "#",
    },
    {
      titleTr: "Çevre Haftası Etkinliği – Fatih Belediyesi, İstanbul",
      titleEn: "Environmental Week Activity – Fatih Municipality, Istanbul",
      titleAr: "نشاط أسبوع البيئة - بلدية فاتيه ، اسطنبول",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/photo-album/5.jpeg",
      href: "#",
    },
    {
      titleTr: "Çevre Haftası Etkinliği – Fatih Belediyesi, İstanbul",
      titleEn: "Environmental Week Activity – Fatih Municipality, Istanbul",
      titleAr: "نشاط أسبوع البيئة - بلدية فاتيه ، اسطنبول",
      typeTr: title,
      typeEn: title,
      typeAr: title,
      image: "/images/photo-album/6.jpeg",
      href: "#",
    },
  ];
  return (
    <>
      <PageHeader title={title} />
      <section className="my-container flex flex-wrap justify-center gap-10 lg:justify-start">
        {PHOTOS.map((item, i) => (
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
      className="group flex flex-col overflow-hidden rounded-lg text-white"
      style={{
        width: "min(100%, 400px)",
        background: "rgb(159, 133, 49)",
        background: "linear-gradient(0deg, rgba(159, 133, 49, 1) 0%, rgba(236, 187, 31, 1) 100%)",
      }}
    >
      <div className="relative h-[400px] w-full transition-transform duration-300 group-hover:scale-105">
        <Image src={item.image} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-between gap-2 p-8">
        <h3 className="text-center text-2xl font-bold">
          {router.locale == "ar" ? item.titleAr : router.locale == "tr" ? item.titleTr : item.titleEn}
        </h3>
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
