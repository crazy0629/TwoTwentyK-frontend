import React from "react";
import { AuthFormGroupWrapper } from "./styles";

export const AuthFormGroup: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return <AuthFormGroupWrapper>{children}</AuthFormGroupWrapper>;
};
