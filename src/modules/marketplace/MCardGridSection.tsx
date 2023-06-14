import React from "react";
import { CardGridWrapper } from "./styles";
import { MarketCard } from "../../components";
import { cardData } from "./data";
import { CardActionTypes } from "../../types";

export const MCardGridSection: React.FC<{
  onCardClick: (id: string | number, action: CardActionTypes) => void;
}> = ({ onCardClick }) => {
  return (
    <CardGridWrapper>
      {cardData.map((item, key) => (
        <MarketCard key={key} {...item} onCard={onCardClick} />
      ))}
    </CardGridWrapper>
  );
};
