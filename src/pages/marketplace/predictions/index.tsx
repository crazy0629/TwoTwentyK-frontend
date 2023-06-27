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
import { EmptyCards } from "../../app/category/styles";
import { Button } from "../../../components";
import { useNavigate } from "react-router-dom";
import { useMarketplaceListContext } from "../../../context";

export const MarketplacePredictionPage: React.FC = () => {
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
            <h2>Predictions</h2>
            <MFilterSection page="predictions" />
            <MCardGridSection
              onCardClick={handleCardClick}
              page="predictions"
            />
          </MarketplacePageContainer>
        ) : (
          <EmptyCards>
            <p style={{ maxWidth: "253px" }}>
              Wow, can you believe no one wants to sell even a single card?
            </p>
            <Button
              className="buy-button"
              onClick={() => navigate("/marketplace")}
            >
              Sell Card
            </Button>
          </EmptyCards>
        )}
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
