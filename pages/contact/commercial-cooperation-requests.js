import { useRouter } from "next/router";
import React, { useState } from "react";
import InputFloatingLabel from "../../components/widgets/InputFloatingLabel";
import PageHeader from "../../components/widgets/PageHeader";
import Select from "../../components/widgets/Select";

const Index = () => {
  const router = useRouter();
  let INPUTS = [
    { label: "Name" },
    { label: "Phone" },
    { label: "Email", type: "email" },
    {
      label: "Type Of Entity",
      options: [{ label: "Institution" }, { label: "Company" }, { label: "Institution" }],
      type: "select",
    },
    {
      label: "Type Of Agreement Or Cooperation",
      options: [{ label: "Commercial Cooperation" }, { label: "Charity Cooperation" }, { label: "Other" }],
      type: "select",
    },
  ];
  if (router.locale === "ar")
    INPUTS = [
      { label: "اسم الجهة" },
      { label: "الهاتف" },
      { label: "البريد الالكتروني", type: "email" },
      { label: "نوع الجهة", options: [{ label: "مؤسسة" }, { label: "شركة" }, { label: "مؤسسة" }], type: "select" },
      {
        label: "نوع الاتفاقية أو نوع التعاون",
        options: [{ label: "تعاون تجاري" }, { label: "تعاون خيري" }, { label: "اخر" }],
        type: "select",
      },
    ];

  const title =
    router.locale === "ar"
      ? "طلبات التعاون التجاري"
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
          {INPUTS.map((item, index) => {
            if (item.type === "select") return <Select item={item} />;
            else
              return (
                <InputFloatingLabel
                  label={item.label}
                  name={item.label}
                  type={item.type || "text"}
                  id={item.label}
                  handleChange={handleChange}
                />
              );
          })}
          <button className="cta gradient w-[150px] !rounded-full transition-all hover:opacity-80">
            {router.locale === "ar" ? "ارسال" : router.locale === "tr" ? "Gönder" : "Send"}
          </button>
        </form>
      </section>
    </>
  );
};

export default Index;
