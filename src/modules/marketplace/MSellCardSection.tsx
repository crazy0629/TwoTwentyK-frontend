import React, { useState } from "react";
import { CardSidebarProps } from "../../types";
import { MSidebarContainer, MSidebarWrapper, ViewCardWrapper } from "./styles";
import {
  CloseButton,
  PriceItem,
  PropertiesContent,
  PropertiesHeader,
  PropertiesWrapper,
  PropertyItem,
  SetPriceWrapper,
} from "../app/dates/styles";
import {
  Button,
  IconArrowDown,
  IconCardAthlete,
  Input,
  MarketCard,
  PredictionCard,
  SellConfirmModal,
} from "../../components";

export const MSellCardSection: React.FC<CardSidebarProps> = ({
  open,
  page,
  onClose,
}) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <SellConfirmModal
        open={modal}
        onClose={() => {
          setModal(false);
          onClose();
        }}
        isMarket={true}
      />
      <MSidebarWrapper open={open}>
        <MSidebarContainer>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <h2>Sell Date Card</h2>
          <ViewCardWrapper>
            {!page && (
              <MarketCard
                image="/assets/nfts/1.png"
                name=""
                rarity="Rare"
                type=""
              />
            )}
            {page === "packs" && (
              <MarketCard
                image="/assets/buy.png"
                name=""
                rarity="Rare"
                type=""
              />
            )}
            {page === "identities" && (
              <PredictionCard
                icon={<IconCardAthlete />}
                iconText="Athlete"
                category=""
                rarity={2}
                height={298}
              />
            )}
            {page === "predictions" && (
              <PredictionCard
                image="/assets/nfts/2.png"
                category="Tom Brady"
                rarity={2}
                height={298}
              />
            )}
          </ViewCardWrapper>
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
                <p>Type</p>
                <span>Year</span>
              </PropertyItem>
              <PropertyItem>
                <p>Year</p>
                <span>2023</span>
              </PropertyItem>
              <PropertyItem>
                <p>Collection</p>
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
          <Button
            className="sell-confirm-button"
            onClick={() => setModal(true)}
          >
            Confirm
          </Button>
        </MSidebarContainer>
      </MSidebarWrapper>
    </>
  );
};
