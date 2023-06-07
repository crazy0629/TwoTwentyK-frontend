import React from "react";
import {
  CloseButton,
  PreviewCardWrapper,
  PriceItem,
  PropertiesContent,
  PropertiesHeader,
  PropertiesWrapper,
  PropertyItem,
  SetPriceWrapper,
  ViewDateCardContainer,
  ViewDateCardWrapper,
} from "./styles";
import { SellDateCardProps } from "../../../types";
import { Button, DateCard, IconArrowDown, Input } from "../../../components";
import { TriggerCard } from "../../../components/TriggerCard";

export const SellDateCardSection: React.FC<SellDateCardProps> = ({
  id,
  cardType,
  isView,
  onClose,
  onSellConfirm,
}) => {
  return (
    <ViewDateCardWrapper isview={isView ? "true" : undefined}>
      <ViewDateCardContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Sell {cardType === "trigger" ? "Trigger" : "Date Card"}</h2>
        <PreviewCardWrapper>
          {cardType === "trigger" ? (
            <TriggerCard image="" name="2005" type="Rare" isNotHover={true} />
          ) : (
            <DateCard
              image="/assets/nfts/1.png"
              name="2005"
              type="Rare"
              isNotHover={true}
            />
          )}
        </PreviewCardWrapper>
        <PropertiesWrapper>
          <PropertiesHeader>
            <span>Properties</span>
            <IconArrowDown />
          </PropertiesHeader>
          <PropertiesContent>
            <PropertyItem>
              <p>Rarity</p>
              <span>Rare</span>
            </PropertyItem>
            <PropertyItem>
              <p>{cardType === "trigger" ? "Category" : "Type"}</p>
              <span>Year</span>
            </PropertyItem>
            <PropertyItem>
              <p>{cardType === "trigger" ? "Trigger Type" : "Year"}</p>
              <span>2023</span>
            </PropertyItem>
            <PropertyItem>
              <p>{cardType === "trigger" ? "Trigger" : "Collection"}</p>
              <span>Sports Series</span>
            </PropertyItem>
          </PropertiesContent>
        </PropertiesWrapper>
        <SetPriceWrapper>
          <p>Enter the listing price for your card</p>
          <Input value={"$1,000"} onChange={() => {}} />
        </SetPriceWrapper>
        <PropertiesWrapper>
          <PropertiesHeader>
            <span>Price Summary</span>
            <IconArrowDown />
          </PropertiesHeader>
          <PropertiesContent>
            <PriceItem>
              <p>Asking price</p>
              <span>$1,000 USD</span>
            </PriceItem>
            <PriceItem>
              <p>Marketplace fee (3%)</p>
              <span className="weak">$140 USD</span>
            </PriceItem>
          </PropertiesContent>
          <PropertiesContent>
            <PriceItem>
              <p>Net amount to seller</p>
              <span>$1,140 USD</span>
            </PriceItem>
            <PriceItem>
              <p>Prize Pool Replenishment Fee</p>
              <span className="weak">--</span>
            </PriceItem>
          </PropertiesContent>
        </PropertiesWrapper>
        <Button className="sell-confirm-button" onClick={onSellConfirm}>
          Confirm
        </Button>
      </ViewDateCardContainer>
    </ViewDateCardWrapper>
  );
};
