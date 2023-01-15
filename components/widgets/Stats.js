import AnimatedNumber from "react-animated-number";
import { useTranslation } from "next-i18next";
import { FiMap } from "react-icons/fi";
import { BsPeople, BsAward } from "react-icons/bs";
import { MdOutlineEventNote } from "react-icons/md";

const Stats = () => {
  const { t } = useTranslation("stats");
  return (
    <section className="my-8 bg-secondary-400 text-white md:my-10 lg:my-16">
      <div
        className="my-container justify-center py-10 lg:justify-between"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        <Item number={100} title={t("stats1")} Icon={FiMap} symbol="+" />
        <Item number={200} title={t("stats2")} Icon={BsPeople} symbol="+" />
        <Item number={500} title={t("stats3")} Icon={BsAward} symbol="+" />
        <Item number={400} title={t("stats4")} Icon={MdOutlineEventNote} symbol="+" />
      </div>
    </section>
  );
};

export default Stats;
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Item = ({ number, title, symbol, Icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [n, setN] = useState(0);

  useEffect(() => {
    isInView && setN(number);
  }, [isInView]);
  return (
    <>
      <div
        ref={ref}
        style={{ textAlign: "center" }}
        className={"f-ai-c item flex-1 flex-col justify-center rounded-xl border-2 border-primary-400 p-10 shadow-lg"}
      >
        <Icon className="text-5xl" />
        <div className="f-ai-c mt-1 gap-1 text-3xl font-semibold lg:text-4xl">
          <AnimatedNumber
            value={n}
            formatValue={(n) => n.toFixed(0)}
            frameStyle={(percentage) => (percentage > 70 && percentage < 90 ? { opacity: 0.5 } : {})}
            duration={2000}
          />
          <p className="text-4xl">{symbol}</p>
        </div>

        <p
          className="text-light text-center font-medium tracking-wide"
          style={{
            fontSize: " 140%",
          }}
        >
          {title}
        </p>
      </div>
    </>
  );
};
