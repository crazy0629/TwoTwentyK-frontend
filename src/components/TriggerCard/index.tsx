import React from "react";
import { TriggerCardProps } from "../../types";
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

export const TriggerCard: React.FC<TriggerCardProps> = ({
  image,
  id = 0,
  is_crafted,
  owner_id,
  rarity,
  trigger,
  isNotHover,
  onCraft,
  onSell,
  onView,
}) => {
  return (
    <DateCardWrapper bg={image} isnothover={isNotHover ? "true" : undefined}>
      <CardTopWrapper>
        <div className="trigger">{"Minor 2"}</div>
        {rarity === 0 && <CardTypeWrapper>Common</CardTypeWrapper>}
        {rarity === 1 && <CardTypeWrapper>Uncommon</CardTypeWrapper>}
        {rarity === 2 && <CardTypeWrapper>Rare</CardTypeWrapper>}
      </CardTopWrapper>
      <CardBottomWrapper>{trigger}</CardBottomWrapper>
      <CardOverlayWrapper className="overlay">
        <CardButtonGroup>
          <CardTooltip className="left">
            <IconBag />
          </CardTooltip>
          {onView && <CardButton onClick={() => onView(id)}>View</CardButton>}
          {!is_crafted && onCraft && (
            <CardButton onClick={() => onCraft(id)}>
              Craft Prediction
            </CardButton>
          )}
          {onSell && <CardButton onClick={() => onSell(id)}>Sell</CardButton>}
        </CardButtonGroup>
      </CardOverlayWrapper>
    </DateCardWrapper>
  );
};
