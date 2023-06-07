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
import { DateCard, IconArrowDown } from "../../../components";

export const ViewDateCardSection: React.FC<ViewDateCardProps> = ({
  id,
  isView,
  onClose,
}) => {
  return (
    <ViewDateCardWrapper isview={isView ? "true" : undefined}>
      <ViewDateCardContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>View Date Card</h2>
        <PreviewCardWrapper>
          <DateCard
            image="/assets/nfts/1.png"
            name="2005"
            type="Rare"
            isNotHover={true}
          />
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
      </ViewDateCardContainer>
    </ViewDateCardWrapper>
  );
};
