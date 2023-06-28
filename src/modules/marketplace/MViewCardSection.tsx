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
import {
  IconArrowDown,
  IconCardAthlete,
  MarketCard,
  PredictionCard,
} from "../../components";

export const MViewCardSection: React.FC<CardSidebarProps> = ({
  onClose,
  open,
  page,
}) => {
  return (
    <MSidebarWrapper open={open}>
      <MSidebarContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>View Card</h2>
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
            <MarketCard image="/assets/buy.png" name="" rarity="Rare" type="" />
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
        {!page && (
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
        )}
        {page === "packs" && (
          <>
            <PropertiesWrapper>
              <PropertiesHeader>
                <span>Properties</span>
                <IconArrowDown />
              </PropertiesHeader>
              <PropertiesContent>
                <PropertyItem>
                  <p>Pack Rarity</p>
                  <span>Standard</span>
                </PropertyItem>
                <PropertyItem>
                  <p>Collection</p>
                  <span>Conception</span>
                </PropertyItem>
              </PropertiesContent>
            </PropertiesWrapper>
            <PropertiesWrapper>
              <PropertiesHeader>
                <span>Pack Contents</span>
                <IconArrowDown />
              </PropertiesHeader>
              <PropertiesContent>
                <PropertyItem>
                  <p>6 Cards</p>
                </PropertyItem>
                <PropertyItem>
                  <p>3 Guaranteed Core Cards</p>
                </PropertyItem>
                <PropertyItem>
                  <p>2 Core cards with chance of Uncommon Card</p>
                </PropertyItem>
                <PropertyItem>
                  <p>1 Crafting Card</p>
                </PropertyItem>
              </PropertiesContent>
            </PropertiesWrapper>
          </>
        )}
        {page === "identities" && (
          <PropertiesWrapper>
            <PropertiesHeader>
              <span>Properties</span>
              <IconArrowDown />
            </PropertiesHeader>
            <PropertiesContent>
              <PropertyItem>
                <p>Identity Match</p>
                <span>Tom Brady</span>
              </PropertyItem>
              <PropertyItem>
                <p>Rarity</p>
                <span>Rare</span>
              </PropertyItem>
              <PropertyItem>
                <p>Day/Month</p>
                <span>Value/Value</span>
              </PropertyItem>
              <PropertyItem>
                <p>Year</p>
                <span>2023</span>
              </PropertyItem>
              <PropertyItem>
                <p>Category</p>
                <span>Athlete</span>
              </PropertyItem>
              <PropertyItem>
                <p>Collection</p>
                <span>Conception</span>
              </PropertyItem>
            </PropertiesContent>
          </PropertiesWrapper>
        )}
        {page === "predictions" && (
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
        )}
      </MSidebarContainer>
    </MSidebarWrapper>
  );
};
