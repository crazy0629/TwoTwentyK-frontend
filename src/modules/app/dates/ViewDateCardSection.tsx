import React from "react";
import { ViewDateCardProps } from "../../../types";
import {
  CloseButton,
  PreviewCardWrapper,
  PropertiesContent,
  PropertiesHeader,
  PropertiesWrapper,
  PropertyItem,
  ViewDateCardContainer,
  ViewDateCardWrapper,
} from "./styles";
import {
  DateCard,
  IconArrowDown,
  IconCardAthlete,
  PredictionCard,
} from "../../../components";
import { TriggerCard } from "../../../components/TriggerCard";

export const ViewDateCardSection: React.FC<ViewDateCardProps> = ({
  id,
  cardType,
  isView,
  onClose,
}) => {
  return (
    <ViewDateCardWrapper isview={isView ? "true" : undefined}>
      <ViewDateCardContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>
          View{" "}
          {cardType === "trigger"
            ? "Trigger"
            : cardType === "identity"
            ? "Identity"
            : cardType === "prediction"
            ? "Prediction"
            : "Date Card"}
        </h2>
        <PreviewCardWrapper>
          {cardType === "trigger" ? (
            <TriggerCard image="" name="2005" type="Rare" isNotHover={true} />
          ) : cardType === "identity" ? (
            <PredictionCard
              date="06/06"
              name="Athlete"
              type="Rare"
              height={293}
              year={2023}
              icon={<IconCardAthlete />}
              iconText="Athlete"
            />
          ) : cardType === "prediction" ? (
            <PredictionCard
              date="06/06"
              name="Tom Brady"
              type="Rare"
              height={293}
              year={2023}
              amount={3}
              image="/assets/nfts/1.png"
            />
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
              <p>
                {cardType === "trigger"
                  ? "Category"
                  : cardType === "identity"
                  ? "Day/Month"
                  : "Type"}
              </p>
              <span>Year</span>
            </PropertyItem>
            <PropertyItem>
              <p>{cardType === "trigger" ? "Trigger Type" : "Year"}</p>
              <span>2023</span>
            </PropertyItem>
            <PropertyItem>
              <p>
                {cardType === "trigger"
                  ? "Trigger"
                  : cardType === "identity"
                  ? "Category"
                  : "Collection"}
              </p>
              <span>Sports Series</span>
            </PropertyItem>
          </PropertiesContent>
        </PropertiesWrapper>
      </ViewDateCardContainer>
    </ViewDateCardWrapper>
  );
};
