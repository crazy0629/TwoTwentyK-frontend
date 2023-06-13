import React from "react";
import { BuyCardWrapper, CardAction, CardType } from "./styles";
import { Button } from "../Button";
import { BuyPackProps } from "../../types";

export const BuyCard: React.FC<BuyPackProps> = ({
  cardType,
  price,
  onBuyClick,
  onCardClick,
}) => {
  return (
    <BuyCardWrapper onClick={() => onCardClick("1")}>
      <CardType>{cardType}</CardType>
      <CardAction>
        <div>
          <p>Price</p>
          <h3>
            <span>${price}</span> USD
          </h3>
        </div>
        <Button className="buy-button" onClick={() => onBuyClick("1")}>
          Buy Now
        </Button>
      </CardAction>
    </BuyCardWrapper>
  );
};
