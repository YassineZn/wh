import { useTranslation } from "next-i18next";
import ImagePlaceholder from "../widgets/ImagePlaceholder";

const Hero = () => {
  const { t } = useTranslation("hero");
  return (
    <section className="my-container">
      <div className="f-ai-c flex-wrap justify-between gap-4">
        <div className="">
          <h1 className="max-w-[25ch] text-4xl font-semibold !leading-tight md:text-5xl">{t("h1")}</h1>
          <p className="mt-4 max-w-[60ch] text-lg opacity-90  md:mt-6 ">{t("p")}</p>
          <button className="cta mt-8 md:mt-10 lg:mt-14">{t("cta")}</button>
        </div>
        <ImagePlaceholder width={700} height={600} className="object-cover" />
      </div>
    </section>
  );
};

export default Hero;
