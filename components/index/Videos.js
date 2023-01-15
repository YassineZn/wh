import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import Video from "./Video";

const Videos = () => {
  const videos = ["C92TalBgZlM", "nNK6eGyYQ20", "5tpRBjiA6Ac", "PGWxCxA55Fo", "TyuX4vJC3hE", "PFUvZHByHQQ"];
  const { t } = useTranslation("videos");
  return (
    <section className="my-container">
      <div className="mx-auto mb-10 flex w-fit flex-col gap-2">
        <h2 className="text-center text-3xl font-bold md:text-4xl">{t("h2")}</h2>
        <div className="h-1 w-full rounded-full bg-primary-400"></div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((id, i) => (
          <div key={i} className="rounded-md bg-white p-4 shadow-md">
            <div className="h-80 w-full overflow-hidden rounded-md">
              <Video id={id} />
            </div>
          </div>
        ))}
      </div>

      <Link href="/news" className="cta mx-auto mt-8 block w-fit text-center ">
        {t("see-all")}
      </Link>
    </section>
  );
};

export default Videos;
