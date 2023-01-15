import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PageHeader from "../../components/widgets/PageHeader";

const Index = () => {
  const router = useRouter();
  const title =
    router.locale == "ar" ? "خدمات البيئة" : router.locale == "tr" ? "Çevre Hizmetleri" : "Environmental Services";

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
          <Card key={i} item={item} pageTitle={title} />
        ))}
      </section>
    </>
  );
};
export default Index;
1;

const Card = ({ item, pageTitle }) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <Link
      href={item.href}
      className="relative flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white p-5 shadow-lg"
      style={{
        width: "min(100%, 400px)",
      }}
    >
      <div className="tag">{pageTitle}</div>
      <div className="relative h-[250px] w-full transition-transform duration-300 group-hover:scale-105">
        <Image src={item.image} fill className="rounded-md object-cover" alt={item.titleEn} />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2">
        <h3 className=" mt-8 text-2xl font-bold">
          {router.locale == "ar" ? item.titleAr : router.locale == "tr" ? item.titleTr : item.titleEn}
        </h3>
        <p className="mt-4 font-bold text-primary-400 transition-all hover:opacity-80">{t("read-more")}</p>
      </div>
      <style jsx>{`
        .tag {
          position: absolute;
          top: 2.5rem;
          right: ${router.locale == "ar" ? "2.5rem" : "unset"};
          left: ${router.locale == "ar" ? "unset" : "2.5rem"};

          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          font-weight: 700;
          color: #fff;
          border-radius: 2rem;
          z-index: 1;
          background: -webkit-linear-gradient(left, #ccb260 0%, #2f374a 50%, #ccb260 100%);
          background-size: 300%, 1px;
          background-position: 0%;
        }
      `}</style>
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
