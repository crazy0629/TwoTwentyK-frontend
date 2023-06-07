import React, { useState } from "react";
import { AppLayout } from "../../../layout/AppLayout";
import {
  ButtonGroup,
  DatePageContainer,
  DatePageTitleWrapper,
  DatesPageWrapper,
  EmptyCards,
} from "../dates/styles";
import { Button, SellConfirmModal } from "../../../components";
import {
  CardGridSection,
  FilterSection,
  SellDateCardSection,
  ViewDateCardSection,
} from "../../../modules";
import { predictionData } from "./data";

export const PredictionsPage: React.FC = () => {
  const [isView, setIsView] = useState<"view" | "sell" | "">("");

  const [modal, setModal] = useState(false);
  const handleSellConfirm = () => {
    setModal(true);
    setIsView("");
  };

  const handleView = (id: string | number) => {
    setIsView("view");
  };

  const handleCraft = (id: string | number) => {};

  const handleSell = (id: string | number) => {
    setIsView("sell");
  };

  return (
    <AppLayout>
      <SellConfirmModal open={modal} onClose={() => setModal(false)} />
      {predictionData.length > 0 ? (
        <DatesPageWrapper isview={isView ? "true" : undefined}>
          <DatePageContainer>
            <DatePageTitleWrapper>
              <h3>Identities</h3>
              <ButtonGroup>
                <Button className="craft-button">Craft Identity</Button>
              </ButtonGroup>
            </DatePageTitleWrapper>
            <FilterSection />
            <CardGridSection
              identityData={predictionData}
              onCraft={handleCraft}
              onSell={handleSell}
              cardType="identity"
              onView={handleView}
            />
            <ViewDateCardSection
              isView={isView === "view"}
              cardType="prediction"
              id={"asdfa"}
              onClose={() => setIsView("")}
            />
            <SellDateCardSection
              onSellConfirm={handleSellConfirm}
              cardType="prediction"
              isView={isView === "sell"}
              id={"asdfa"}
              onClose={() => setIsView("")}
            />
          </DatePageContainer>
        </DatesPageWrapper>
      ) : (
        <EmptyCards>
          <h3>No Identities Yet</h3>
          <p>
            Identities are cards created by combining a Day-Month card, a Year
            card and a Category card. Identities are combined with Trigger cards
            to craft Predictions.
          </p>
          <Button className="buy-button">Craft Identity</Button>
        </EmptyCards>
      )}
    </AppLayout>
  );
};
