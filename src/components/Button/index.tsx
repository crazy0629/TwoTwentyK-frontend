import React from "react";
import { ButtonWrapper } from "./styles";
import { ButtonProps } from "../../types";

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
  className,
  variant,
}) => {
  return (
    <ButtonWrapper
      variant={variant}
      onClick={disabled ? () => {} : onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </ButtonWrapper>
  );
};
