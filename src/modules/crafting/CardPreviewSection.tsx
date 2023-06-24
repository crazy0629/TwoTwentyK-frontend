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
  clickedCard: string | number | null;
}> = ({ page, clickedCard }) => {
  return (
    <CardPreviewSectionWrapper>
      <h2>Preview</h2>
      {Number(clickedCard) > -1 ? (
        <>
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
        </>
      ) : (
        <p>Click on a card from your inventory to see its properties.</p>
      )}
    </CardPreviewSectionWrapper>
  );
};
