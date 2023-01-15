import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useRouter } from "next/router";
import React from "react";
import AboutMore from "../components/about/AboutMore";
import Brands from "../components/index/Brands";
import Testimonials from "../components/index/Testimonials";
import WhoAreWe from "../components/index/WhoAreWe";
import PageHeader from "../components/widgets/PageHeader";
import Stats from "../components/widgets/Stats";

export default function About() {
  const { t } = useTranslation("about");
  const router = useRouter();
  const title = router.locale == "ar" ? "عن الشركة" : "About the company";
  return (
    <>
      <PageHeader title={title} />
      <AboutMore />
      <WhoAreWe isTitleHidden={true} />
      <Stats />
      <Testimonials />
      <Brands />
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "whoAreWe", "stats", "footer"])),
    },
  };
}
