import React from "react";
import { DateCardProps } from "../../types";
import {
  CardButton,
  CardButtonGroup,
  CardOverlayWrapper,
  CardTooltip,
  DateCardWrapper,
} from "../DateCard/styles";
import {
  CardBottomWrapper,
  CardTopWrapper,
  CardTypeWrapper,
} from "../PredictionCard/styles";
import { IconBag } from "../Icons";

export const TriggerCard: React.FC<DateCardProps> = ({
  image,
  name,
  type,
  isNotHover,
  onCraft,
  onSell,
  onView,
}) => {
  return (
    <DateCardWrapper bg={image} isnothover={isNotHover ? "true" : undefined}>
      <CardTopWrapper>
        <div className="trigger">Minor 2</div>
        <CardTypeWrapper>{type}</CardTypeWrapper>
      </CardTopWrapper>
      <CardBottomWrapper>{name}</CardBottomWrapper>
      <CardOverlayWrapper className="overlay">
        <CardButtonGroup>
          <CardTooltip className="left">
            <IconBag />
          </CardTooltip>
          <CardButton onClick={onView}>View</CardButton>
          <CardButton onClick={onCraft}>Craft Prediction</CardButton>
          <CardButton onClick={onSell}>Sell</CardButton>
        </CardButtonGroup>
      </CardOverlayWrapper>
    </DateCardWrapper>
  );
};
