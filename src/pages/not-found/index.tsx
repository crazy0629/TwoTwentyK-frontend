import React from "react";
import { NotFoundWrapper } from "./styles";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <NotFoundWrapper>
      <h1>404</h1>
      <p>Sorry, we were unable to find that page</p>
      <Button className="not-found-button" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </NotFoundWrapper>
  );
};
