import React from "react";
import { CardGridWrapper } from "./styles";
import { MarketCard, PredictionCard } from "../../components";
import { cardData, packData } from "./data";
import { CardActionTypes } from "../../types";
import { identitiesData } from "../../pages/app/identities/data";
import { predictionData } from "../../pages/app/predictions/data";

export const MCardGridSection: React.FC<{
  onCardClick: (id: string | number, action: CardActionTypes) => void;
  page?: string;
}> = ({ onCardClick, page }) => {
  return (
    <CardGridWrapper>
      {!page &&
        cardData.map((item, key) => (
          <MarketCard key={key} {...item} onCard={onCardClick} />
        ))}
      {page === "packs" &&
        packData.map((item, key) => (
          <MarketCard key={key} {...item} onCard={onCardClick} />
        ))}
      {page === "identities" &&
        identitiesData.map((item, key) => {
          const func =
            key % 2 === 0
              ? { onSell: () => onCardClick(1, "sell") }
              : { onBuy: () => onCardClick(1, "buy") };
          return (
            <PredictionCard
              height={293}
              isNotHover={true}
              key={key}
              {...item}
              onView={() => onCardClick(1, "view")}
              {...func}
            />
          );
        })}
      {page === "predictions" &&
        predictionData.map((item, key) => {
          const func =
            key % 2 === 0
              ? { onSell: () => onCardClick(1, "sell") }
              : { onBuy: () => onCardClick(1, "buy") };
          return (
            <PredictionCard
              height={293}
              isNotHover={true}
              key={key}
              {...item}
              onView={() => onCardClick(1, "view")}
              {...func}
            />
          );
        })}
    </CardGridWrapper>
  );
};
