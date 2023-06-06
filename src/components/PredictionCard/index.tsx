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

export const PredictionCard: React.FC<PredictionCardProps> = ({
  image,
  amount,
  date,
  name,
  type,
  year,
  icon,
  iconText,
}) => {
  return (
    <PredictionCardWrapper bg={image}>
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
    </PredictionCardWrapper>
  );
};
