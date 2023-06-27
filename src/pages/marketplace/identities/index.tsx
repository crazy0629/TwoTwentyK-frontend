import React, { useState } from "react";
import { CardActionTypes } from "../../../types";
import { AppLayout } from "../../../layout/AppLayout";
import {
  MarketplacePageContainer,
  MarketplacePageWrapper,
} from "../cards/styles";
import {
  FilterSection,
  MBuyCardSection,
  MCardGridSection,
  MSellCardSection,
  MViewCardSection,
} from "../../../modules";
import { useNavigate } from "react-router-dom";
import { useMarketplaceListContext } from "../../../context";
import { EmptyCards } from "../../app/category/styles";
import { Button } from "../../../components";

export const MarketplaceIdentitiesPage: React.FC = () => {
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
            <h2>Identities</h2>
            <FilterSection />
            <MCardGridSection onCardClick={handleCardClick} page="identities" />
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
        page="identities"
      />
      <MBuyCardSection
        open={side === "buy"}
        onClose={handleSideClose}
        page="identities"
      />
      <MSellCardSection
        open={side === "sell"}
        onClose={handleSideClose}
        page="identities"
      />
    </AppLayout>
  );
};
