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
}) => {
  return (
    <PredictionCardWrapper
      bg={image}
      height={height}
      isnothover={isNotHover ? "true" : undefined}
    >
      <CardTopWrapper>
        <CardDateWrapper>
          <div className="date">{date}</div>
          <div className="year">{year}</div>
        </CardDateWrapper>
        <CardTypeWrapper>{type}</CardTypeWrapper>
      </CardTopWrapper>
      {icon && (
        <CardBodyWrapper>
          <span>{icon}</span>
          <p>{iconText}</p>
        </CardBodyWrapper>
      )}
      <CardBottomWrapper>
        {amount && <AmountWrapper>{amount}</AmountWrapper>}
        {name}
      </CardBottomWrapper>
      <CardOverlayWrapper className="overlay">
        <CardButtonGroup>
          <CardButton onClick={onView}>View</CardButton>
          <CardButton onClick={onCraft}>Craft Prediction</CardButton>
          <CardButton onClick={onSell}>Cancel Listing</CardButton>
        </CardButtonGroup>
      </CardOverlayWrapper>
    </PredictionCardWrapper>
  );
};
