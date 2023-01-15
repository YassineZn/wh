import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

import { useRouter } from "next/router";
import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import PageHeader from "../components/widgets/PageHeader";

export default function About() {
  const { t } = useTranslation("branches");
  const router = useRouter();
  const title = router.locale == "ar" ? "فروع الشركة" : "Company branches";
  const BRANCHES = [
    {
      titleAr: "مكتب اسطنبول",
      titleEn: "Istanbul office",
      address: "ankara 4.sk no:15",
      phone1: "+90564564568",
      phone2: " +564564658",
      href: "#",
    },
    {
      titleAr: "مكتب السعودية",
      titleEn: "Saudi office",
      address: "ankara 4.sk no:15",
      phone1: "+90564564568",
      phone2: " +564564658",
      href: "#",
    },
    {
      titleAr: "مكتب دبي",
      titleEn: "Dubai office",
      address: "ankara 4.sk no:15",
      phone1: "+90564564568",
      phone2: " +564564658",
      href: "#",
    },
  ];
  return (
    <>
      <PageHeader title={title} />
      <section className="my-container flex flex-wrap justify-center gap-10">
        {BRANCHES.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </section>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["branches", "footer"])),
    },
  };
}

const Card = ({ item }) => {
  const router = useRouter();
  const { t } = useTranslation("branches");
  return (
    <Link
      href={item.href}
      className="group flex min-w-[350px] flex-col items-center rounded-md bg-secondary-400 py-14 text-center text-white transition-all duration-500 hover:bg-[#f4f7ef] hover:text-secondary-400"
    >
      <>
        <RiSendPlaneFill className="shrink-0 text-5xl text-primary-400" />
        <h3 className="mt-2 text-3xl font-bold">{router.locale == "ar" ? item.titleAr : item.titleEn}</h3>
        <h4 className="mt-10 text-lg opacity-80">{t("address")}:</h4>
        <span className="mt-1 opacity-80">{item.address}</span>

        <h4 className="mt-6 text-lg opacity-80">{t("phone1")}:</h4>
        <span className="mt-1 opacity-80">{item.phone1}</span>

        <h4 className="mt-6 text-lg opacity-80">{t("phone2")}:</h4>
        <span className="mt-1 opacity-80">{item.phone2}</span>
        <button
          className={`gradient mt-10 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full px-6 py-2 transition-all duration-500 group-hover:h-fit group-hover:w-60 ${
            router.locale == "ar" ? "flex-row-reverse" : ""
          }`}
        >
          <span className="invisible absolute select-none whitespace-nowrap text-white opacity-0 group-hover:visible group-hover:static group-hover:opacity-100">
            {router.locale == "ar" ? "زرنا على الخريطة" : "Visit us on the map"}
          </span>
          <svg
            className={`h-10 w-10 shrink-0 translate-x-[2px] -rotate-90 text-white transition-transform`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </>
    </Link>
  );
};
