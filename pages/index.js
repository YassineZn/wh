import Hero from "../components/index/Hero";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import WhoAreWe from "../components/index/WhoAreWe";
import Stats from "../components/widgets/Stats";
import News from "../components/index/News";
import Videos from "../components/index/Videos";
import Testimonials from "../components/index/Testimonials";
import Brands from "../components/index/Brands";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoAreWe />
      <Stats />
      <News />
      <Videos />
      <Testimonials />
      <Brands />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["hero", "whoAreWe", "stats", "news", "videos"])),
    },
  };
}
