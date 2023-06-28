import React, { useState } from "react";
import { CardSidebarProps } from "../../types";
import { MSidebarContainer, MSidebarWrapper, ViewCardWrapper } from "./styles";
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
  BuyPackConfirmModal,
  IconArrowDown,
  IconCardAthlete,
  IconCoins,
  IconPay,
  MarketCard,
  PredictionCard,
  UseBalanceBuyModal,
} from "../../components";
import {
  BackButton,
  PaymentMethodWrapper,
  SummaryContent,
  SummaryWrapper,
} from "../buy/styles";

export const MBuyCardSection: React.FC<CardSidebarProps> = ({
  onClose,
  open,
  page,
}) => {
  const [step, setStep] = useState(0);
  const [useBalance, setUseBalance] = useState(false);
  const [balanceConfirm, setBalanceConfirm] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleUseBalance = () => {
    setUseBalance(true);
  };

  const handleFromAccount = () => {
    setConfirm(true);
  };

  const handleBalanceBuy = () => {
    setBalanceConfirm(true);
    setUseBalance(false);
  };

  const handleBuyConfirm = () => {
    setBalanceConfirm(false);
    setConfirm(true);
  };

  const handleConfirmClose = () => {
    setConfirm(false);
    onClose();
  };

  return (
    <>
      <MSidebarWrapper open={open}>
        {step === 0 && (
          <MSidebarContainer>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            <h2>Buy Card</h2>
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
              <h5>Current Price</h5>
              <h4>$1,140 USD</h4>
              <Button
                className="sell-confirm-button"
                onClick={() => setStep(1)}
              >
                Buy Now
              </Button>
            </SetPriceWrapper>
          </MSidebarContainer>
        )}
        {step === 1 && (
          <MSidebarContainer>
            <CloseButton onClick={onClose}>&times;</CloseButton>{" "}
            <BackButton onClick={() => setStep(0)}>{"< Back"}</BackButton>
            <SummaryWrapper>
              <h3>Summary</h3>
              <SummaryContent>
                <img src="/assets/nfts/1.png" alt="" />
                <div>
                  <div>
                    <p>2023</p>
                    <span>Year Card</span>
                  </div>
                  <div>
                    <p>Total Price</p>
                    <span>$250 USD</span>
                  </div>
                </div>
              </SummaryContent>
            </SummaryWrapper>
            <PaymentMethodWrapper>
              <h3>Payment Method</h3>
              <Button className="pay-button" onClick={handleUseBalance}>
                <IconCoins />
                <span>Use my TwoTwentyK Balance</span>
              </Button>
              <Button className="pay-button" onClick={handleFromAccount}>
                <IconPay />
                <span>Pay from Account</span>
              </Button>
            </PaymentMethodWrapper>
          </MSidebarContainer>
        )}
      </MSidebarWrapper>
      <BuyPackConfirmModal
        isMarket
        open={confirm}
        onClose={handleConfirmClose}
      />
      <UseBalanceBuyModal
        onBuyClick={handleBalanceBuy}
        open={useBalance}
        onClose={() => setUseBalance(false)}
      />
      <BalanceBuyConfirmModal
        onConfirm={handleBuyConfirm}
        open={balanceConfirm}
        onClose={() => setBalanceConfirm(false)}
      />
    </>
  );
};
