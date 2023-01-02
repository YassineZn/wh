import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

const Videos = () => {
  const videos = [
    "https://www.youtube.com/embed/1Q8fG0TtVAY",
    "https://www.youtube.com/embed/1Q8fG0TtVAY",
    "https://www.youtube.com/embed/1Q8fG0TtVAY",
    "https://www.youtube.com/embed/1Q8fG0TtVAY",
    "https://www.youtube.com/embed/1Q8fG0TtVAY",
    "https://www.youtube.com/embed/1Q8fG0TtVAY",
  ];
  const { t } = useTranslation("videos");
  return (
    <section className="my-container">
      <div className="f-ai-c justify-between">
        <h2 className="text-4xl font-bold">{t("h2")}</h2>
        <Link href="/news" className="cta">
          {t("see-all")}
        </Link>
      </div>{" "}
      <p className="mt-2 mb-4">{t("desc")}</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <div key={i} className="rounded-md bg-white p-4 shadow-md">
            <div className="h-80 w-full overflow-hidden rounded-md">
              <iframe
                width="100%"
                height="100%"
                src={video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;
