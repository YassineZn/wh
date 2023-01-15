import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  RiMapPinLine,
  RiPhoneLine,
  RiMailSendLine,
  RiFacebookLine,
  RiTwitterLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { NAV_ITEMS } from "../../util/consts";

const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation("footer");
  return (
    <footer dir={router.locale === "ar" ? "rtl" : "ltr"} className="body-font bg-secondary-400 text-white">
      <div className="my-container mx-auto flex flex-col flex-wrap items-center justify-center gap-10 px-5 py-24 text-center md:flex-nowrap md:gap-20 lg:flex-row lg:text-start">
        <div className="mx-auto max-w-[25rem] flex-shrink-0 text-center md:mx-0 md:text-left">
          <Link href="#">
            <Image src="/icons/logo.webp" width={250} height={250} alt="wh international" className="mx-auto" />
          </Link>
          <p className="mt-4 text-center text-white/90">{t("p")}</p>
          <ul className="mt-4 flex justify-center gap-4 text-2xl ">
            <li className="flex cursor-pointer items-center justify-center rounded-[50%] bg-primary-400 p-2 transition-all hover:opacity-80 active:scale-105">
              <Link href="https://twitter.com/WHInterGroup">
                <RiTwitterLine />
              </Link>
            </li>
            <li className="flex cursor-pointer items-center justify-center rounded-[50%] bg-primary-400 p-2 transition-all hover:opacity-80 active:scale-105">
              <Link href="https://www.facebook.com/Wh.international.group">
                <RiFacebookLine />
              </Link>
            </li>

            <li className="flex cursor-pointer items-center justify-center rounded-[50%] bg-primary-400 p-2 transition-all hover:opacity-80 active:scale-105">
              <Link href="https://www.youtube.com/channel/UC7EKx44xbeWN-m3tkH0dsBw">
                <RiYoutubeLine />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-xl">
          <div className="flex justify-center gap-2 lg:justify-start">
            <RiMapPinLine className="shrink-0 text-2xl text-primary-400" />
            <Link
              href="https://www.google.com/maps/search/++++++++++++++%C4%B0STANBUL+TENS%C4%B0LC%C4%B0L%C4%B0%C4%9E%C4%B0,+AKROS+%C4%B0STANBUL,%26nbsp;BARBAROS+HAYRET%C4%B0NPA%C5%9EA+MAH%C3%87+1995+SK.+NO:1-3+KAT+32,+DAIRE:+489+++++++++++++++ESENYURT%2F%C4%B0STANBUL/@41.0158375,28.6398998,17z/data=!3m1!4b1"
              rel="noopener noreferrer"
              target="_blank"
              className="max-w-[30rem] transition-all hover:text-primary-400"
            >
              İSTANBUL TENSİLCİLİĞİ, AKROS İSTANBUL,&nbsp;BARBAROS HAYRETİNPAŞA MAHÇ 1995 SK. NO:1-3 KAT 32, DAIRE: 489
              ESENYURT/İSTANBUL
            </Link>
          </div>

          <div className="flex justify-center gap-2 lg:justify-start">
            <RiMapPinLine className="shrink-0 text-2xl text-primary-400" />
            <Link
              href="https://www.google.com/maps/place/Bas%C4%B1n+%C4%B0lan+Kurumu+MERS%C4%B0N+%C5%9EUBE+M%C3%9CD%C3%9CRL%C3%9C%C4%9E%C3%9C/@36.7866157,34.5798387,17z/data=!3m1!4b1!4m5!3m4!1s0x1527f5921cb36821:0x1dcb93d41c0958f3!8m2!3d36.7866114!4d34.5820327"
              rel="noopener noreferrer"
              target="_blank"
              className="max-w-[30rem] transition-all hover:text-primary-400"
            >
              MERSİN TENSİLCİLİĞİ - OPTİMA İŞ MERKEZİ GÜVENEVLER MAH. 1947 SK. NO:25/1 KAT:04, DAIRE:09 YENİŞEHİR/MERSİN
            </Link>
          </div>
          <div className="flex justify-center gap-2 lg:justify-start">
            <RiMailSendLine className="shrink-0 text-2xl text-primary-400" />
            <Link
              href="mailto:contact@mail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-all hover:text-primary-400"
            >
              contact@mail.com
            </Link>
          </div>
          <div className="flex justify-center gap-2 lg:justify-start">
            <RiPhoneLine className="shrink-0 text-2xl text-primary-400" />
            <span dir="ltr">+905550999908</span>
          </div>
        </div>

        <ul className="flex flex-col gap-4 text-xl">
          {NAV_ITEMS.map((link, index) => {
            if (link.href)
              return (
                <li key={index}>
                  <Link key={index} href={link.href} className="text-primary-400 transition-all hover:opacity-80">
                    {router.locale === "ar" ? link.titleAr : link.titleEn}
                  </Link>
                </li>
              );
          })}
        </ul>
      </div>
      <div className="my-container bg-secondary-400">
        <p dir="ltr" className="py-2 text-center text-sm text-white">
          © {new Date().getFullYear()} wh-international.group{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
