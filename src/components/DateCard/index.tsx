import React from "react";
import { DateCardProps } from "../../types";
import {
  CardButton,
  CardButtonGroup,
  CardOverlayWrapper,
  CardTooltip,
  DateCardWrapper,
  TooltipContent,
  TooltipItem,
} from "./styles";
import {
  CardBottomWrapper,
  CardTopWrapper,
  CardTypeWrapper,
} from "../PredictionCard/styles";
import { IconUserAdd } from "../Icons";

export const DateCard: React.FC<DateCardProps> = ({
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
        <div></div>
        <CardTypeWrapper>{type}</CardTypeWrapper>
      </CardTopWrapper>
      <CardBottomWrapper>{name}</CardBottomWrapper>
      <CardOverlayWrapper className="overlay">
        <CardButtonGroup>
          <CardTooltip>
            <IconUserAdd />
            <TooltipContent className="tooltip-content">
              <div>
                <h3>Identity Matches</h3>
                <TooltipItem>Tom Brady</TooltipItem>
                <TooltipItem>Brad Pitt</TooltipItem>
                <TooltipItem>Emma Watson</TooltipItem>
                <TooltipItem>Tom Brady</TooltipItem>
                <TooltipItem>Michael B. Jordan</TooltipItem>
                <TooltipItem>Kid Rock</TooltipItem>
                <TooltipItem>Barack Obama</TooltipItem>
                <TooltipItem>Tom Brady</TooltipItem>
                <TooltipItem>Brad Pitt</TooltipItem>
                <TooltipItem>Emma Watson</TooltipItem>
                <TooltipItem>Tom Brady</TooltipItem>
                <TooltipItem>Michael B. Jordan</TooltipItem>
                <TooltipItem>Kid Rock</TooltipItem>
                <TooltipItem>Barack Obama</TooltipItem>
              </div>
            </TooltipContent>
          </CardTooltip>
          <CardButton onClick={onView}>View</CardButton>
          <CardButton onClick={onCraft}>Craft Identity</CardButton>
          <CardButton onClick={onSell}>Sell</CardButton>
        </CardButtonGroup>
      </CardOverlayWrapper>
    </DateCardWrapper>
  );
};
