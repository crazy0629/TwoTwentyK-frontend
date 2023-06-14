import React, { useState } from "react";
import { AppLayout } from "../../../layout/AppLayout";
import {
  MarketplacePageContainer,
  MarketplacePageWrapper,
} from "../cards/styles";
import {
  MBuyCardSection,
  MCardGridSection,
  MFilterSection,
  MSellCardSection,
  MViewCardSection,
} from "../../../modules";
import { CardActionTypes } from "../../../types";

export const MarketplacePacksPage: React.FC = () => {
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
          <MCardGridSection onCardClick={handleCardClick} page="packs" />
        </MarketplacePageContainer>
      </MarketplacePageWrapper>
      <MViewCardSection
        open={side === "view"}
        onClose={handleSideClose}
        page="packs"
      />
      <MBuyCardSection
        open={side === "buy"}
        onClose={handleSideClose}
        page="packs"
      />
      <MSellCardSection
        open={side === "sell"}
        onClose={handleSideClose}
        page="packs"
      />
    </AppLayout>
  );
};
