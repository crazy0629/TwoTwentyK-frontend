import React, { useEffect, useState } from "react";
import { AppContainer, AppLayoutWrapper } from "./styles";
import { Header } from "./Header";
import { useLocation } from "react-router-dom";
import { headerData } from "./data";
import { Footer } from "../AuthLayout/Footer";

export const AppLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const location = useLocation();
  const [isSubmenu, setIsSubmenu] = useState(false);

  useEffect(() => {
    const current = headerData.filter(
      (f) => f.to === "/" + location.pathname.split("/")[1]
    )[0];
    setIsSubmenu(
      current?.children ? (current?.children.length > 0 ? true : false) : false
    );
  }, [location]);
  return (
    <AppLayoutWrapper>
      <Header />
      <AppContainer issubmenu={isSubmenu ? "true" : undefined}>
        {children}
      </AppContainer>
      <Footer />
    </AppLayoutWrapper>
  );
};
