import React, { useState } from "react";
import { AppLayout } from "../../../layout/AppLayout";
import {
  MarketplacePageContainer,
  MarketplacePageWrapper,
} from "../cards/styles";
import {
  MFilterSection,
  MBuyCardSection,
  MCardGridSection,
  MSellCardSection,
  MViewCardSection,
} from "../../../modules";
import { CardActionTypes } from "../../../types";

export const MarketplacePredictionPage: React.FC = () => {
  const [side, setSide] = useState<CardActionTypes>("");

  const handleCardClick = (id: string | number, action: CardActionTypes) => {
    setSide(action);
  };

  const handleSideClose = () => {
    setSide("");
  };
  return (
    <AppLayout>
      <MarketplacePageWrapper sidebar={side !== "" ? "true" : undefined}>
        <MarketplacePageContainer>
          <h2>Cards</h2>
          <MFilterSection page="predictions" />
          <MCardGridSection onCardClick={handleCardClick} page="predictions" />
        </MarketplacePageContainer>
      </MarketplacePageWrapper>
      <MViewCardSection
        open={side === "view"}
        onClose={handleSideClose}
        page="predictions"
      />
      <MBuyCardSection
        open={side === "buy"}
        onClose={handleSideClose}
        page="predictions"
      />
      <MSellCardSection
        open={side === "sell"}
        onClose={handleSideClose}
        page="predictions"
      />
    </AppLayout>
  );
};
