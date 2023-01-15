import { useRouter } from "next/router";
import { MdKeyboardArrowDown } from "react-icons/md";

const Select = ({ item }) => {
  const router = useRouter();
  return (
    <div className="relative">
      <select className="">
        {item.options.map((option, index) => {
          return <option key={index}>{option.label}</option>;
        })}
      </select>
      <MdKeyboardArrowDown
        className=" absolute z-10 transition-all"
        style={{
          left: router.locale === "ar" ? "1rem" : "unset",
          right: router.locale === "ar" ? "unset" : "1rem",
          top: "1.5rem",
        }}
      />
      <style jsx>{`
        select {
          border: 1px solid #dddddd;
          outline: none;
          color: #1c1c1c;
          font-size: 1.15rem;
          font-weight: 500;
          width: 100%;
          padding: 1rem 2rem;
          background-color: #f4f6fa;
          border-radius: 4rem;
          -webkit-appearance: none;
          appearance: none;
        }
     
      `}</style>
    </div>
  );
};

export default Select;
