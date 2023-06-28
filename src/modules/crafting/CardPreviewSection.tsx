import React, { useEffect, useState } from "react";
import { CardPreviewSectionWrapper, CraftCard } from "./styles";
import {
  PropertiesContent,
  PropertiesHeader,
  PropertiesWrapper,
  PropertyItem,
} from "../app/dates/styles";
import { IconArrowDown } from "../../components";
import {
  nft_card_category_data,
  nft_card_crafting_data,
  nft_card_day_month_data,
  nft_card_identity_data,
  nft_card_trigger_data,
  nft_card_year_data,
} from "../../data/nfts";

export const CardPreviewSection: React.FC<{
  selectedCraft: string;
  page: "identity" | "prediction";
  clickedCard: string | number | null;
}> = ({ page, clickedCard, selectedCraft }) => {
  type CardProps = {
    id: number;
    rarity: number;
    image: string;
    name: string | number;
  }[];

  const [nftData, setNftData] = useState<CardProps>([]);

  useEffect(() => {
    let tempData: CardProps = [
      ...nft_card_crafting_data
        .filter((f) => !f.is_crafted)
        .map((item) => {
          return {
            id: item.id,
            rarity: item.rarity,
            image: item.image,
            name: "Crafting",
          };
        }),
      ...nft_card_day_month_data
        .filter((f) => !f.is_crafted)
        .map((item) => {
          return {
            id: item.id,
            rarity: item.rarity,
            image: item.image,
            name: item.day + "/" + item.month,
          };
        }),
      ...nft_card_year_data
        .filter((f) => !f.is_crafted)
        .map((item) => {
          return {
            id: item.id,
            rarity: item.rarity,
            image: item.image,
            name: item.year,
          };
        }),
      ...nft_card_category_data
        .filter((f) => !f.is_crafted)
        .map((item) => {
          return {
            id: item.id,
            rarity: item.rarity,
            image: item.image,
            name: item.category,
          };
        }),
      ...nft_card_identity_data
        .filter((f) => !f.is_crafted)
        .map((item) => {
          return {
            id: item.id,
            rarity: item.rarity,
            image: item.image,
            name: item.category,
          };
        }),
      ...nft_card_trigger_data
        .filter((f) => !f.is_crafted)
        .map((item) => {
          return {
            id: item.id,
            rarity: item.rarity,
            image: item.image,
            name: item.trigger,
          };
        }),
    ];
    console.log(tempData);
    // }
    setNftData(tempData);
  }, []);
  return (
    <CardPreviewSectionWrapper>
      <h2>Preview</h2>
      {Number(clickedCard) > -1 ? (
        <>
          <CraftCard
            bg={
              nftData.filter((f: any) => f.id === Number(clickedCard))[0]?.image
            }
            className="preview"
          >
            {nftData.filter((f: any) => f.id === Number(clickedCard))[0]
              ?.rarity === 0 && <span>Common</span>}
            {nftData.filter((f: any) => f.id === Number(clickedCard))[0]
              ?.rarity === 1 && <span>Uncommon</span>}
            {nftData.filter((f: any) => f.id === Number(clickedCard))[0]
              ?.rarity === 2 && <span>Rare</span>}
            <p>
              {
                nftData.filter((f: any) => f.id === Number(clickedCard))[0]
                  ?.name
              }
            </p>
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
