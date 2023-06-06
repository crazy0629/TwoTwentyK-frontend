import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AuthContainer, AuthLayoutWrapper } from "./style";

export const AuthLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return (
    <AuthLayoutWrapper>
      <Header />
      <AuthContainer>{children}</AuthContainer>
      <Footer />
    </AuthLayoutWrapper>
  );
};
