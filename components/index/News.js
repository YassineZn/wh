import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import ImagePlaceholder from "../widgets/ImagePlaceholder";

const News = () => {
  const router = useRouter();
  const { t } = useTranslation("news");
  const news = [
    {
      titleEn: "News 1",
      titleAr: "الخبر 1",
      descriptionEn: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      descriptionAr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: "/images/news/news1.jpg",
      date: "2021-10-10",
      link: "#",
    },
    {
      titleEn: "News 2",
      titleAr: "الخبر 2",
      descriptionEn: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      descriptionAr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: "/images/news/news2.jpg",
      date: "2021-10-10",
      link: "#",
    },
    {
      titleEn: "News 3",
      titleAr: "الخبر 3",
      descriptionEn: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      descriptionAr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: "/images/news/news3.jpg",
      date: "2021-10-10",
      link: "#",
    },
    {
      titleEn: "News 4",
      titleAr: "الخبر 4",
      descriptionEn: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      descriptionAr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: "/images/news/news4.jpg",
      date: "2021-10-10",
      link: "#",
    },
  ];
  return (
    <section className="my-container">
      <div className="f-ai-c justify-between">
        <h2 className="text-4xl font-bold">{t("h2")}</h2>
        <Link href="/news" className="cta">
          {t("see-all")}
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {news.map(({ titleEn, titleAr, descriptionEn, descriptionAr, image, date, link }, i) => (
          <div key={i} className="rounded-md bg-white  shadow-md">
            <div className="h-48 w-full overflow-hidden rounded-md">
              <ImagePlaceholder src={image} width={800} height={400} className="h-full w-full object-cover" />
            </div>
            <div className="f-ai-c flex-wrap justify-between gap-1 px-4">
              <h3 className="mt-4 text-xl font-bold">{router.locale == "ar" ? titleAr : titleEn}</h3>
              <p className="mt-2 text-sm text-gray-500">{date}</p>
            </div>
            <p className="mt-2 py-2 px-4 text-gray-500">{router.locale == "ar" ? descriptionAr : descriptionEn}</p>
            <a href={link} className="mt-4 block px-4 pb-4 text-blue-500">
              {t("read-more")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
