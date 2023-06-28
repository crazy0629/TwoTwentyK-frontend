import React from "react";
import {
  AmountWrapper,
  CardBodyWrapper,
  CardBottomWrapper,
  CardDateWrapper,
  CardTopWrapper,
  CardTypeWrapper,
  PredictionCardWrapper,
} from "./styles";
import {
  CardButton,
  CardButtonGroup,
  CardOverlayWrapper,
} from "../DateCard/styles";
import { PredictionCardProps } from "../../types";

export const PredictionCard: React.FC<PredictionCardProps> = ({
  ///////////////////////////////////
  id = 0,
  image,
  category,
  day,
  month,
  rarity,
  year,
  icon,
  iconText,
  is_crafted,
  height,
  isNotHover,
  onClick,
  onCraft,
  onSell,
  onView,
  onBuy,
}) => {
  return (
    <PredictionCardWrapper
      onClick={onClick}
      bg={image}
      height={height}
      isnothover={isNotHover ? "true" : undefined}
    >
      <CardTopWrapper>
        <CardDateWrapper>
          {day && <div className="date">{day}</div>}
          {month && <div className="month">{month}</div>}
          {year && <div className="year">{year}</div>}
        </CardDateWrapper>
        {rarity === 0 && <CardTypeWrapper>Common</CardTypeWrapper>}
        {rarity === 1 && <CardTypeWrapper>Uncommon</CardTypeWrapper>}
        {rarity === 2 && <CardTypeWrapper>Rare</CardTypeWrapper>}
      </CardTopWrapper>
      {icon && (
        <CardBodyWrapper>
          <span>{icon}</span>
          <p>{iconText}</p>
        </CardBodyWrapper>
      )}
      {category && (
        <CardBottomWrapper>
          {/* {amount && <AmountWrapper>{amount}</AmountWrapper>} */}
          {category}
        </CardBottomWrapper>
      )}
      <CardOverlayWrapper className="overlay">
        <CardButtonGroup>
          {onView && <CardButton onClick={() => onView(id)}>View</CardButton>}
          {!is_crafted && onCraft && (
            <CardButton onClick={() => onCraft(id)}>
              Craft Prediction
            </CardButton>
          )}
          {onSell && <CardButton onClick={() => onSell(id)}>Sell</CardButton>}
          {onBuy && <CardButton onClick={() => onBuy(id)}>Buy</CardButton>}
        </CardButtonGroup>
      </CardOverlayWrapper>
    </PredictionCardWrapper>
  );
};
