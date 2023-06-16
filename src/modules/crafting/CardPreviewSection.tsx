import React from "react";
import { CardPreviewSectionWrapper, CraftCard } from "./styles";
import {
  PropertiesContent,
  PropertiesHeader,
  PropertiesWrapper,
  PropertyItem,
} from "../app/dates/styles";
import { IconArrowDown } from "../../components";

export const CardPreviewSection: React.FC<{
  page: "identity" | "prediction";
}> = ({ page }) => {
  return (
    <CardPreviewSectionWrapper>
      <h2>Preview</h2>
      <CraftCard bg="/assets/nfts/1.png" className="preview">
        <span>Rare</span>
        <p>Crafting</p>
      </CraftCard>
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
            <p>Collection</p>
            <span>Sports Series</span>
          </PropertyItem>
          <PropertyItem>
            <p>Rarity</p>
            <span>Rare</span>
          </PropertyItem>
        </PropertiesContent>
      </PropertiesWrapper>
    </CardPreviewSectionWrapper>
  );
};
