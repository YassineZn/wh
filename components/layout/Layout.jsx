import { useRouter } from "next/router";
import Footer from "./Footer";
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Nav />
      <main dir={router.locale === "ar" ? "rtl" : "ltr"} className="">
        {children}
      </main>
      <Footer />
    </>
  );
};
