import React, { useEffect, useRef, useState } from "react";
import {
  CheckboxWrapper,
  ClearAll,
  OptionGroup,
  OptionItem,
  SelectAction,
  SelectBoxContainer,
  SelectBoxTextWrapper,
  SelectBoxWrapper,
  SelectOptionsWrapper,
} from "./styles";
import { IconArrowDown } from "../Icons";
import { SelectBoxProps } from "../../types";
import { Button } from "../Button";

export const SelectBox: React.FC<SelectBoxProps> = ({
  placeholder,
  label,
  value,
  options,
  border,
  isFilter,
  onChange,
}) => {
  const optionRef = useRef<any>(null);
  const [isOption, setIsOption] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (optionRef.current && !optionRef.current.contains(event.target)) {
        setIsOption(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (value: string) => {
    onChange && onChange(value);
    setIsOption(false);
  };

  const handleFilterClick = () => {
    setIsOption(false);
  };

  return (
    <SelectBoxWrapper ref={optionRef}>
      {label && <p>{label}</p>}
      <SelectBoxContainer
        border={border ? "true" : undefined}
        onClick={() => setIsOption((prev) => !prev)}
      >
        <SelectBoxTextWrapper>
          {value ? (
            <>
              {options.filter((f) => f.value === value)[0].image && (
                <img
                  src={options.filter((f) => f.value === value)[0].image}
                  alt=""
                />
              )}{" "}
              {options.filter((f) => f.value === value)[0].label}
            </>
          ) : (
            <span>{placeholder}</span>
          )}
        </SelectBoxTextWrapper>
        <IconArrowDown />
      </SelectBoxContainer>
      <SelectOptionsWrapper open={isOption ? "true" : undefined}>
        {isFilter ? (
          <>
            <OptionGroup>
              {options.map((item, key) => (
                <OptionItem htmlFor={item.value + key} key={key}>
                  <span>{item.label}</span>
                  <CheckboxWrapper>
                    <input id={item.value + key} type="checkbox" />
                    <label htmlFor={item.value + key}></label>
                  </CheckboxWrapper>
                </OptionItem>
              ))}
            </OptionGroup>
            <SelectAction>
              <ClearAll>Clear All</ClearAll>
              <Button
                className="filter-apply-button"
                onClick={handleFilterClick}
              >
                Apply Selection
              </Button>
            </SelectAction>
          </>
        ) : (
          <OptionGroup>
            {options.map((item, key) => (
              <OptionItem
                key={key}
                onClick={() => handleOptionClick(item.value)}
              >
                <div>
                  {item.image ? <img src={item.image} alt="" /> : ""}
                  {item.label}
                </div>
              </OptionItem>
            ))}
          </OptionGroup>
        )}
      </SelectOptionsWrapper>
    </SelectBoxWrapper>
  );
};
