import { useRouter } from "next/router";
import React, { useState } from "react";
import InputFloatingLabel from "../../components/widgets/InputFloatingLabel";
import PageHeader from "../../components/widgets/PageHeader";

const Index = () => {
  const router = useRouter();
  let INPUTS = [
    { label: "Name" },
    { label: "Phone" },
    { label: "Email", type: "email" },
    { label: "Type Of Agreement" },
    { label: "Duration Of Agreement" },
  ];
  if (router.locale === "ar")
    INPUTS = [
      { label: "اسم التجاري للشركة" },
      { label: "الهاتف" },
      { label: "البريد الالكتروني", type: "email" },
      { label: "نوع الاتفاقية" },
      { label: "مدة الاتفاقية" },
    ];

  const title =
    router.locale === "ar"
      ? "اتفاقية الشراكة"
      : router.locale === "tr"
      ? "İş Ortağı Anlaşması"
      : "Partnership Agreement";

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
    typeOfAgreement: "",
    durationOfAgreement: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  }
  return (
    <>
      <PageHeader title={title} />
      <section className="my-container max-w-[1200px]">
        <form className="flex flex-col gap-6">
          {INPUTS.map((item, index) => (
            <InputFloatingLabel
              key={index}
              label={item.label}
              name={item.label}
              type={item.type || "text"}
              id={item.label}
              handleChange={handleChange}
            />
          ))}
          <button className="cta gradient w-[150px] !rounded-full transition-all hover:opacity-80">
            {router.locale === "ar" ? "ارسال" : router.locale === "tr" ? "Gönder" : "Send"}
          </button>
        </form>
      </section>
    </>
  );
};

export default Index;
