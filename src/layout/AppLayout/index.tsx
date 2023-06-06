import React from "react";
import { AppContainer, AppLayoutWrapper } from "./styles";
import { Header } from "./Header";

export const AppLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return (
    <AppLayoutWrapper>
      <Header />
      <AppContainer>{children}</AppContainer>
    </AppLayoutWrapper>
  );
};
