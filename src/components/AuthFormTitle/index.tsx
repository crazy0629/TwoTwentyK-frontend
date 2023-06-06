import React from "react";
import { TitleWrapper } from "./styles";

export const AuthFormTitle: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};
