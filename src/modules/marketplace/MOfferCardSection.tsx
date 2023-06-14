import React, { useState } from "react";
import { CardSidebarProps } from "../../types";
import {
  BalanceInfo,
  IconWRapper,
  MSidebarContainer,
  MSidebarWrapper,
  MyBalanceWrapper,
  ViewCardWrapper,
} from "./styles";
import {
  CloseButton,
  PropertiesContent,
  PropertiesHeader,
  PropertiesWrapper,
  PropertyItem,
  SetPriceWrapper,
} from "../app/dates/styles";
import {
  BalanceBuyConfirmModal,
  Button,
  IconArrowDown,
  IconPigMoney,
  Input,
  MarketCard,
  SellConfirmModal,
} from "../../components";

export const MOfferCardSection: React.FC<CardSidebarProps> = ({
  onClose,
  open,
}) => {
  const [offerConfirm, setOfferConfirm] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleContinue = () => {
    setOfferConfirm(true);
  };

  const handleOfferConfirm = () => {
    setOfferConfirm(false);
    setConfirm(true);
  };

  return (
    <>
      <MSidebarWrapper open={open}>
        <MSidebarContainer>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <h2>Make an Offer</h2>
          <p>You can only make an offer with your TwotwentyK balance</p>
          <MyBalanceWrapper>
            <IconWRapper>
              <IconPigMoney />
            </IconWRapper>
            <BalanceInfo>
              <p>Your TwoTwentyK balance is</p>
              <h3>
                $1,325.00 <span>USD</span>
              </h3>
            </BalanceInfo>
          </MyBalanceWrapper>
          <ViewCardWrapper>
            <MarketCard
              image="/assets/nfts/1.png"
              name=""
              rarity="Rare"
              type=""
            />
          </ViewCardWrapper>
          <p className="owner">
            Owned by <b>Username</b>
          </p>
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
            <p>Enter your offering price</p>
            <Input value={"$1,000"} onChange={() => {}} />
          </SetPriceWrapper>
          <Button className="sell-confirm-button" onClick={handleContinue}>
            Continue
          </Button>
        </MSidebarContainer>
      </MSidebarWrapper>
      <BalanceBuyConfirmModal
        isOffer
        onConfirm={handleOfferConfirm}
        open={offerConfirm}
        onClose={() => setOfferConfirm(false)}
      />
      <SellConfirmModal
        isMarket
        isOffer
        open={confirm}
        onClose={() => setConfirm(false)}
      />
    </>
  );
};
