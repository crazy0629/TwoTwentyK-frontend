import React from "react";
import { NotFoundWrapper } from "../not-found/styles";
import { Button, HeaderLogo } from "../../components";
import { useNavigate } from "react-router-dom";

export const CommingSoonPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <NotFoundWrapper>
      <HeaderLogo />
      <h1>Coming Soon!</h1>
      <Button className="not-found-button" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </NotFoundWrapper>
  );
};
