import React, { useState } from "react";
import { FormWrapper, InputWrapper } from "./styles";
import { InputProps } from "../../types";
import { IconEye } from "../Icons";

export const Input: React.FC<InputProps> = ({
  label,
  onChange,
  type = "text",
  placeholder,
  value,
  id,
  name,
  error,
}) => {
  const [inputType, setInputType] = useState(type);
  return (
    <FormWrapper>
      {label && <p>{label}</p>}
      <InputWrapper iserror={error} suffix={type}>
        <input
          type={inputType}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {type === "password" && (
          <div
            onClick={() =>
              setInputType((prev) => (prev === "text" ? "password" : "text"))
            }
          >
            <IconEye />
          </div>
        )}
      </InputWrapper>
      {error && <span>{error}</span>}
    </FormWrapper>
  );
};
