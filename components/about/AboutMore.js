import { useTranslation } from "next-i18next";
import { ACCORDIANS_ABOUT } from "../../util/consts";
import Accordian from "./Accordian";

const AboutMore = () => {
  const { t } = useTranslation("about");
  return (
    <section className="my-container ">
      <div className="flex flex-col justify-between  gap-20 lg:flex-row">
        <div className="flex-1">
          <h3 className="mb-4 text-xl font-bold">{t("h3")}</h3>
          <p>{t("p")}</p>
        </div>{" "}
        <div className="flex flex-1 flex-col gap-4">
          {ACCORDIANS_ABOUT.map((item, i) => (
            <Accordian key={i} className="flex-1" item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMore;
