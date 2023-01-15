import { useRouter } from "next/router";
import React, { useState } from "react";
import InputFloatingLabel from "../../components/widgets/InputFloatingLabel";
import PageHeader from "../../components/widgets/PageHeader";
import Select from "../../components/widgets/Select";

const Index = () => {
  const router = useRouter();
  let INPUTS = [
    { label: "Name In English" },
    { label: "Name In Arabic" },

    { label: "Date Of Birth", type: "date" },

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
      { label: "اسم باللغة الانجليزية" },
      { label: "اسم باللغة العربية" },
      { label: "تاريخ الميلاد", type: "date" },
      {
        label: "نوع الاقامة",
        options: [
          { label: "سياحية" },
          { label: "علاجية" },
          { label: "طالب" },
          { label: "عمل" },
          { label: "مؤقتة" },
          { label: "اخرى" },
        ],
        type: "select",
      },
      { label: "مكان الاقامة" },
      {
        label: "الحالة الاجتماعية",
        options: [{ label: "متزوج" }, { label: "اعزب" }, { label: "مطلق" }, { label: "ارمل" }, { label: "اخرى" }],
        type: "select",
      },
      {
        label: "نوع العمل",
        options: [
          { label: "موظف" },
          { label: "متقاعد" },
          { label: "موظف حكومي" },
          { label: "موظف خاص" },
          { label: "اخرى" },
        ],
        type: "select",
      },
      { label: "التخصص" },

      { label: "الهاتف" },
      { label: "البريد الالكتروني", type: "email" },
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
