import React from "react";
import { ClaimsSectionWrapper, EmptyData } from "./styles";
import { ClaimsTable } from "./ClaimsTable";
import { claimsData } from "./data";
import { Button } from "../../../components";
import { useNavigate } from "react-router-dom";

export const ClaimsSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ClaimsSectionWrapper>
      {claimsData.length > 0 ? (
        <>
          <h2>Claims</h2>
          <ClaimsTable />
        </>
      ) : (
        <EmptyData>
          <p>You do not have any claims yet.</p>
          <Button
            onClick={() => navigate("/dashboard/")}
            className="empty-button"
          >
            Go to Predictions
          </Button>
        </EmptyData>
      )}
    </ClaimsSectionWrapper>
  );
};
