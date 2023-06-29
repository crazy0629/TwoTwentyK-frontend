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
import { useMarketplaceListContext } from "../../../context";
import { EmptyCards } from "../../app/category/styles";
import { Button } from "../../../components";
import { useNavigate } from "react-router-dom";

export const MarketplacePage: React.FC = () => {
  const navigate = useNavigate();
  const { marketplaceListContext } = useMarketplaceListContext();
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
        {marketplaceListContext?.length > 0 ? (
          <MarketplacePageContainer>
            <h2>Cards</h2>
            <MFilterSection />
            <MCardGridSection onCardClick={handleCardClick} />
          </MarketplacePageContainer>
        ) : (
          <EmptyCards>
            <p style={{ maxWidth: "253px" }}>
              Wow, can you believe no one wants to sell even a single card?
            </p>
            <Button
              className="buy-button"
              onClick={() => setSide("sell")}
            >
              Sell Card
            </Button>
          </EmptyCards>
        )}
      </MarketplacePageWrapper>
      <MViewCardSection open={side === "view"} onClose={handleSideClose} />
      <MBuyCardSection open={side === "buy"} onClose={handleSideClose} />
      <MSellCardSection open={side === "sell"} onClose={handleSideClose} />
      <MOfferCardSection open={side === "offer"} onClose={handleSideClose} />
    </AppLayout>
  );
};
