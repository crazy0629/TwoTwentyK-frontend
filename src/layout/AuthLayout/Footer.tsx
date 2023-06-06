import React from "react";
import { FooterDesc, FooterLogo, FooterWrapper } from "./style";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterLogo>
        <h4>partner</h4>
        <p>-Logo-</p>
      </FooterLogo>
      <FooterDesc>
        <p>POWERED BY</p>
        <img src="/assets/footer-gameon.png" alt="" />
      </FooterDesc>
    </FooterWrapper>
  );
};
