import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Video from "../components/index/Video";
import Videos from "../components/index/Videos";
import PageHeader from "../components/widgets/PageHeader";

const Index = () => {
  const { t } = useTranslation("branches");
  const router = useRouter();
  const title = router.locale == "ar" ? "معرض الفيديو" : router.locale == "tr" ? "Video Galerisi" : "Video Gallery";

  const VIDEOS = ["C92TalBgZlM", "nNK6eGyYQ20", "5tpRBjiA6Ac", "PGWxCxA55Fo", "TyuX4vJC3hE", "PFUvZHByHQQ"];

  return (
    <>
      <PageHeader title={title} />
      <section className="my-container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {VIDEOS.map((id, i) => (
          <div key={i} className="rounded-md bg-white p-4 shadow-md">
            <div className="h-80 w-full overflow-hidden rounded-md">
              <Video id={id} />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
export default Index;
1;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["branches", "footer"])),
    },
  };
}
