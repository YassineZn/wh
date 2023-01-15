import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React from "react";
import PageHeader from "../components/widgets/PageHeader";
import Brands from "../components/index/Brands";

const Index = () => {
  const router = useRouter();
  const title = router.locale == "ar" ? "شركاؤنا" : router.locale == "tr" ? "Ortaklarımız" : "Our Index";
  return (
    <>
      <PageHeader title={title} />
      <Brands />
    </>
  );
};

export default Index;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["footer"])),
    },
  };
}
