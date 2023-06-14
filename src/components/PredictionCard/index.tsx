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
import { PredictionCardProps } from "../../types";
import {
  CardButton,
  CardButtonGroup,
  CardOverlayWrapper,
} from "../DateCard/styles";

export const PredictionCard: React.FC<PredictionCardProps> = ({
  image,
  amount,
  date,
  name,
  type,
  height,
  year,
  icon,
  iconText,
  isNotHover,
  onCraft,
  onSell,
  onView,
  onBuy,
}) => {
  return (
    <PredictionCardWrapper
      bg={image}
      height={height}
      isnothover={isNotHover ? "true" : undefined}
    >
      <CardTopWrapper>
        <CardDateWrapper>
          {date && <div className="date">{date}</div>}
          {year && <div className="year">{year}</div>}
        </CardDateWrapper>
        <CardTypeWrapper>{type}</CardTypeWrapper>
      </CardTopWrapper>
      {icon && (
        <CardBodyWrapper>
          <span>{icon}</span>
          <p>{iconText}</p>
        </CardBodyWrapper>
      )}
      {name && (
        <CardBottomWrapper>
          {amount && <AmountWrapper>{amount}</AmountWrapper>}
          {name}
        </CardBottomWrapper>
      )}
      <CardOverlayWrapper className="overlay">
        <CardButtonGroup>
          {onView && <CardButton onClick={onView}>View</CardButton>}
          {onCraft && (
            <CardButton onClick={onCraft}>Craft Prediction</CardButton>
          )}
          {onSell && <CardButton onClick={onSell}>Sell</CardButton>}
          {onBuy && <CardButton onClick={onBuy}>Buy</CardButton>}
        </CardButtonGroup>
      </CardOverlayWrapper>
    </PredictionCardWrapper>
  );
};
