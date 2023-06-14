import React from "react";
import { CardSidebarProps } from "../../types";
import { MSidebarContainer, MSidebarWrapper, ViewCardWrapper } from "./styles";
import {
  CloseButton,
  PropertiesContent,
  PropertiesHeader,
  PropertiesWrapper,
  PropertyItem,
} from "../app/dates/styles";
import { IconArrowDown, MarketCard } from "../../components";

export const MViewCardSection: React.FC<CardSidebarProps> = ({
  onClose,
  open,
}) => {
  return (
    <MSidebarWrapper open={open}>
      <MSidebarContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>View Card</h2>
        <ViewCardWrapper>
          <MarketCard
            image="/assets/nfts/1.png"
            name=""
            rarity="Rare"
            type=""
          />
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
      </MSidebarContainer>
    </MSidebarWrapper>
  );
};
