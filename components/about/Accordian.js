import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

const Accordian = ({ item, isOpenAtStart = false, className }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(isOpenAtStart);
  return (
    <div className={className}>
      <button
        type="button"
        className="gradient flex w-full cursor-pointer items-center justify-between rounded-full border border-b-0 border-gray-200 py-4 px-10 text-xl font-semibold text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="f-ai-c gap-2">{router.locale == "ar" ? item.titleAr : item.titleEn}</span>
        <svg
          className={`h-6 w-6 shrink-0 ${isOpen ? "rotate-180" : ""} transition-transform`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <p className="py-4 px-10 font-light">{router.locale == "ar" ? item.descAr : item.descEn}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordian;
