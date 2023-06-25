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
import { IMarketplaceListing } from "../../types/actions";
import { PredictionCardProps } from "../../types";

export const PredictionCard: React.FC<
  IMarketplaceListing & PredictionCardProps
> = ({
  created_at,
  id,
  is_listed,
  nft_collection_id,
  nft_id,
  owner,
  owner_id,
  price,
  ///////////////////////////////////
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
