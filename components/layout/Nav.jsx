import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Hamburger from "../widgets/Hamburger";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Nav = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const ulRef = useRef(null);

  const closeNavOnResize = () => {
    if (window.innerWidth >= 767) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", closeNavOnResize);
    return () => {
      window.removeEventListener("resize", closeNavOnResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.querySelector("html").classList.add("overflow-hidden");
      ulRef.current.classList.add("active");
    } else {
      document.querySelector("html").classList.remove("overflow-hidden");
      ulRef.current.classList.remove("active");
    }
  }, [isOpen]);

  const navItems = [
    {
      titleEn: "Home",
      titleAr: "الرئيسية",
      href: "/",
    },
    {
      titleEn: "Who we are",
      titleAr: "من نحن",
      items: [
        {
          titleEn: "About us",
          titleAr: "عن الشركة",
          href: "/about",
        },
        {
          titleEn: "Company branches",
          titleAr: "فروع الشركة",
          href: "/branches",
        },
        {
          titleEn: "Company management",
          titleAr: "إدارة الشركة",
          items: [
            { titleEn: "Board of directors", titleAr: "مجلس الإدارة", href: "/board" },
            {
              titleEn: "Executive management",
              titleAr: "إدارة التنفيذية",
              items: [
                {
                  titleEn: "Management team",
                  titleAr: "فريق الإدارة",
                  href: "/management",
                },
                {
                  titleEn: "Board of directors",
                  titleAr: "مجلس الإدارة",
                  href: "/board",
                },
                {
                  titleEn: "Executive management",
                  titleAr: "إدارة التنفيذية",
                  href: "/executive",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      titleEn: "Activities and events",
      titleAr: "الأنشطة و الفعاليات",
      items: [
        {
          titleAr: "الأنشطة المجتمعية",
          titleEn: "Social activities",
          href: "/social-activities",
        },
        {
          titleAr: "المناسبات و الإحتفالات الوطنية",
          titleEn: "National events",
          href: "/national-events",
        },
      ],
    },
    {
      titleAr: "المركز الإعلامي",
      titleEn: "Media center",
      items: [
        {
          titleAr: "الأخبار و المقالات",
          titleEn: "News and articles",
          href: "/news-articles",
        },
        {
          titleAr: "ألبوم الصور",
          titleEn: "Photo album",
          href: "/photo-album",
        },
        {
          titleAr: "معرض الفيديو",
          titleEn: "Video gallery",
          href: "/video-gallery",
        },
      ],
    },
    {
      titleAr: "شركاؤنا",
      titleEn: "Our partners",
      href: "/partners",
    },
    {
      titleAr: "دليل خدماتنا",
      titleEn: "Our services",
      href: "/services",
    },
    {
      titleAr: "نماذج الطلبات",
      titleEn: "Request forms",
      href: "/request-forms",
    },
  ];
  return (
    <header dir={router.locale === "ar" ? "rtl" : "ltr"}>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="my-container f-ai-c relative z-20 justify-between py-6"
      >
        <Link href="/" className="text-2xl font-semibold md:text-3xl">
          Logo
          {/* <img src="/logo.png" alt="logo" width={75} height={75} className="logo object-contain" /> */}
        </Link>

        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} handleCLick={() => {}} className="md:hidden" />

        <ul
          onClick={() => setIsOpen(false)}
          ref={ulRef}
          className="menu-on-mobile f-ai-c mr-20 gap-10  md:static md:translate-x-0"
        >
          <li className="relative h-8 w-8 overflow-hidden rounded-[50%]">
            {router.locale == "ar" ? (
              <Link href={router.asPath} locale="en">
                <Image src="/icons/nav/english-flag.svg" alt="english" fill className="object-cover" />
              </Link>
            ) : (
              <Link href={router.asPath} locale="ar">
                <Image src="/icons/nav/arabic-flag.svg" alt="arabic" fill className="object-cover" />
              </Link>
            )}
          </li>
          {navItems.map((item, index) => (
            <li key={index} className="text-lg">
              <NavItem item={item} />
            </li>
          ))}
        </ul>

        <style jsx>{`
          @media (max-width: 767px) {
            .menu-on-mobile {
              position: fixed;
              inset: 0;
              transform: translateX(100%);
              font-size: 1.5rem;
              line-height: 2rem;
              font-weight: 500;
              text-align: center;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              backdrop-filter: blur(8px);
              transition: transform 300ms;
              background-color: rgba(255, 255, 255, 0.8);
            }
            .active {
              transform: translateX(0);
            }
          }
        `}</style>
      </motion.nav>
    </header>
  );
};

const NavItem = ({ item, className = "top-full left-0", isNested }) => {
  const router = useRouter();
  const title = router.locale === "ar" ? item.titleAr : item.titleEn;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {item.items ? (
        <div className="relative " onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          <span className={`f-ai-c cursor-pointer gap-1 ${isOpen ? "text-primary-400" : ""}`}>
            {title}
            <MdKeyboardArrowDown className={`${isNested ? "-rotate-90" : ""}`} />
          </span>
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`absolute flex min-w-[15rem] flex-col rounded-md bg-white shadow-lg ${className}`}
              >
                {item.items.map((nestedItem, index) => (
                  <li key={index} className="p-4">
                    <NavItem item={nestedItem} className="top-0 left-full" isNested />
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link href={item.href} className="">
          {title}
        </Link>
      )}
    </>
  );
};
