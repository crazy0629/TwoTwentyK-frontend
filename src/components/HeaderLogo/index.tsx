import React from "react";
import { HeaderLogoWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

export const HeaderLogo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <HeaderLogoWrapper onClick={() => navigate("/dashboard")}>
      TwoTwentyK
    </HeaderLogoWrapper>
  );
};
