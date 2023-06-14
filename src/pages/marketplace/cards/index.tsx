import React, { useState } from "react";
import { AppLayout } from "../../../layout/AppLayout";
import { MarketplacePageContainer, MarketplacePageWrapper } from "./styles";
import {
  MBuyCardSection,
  MCardGridSection,
  MFilterSection,
  MOfferCardSection,
  MSellCardSection,
  MViewCardSection,
} from "../../../modules";
import { CardActionTypes } from "../../../types";

export const MarketplacePage: React.FC = () => {
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
          <MFilterSection />
          <MCardGridSection onCardClick={handleCardClick} />
        </MarketplacePageContainer>
      </MarketplacePageWrapper>
      <MViewCardSection open={side === "view"} onClose={handleSideClose} />
      <MBuyCardSection open={side === "buy"} onClose={handleSideClose} />
      <MSellCardSection open={side === "sell"} onClose={handleSideClose} />
      <MOfferCardSection open={side === "offer"} onClose={handleSideClose} />
    </AppLayout>
  );
};
