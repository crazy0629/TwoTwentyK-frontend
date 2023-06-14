import React from "react";
import { MarketCardProps } from "../../types";
import {
  CardBottomSection,
  CardOverlay,
  CardTopSection,
  CardWrapper,
  Rarity,
  StatusWrapper,
} from "./styles";
import { CardButton } from "../DateCard/styles";

export const MarketCard: React.FC<MarketCardProps> = ({
  image,
  name,
  rarity,
  type,
  owned,
  status,
  onCard,
}) => {
  return (
    <CardWrapper bg={image}>
      <CardTopSection>
        <StatusWrapper>
          {owned && <p>Owned x{owned}</p>}
          {status && <span>{status}</span>}
        </StatusWrapper>
        <Rarity>{rarity}</Rarity>
      </CardTopSection>
      <CardBottomSection>
        <h4>{name}</h4>
        <p>{type}</p>
      </CardBottomSection>
      {onCard && (
        <CardOverlay className="overlay">
          <CardButton onClick={() => onCard(1, "view")}>View</CardButton>
          {type === "Category" && (
            <CardButton onClick={() => onCard(1, "buy")}>Buy</CardButton>
          )}
          {(type === "Day/Month" || type === "Year") && (
            <CardButton onClick={() => onCard(1, "sell")}>Sell</CardButton>
          )}
          {(type === "Crafting" || type === "Trigger") && (
            <CardButton onClick={() => onCard(1, "offer")}>
              Make an Offer
            </CardButton>
          )}
          {!type && status === "For Sale" && (
            <CardButton onClick={() => onCard(1, "sell")}>Sell</CardButton>
          )}
          {!type && !status && (
            <CardButton onClick={() => onCard(1, "buy")}>Buy</CardButton>
          )}
        </CardOverlay>
      )}
    </CardWrapper>
  );
};
