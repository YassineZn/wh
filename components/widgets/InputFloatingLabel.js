import { useRouter } from "next/router";
import { useRef } from "react";

const InputFloatingLabel = ({ As = "input", label, name = "", type = "text", handleChange, style = {}, id }) => {
  const router = useRouter();
  const labelRef = useRef(null);

  const onChange = (e) => {
    if (e.target.value) labelRef.current.classList.add("focused");
    else labelRef.current.classList.remove("focused");
    handleChange(e);
  };
  return (
    <div className={`input-container`} style={style}>
      <As onChange={onChange} name={name} type={type} id={id} className="tw-bg-transparent peer" />
      <label ref={labelRef} htmlFor={id}>
        {label}
      </label>
      <style jsx>
        {`
          .input-container {
            position: relative;
            width: 100%;
            height: ${As == "textarea" ? "100%" : "unset"};
          }
          input,
          textarea {
            border: 1px solid #dddddd;
            outline: none;
            color: #1c1c1c;
            font-size: 1.15rem;
            font-weight: 500;
            width: 100%;
            padding-block: 1.5rem 0.75rem;
            padding-inline: 2rem;
            background-color: #f4f6fa;
            border-radius: 4rem;
            transition: all 0.2s ease-out;
          }
          textarea {
            resize: none;
            width: 100%;
            height: 100%;
            min-height: 8rem;
          }

          label {
            position: absolute;
            left: ${router.locale === "ar" ? "unset" : "2rem"};
            right: ${router.locale === "ar" ? "2rem" : "unset"};
            top: ${As == "textarea" ? "1.5rem" : "50%"};
            transform: translateY(-50%);
            transition: all 0.15s ease-in-out;
            pointer-events: none;
          }

          input:active,
          textarea:active,
          input:focus,
          textarea:focus {
            border: 1px solid rgb(42 147 58 / 50%);
            box-shadow: 0 0 0 0.25rem rgb(42 147 58 / 25%);
          }
          .focused,
          input:focus + label,
          textarea:focus + label,
          input[type="date"] + label {
            top: 1rem;
            color: #767683;
            font-size: 80%;
          }
        `}
      </style>
    </div>
  );
};

export default InputFloatingLabel;
