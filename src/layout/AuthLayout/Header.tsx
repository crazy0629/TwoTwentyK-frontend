import React from "react";
import { HeaderContainer, HeaderWrapper } from "./style";
import { HeaderLogo } from "../../components";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo />
      </HeaderContainer>
    </HeaderWrapper>
  );
};
