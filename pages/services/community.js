import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PageHeader from "../../components/widgets/PageHeader";

const Index = () => {
  const router = useRouter();
  const title =
    router.locale == "ar" ? "خدمات المجتمع" : router.locale == "tr" ? "Toplum Hizmetleri" : "Community Services";

  const SERVICES = [
    {
      titleTr: "Çevre Haftası etkinliği – Süleyman Paşa Belediyesi, Tekirdağ",
      titleEn: "Environmental Week Activity – Süleyman Paşa Municipality, Tekirdağ",
      titleAr: "نشاط أسبوع البيئة - بلدية سليمان باشا ، تكريداج",

      descTr: "Çevre Ha sda etkinliği – Süleyman Paşa Belediyesi, Tekirdağ",
      descEn: "Environmental Week Activity – Süleyman Paşa Municipality, Tekirdağ",
      descAr: "نشاط أسبوع البيئة - بلدي نشاط أسبوع البيئة - بلدية ة سليمان باشا ، تكريداج",

      date: "2021-09-01",

      image: "/images/events/1.jpg",
      href: "#",
    },
    {
      titleTr: "Çevre Haftası etkinliği – Süleyman Paşa Belediyesi, Tekirdağ",
      titleEn: "Environmental Week Activity – Süleyman Paşa Municipality, Tekirdağ",
      titleAr: "نشاط أسبوع البيئة - بلدية سليمان باشا ، تكريداج",

      descTr: "Çevre Ha sda etkinliği – Süleyman Paşa Belediyesi, Tekirdağ",
      descEn: "Environmental Week Activity – Süleyman Paşa Municipality, Tekirdağ",
      descAr: "نشاط أسبوع البيئة - بلدي نشاط أسبوع البيئة - بلدية ة سليمان باشا ، تكريداج",

      date: "2021-09-01",

      image: "/images/events/1.jpg",
      href: "#",
    },
    {
      titleTr: "Çevre Haftası etkinliği – Süleyman Paşa Belediyesi, Tekirdağ",
      titleEn: "Environmental Week Activity – Süleyman Paşa Municipality, Tekirdağ",
      titleAr: "نشاط أسبوع البيئة - بلدية سليمان باشا ، تكريداج",

      descTr: "Çevre Ha sda etkinliği – Süleyman Paşa Belediyesi, Tekirdağ",
      descEn: "Environmental Week Activity – Süleyman Paşa Municipality, Tekirdağ",
      descAr: "نشاط أسبوع البيئة - بلدي نشاط أسبوع البيئة - بلدية ة سليمان باشا ، تكريداج",

      date: "2021-09-01",

      image: "/images/events/1.jpg",
      href: "#",
    },
    {
      titleTr: "Çevre Haftası etkinliği – Süleyman Paşa Belediyesi, Tekirdağ",
      titleEn: "Environmental Week Activity – Süleyman Paşa Municipality, Tekirdağ",
      titleAr: "نشاط أسبوع البيئة - بلدية سليمان باشا ، تكريداج",

      descTr: "Çevre Ha sda etkinliği – Süleyman Paşa Belediyesi, Tekirdağ",
      descEn: "Environmental Week Activity – Süleyman Paşa Municipality, Tekirdağ",
      descAr: "نشاط أسبوع البيئة - بلدي نشاط أسبوع البيئة - بلدية ة سليمان باشا ، تكريداج",

      date: "2021-09-01",

      image: "/images/events/1.jpg",
      href: "#",
    },
    {
      titleTr: "Çevre Haftası etkinliği – Süleyman Paşa Belediyesi, Tekirdağ",
      titleEn: "Environmental Week Activity – Süleyman Paşa Municipality, Tekirdağ",
      titleAr: "نشاط أسبوع البيئة - بلدية سليمان باشا ، تكريداج",

      descTr: "Çevre Ha sda etkinliği – Süleyman Paşa Belediyesi, Tekirdağ",
      descEn: "Environmental Week Activity – Süleyman Paşa Municipality, Tekirdağ",
      descAr: "نشاط أسبوع البيئة - بلدي نشاط أسبوع البيئة - بلدية ة سليمان باشا ، تكريداج",

      date: "2021-09-01",

      image: "/images/events/1.jpg",
      href: "#",
    },
    {
      titleTr: "Çevre Haftası etkinliği – Süleyman Paşa Belediyesi, Tekirdağ",
      titleEn: "Environmental Week Activity – Süleyman Paşa Municipality, Tekirdağ",
      titleAr: "نشاط أسبوع البيئة - بلدية سليمان باشا ، تكريداج",

      descTr: "Çevre Ha sda etkinliği – Süleyman Paşa Belediyesi, Tekirdağ",
      descEn: "Environmental Week Activity – Süleyman Paşa Municipality, Tekirdağ",
      descAr: "نشاط أسبوع البيئة - بلدي نشاط أسبوع البيئة - بلدية ة سليمان باشا ، تكريداج",

      date: "2021-09-01",

      image: "/images/events/1.jpg",
      href: "#",
    },
    {
      titleTr: "Çevre Haftası etkinliği – Süleyman Paşa Belediyesi, Tekirdağ",
      titleEn: "Environmental Week Activity – Süleyman Paşa Municipality, Tekirdağ",
      titleAr: "نشاط أسبوع البيئة - بلدية سليمان باشا ، تكريداج",

      descTr: "Çevre Ha sda etkinliği – Süleyman Paşa Belediyesi, Tekirdağ",
      descEn: "Environmental Week Activity – Süleyman Paşa Municipality, Tekirdağ",
      descAr: "نشاط أسبوع البيئة - بلدي نشاط أسبوع البيئة - بلدية ة سليمان باشا ، تكريداج",

      date: "2021-09-01",

      image: "/images/events/1.jpg",
      href: "#",
    },
  ];
  return (
    <>
      <PageHeader title={title} />
      <section className="my-container flex flex-wrap justify-center gap-10 lg:justify-start">
        {SERVICES.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </section>
    </>
  );
};
export default Index;
1;

const Card = ({ item }) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <Link
      href={item.href}
      className="flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white p-5 shadow-lg"
      style={{
        width: "min(100%, 400px)",
      }}
    >
      <div className="relative h-[250px] w-full transition-transform duration-300 group-hover:scale-105">
        <Image src={item.image} fill className="rounded-md object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2 ">
        <span className="mb-2 mt-1 font-bold text-gray-600">{item.date}</span>
        <h3 className=" text-2xl font-bold">
          {router.locale == "ar" ? item.titleAr : router.locale == "tr" ? item.titleTr : item.titleEn}
        </h3>
        <p className="truncate-3">
          {router.locale === "ar" ? item.descAr : router.locale === "tr" ? item.descTr : item.descEn}
        </p>
        <p className="mt-4 font-bold text-primary-400 transition-all hover:opacity-80">{t("read-more")}</p>
      </div>
    </Link>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["footer", "common"])),
    },
  };
}
