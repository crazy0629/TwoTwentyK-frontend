import React, { useEffect, useState } from "react";
import {
  CardGridWrapper,
  CraftCard,
  CraftingCardWrapper,
  FilterWrapper,
  SelectBoxWrapper,
  SelectButton,
  SelectCardSectionContainer,
  SelectCardSectionWrapper,
} from "./styles";
import { Button, IconSort, SelectBox } from "../../components";
import { craftingCardData, raritiesOption, statusOption } from "./data";
import { SortButton } from "../app/dates/styles";
// import { useMarketplaceListContext, useMyNFTsContext } from "../../context";
import { EmptyCards } from "../../pages/app/category/styles";
import { useNavigate } from "react-router-dom";
import {
  nft_card_category_data,
  nft_card_crafting_data,
  nft_card_day_month_data,
  nft_card_identity_data,
  nft_card_trigger_data,
  nft_card_year_data,
} from "../../data/nfts";

export const SelectCardSection: React.FC<{
  page: "identity" | "prediction";
  selectedCraft: string;
  clickedCard: number | string | null;
  selectedCard: number | string | null;
  onCardClicked: (key: number | string) => void;
  onCardSelected: (key: number | string, craft: string) => void;
}> = ({
  page,
  selectedCraft,
  clickedCard,
  selectedCard,
  onCardClicked,
  onCardSelected,
}) => {
  const navigate = useNavigate();
  // const { marketplaceListContext } = useMarketplaceListContext();
  const [nftData, setNftData] = useState<
    {
      id: number;
      rarity: number;
      image: string;
      name: string | number;
    }[]
  >([]);

  useEffect(() => {
    let tempData: {
      id: number;
      rarity: number;
      image: string;
      name: string | number;
    }[] = [];
    if (selectedCraft === "crafting") {
      tempData = nft_card_crafting_data
        .filter((f) => !f.is_crafted)
        .map((item) => {
          return {
            id: item.id,
            rarity: item.rarity,
            image: item.image,
            name: "Crafting",
          };
        });
    } else if (selectedCraft === "dayMonth") {
      tempData = nft_card_day_month_data
        .filter((f) => !f.is_crafted)
        .map((item) => {
          return {
            id: item.id,
            rarity: item.rarity,
            image: item.image,
            name: item.day + "/" + item.month,
          };
        });
    } else if (selectedCraft === "year") {
      tempData = nft_card_year_data
        .filter((f) => !f.is_crafted)
        .map((item) => {
          return {
            id: item.id,
            rarity: item.rarity,
            image: item.image,
            name: item.year,
          };
        });
    } else if (selectedCraft === "category") {
      tempData = nft_card_category_data
        .filter((f) => !f.is_crafted)
        .map((item) => {
          return {
            id: item.id,
            rarity: item.rarity,
            image: item.image,
            name: item.category,
          };
        });
    } else if (selectedCraft === "identity") {
      tempData = nft_card_identity_data
        .filter((f) => !f.is_crafted)
        .map((item) => {
          return {
            id: item.id,
            rarity: item.rarity,
            image: item.image,
            name: item.category,
          };
        });
    } else if (selectedCraft === "trigger") {
      tempData = nft_card_trigger_data
        .filter((f) => !f.is_crafted)
        .map((item) => {
          return {
            id: item.id,
            rarity: item.rarity,
            image: item.image,
            name: item.trigger,
          };
        });
    }
    setNftData(tempData);
  }, [selectedCraft]);

  return (
    <SelectCardSectionWrapper>
      <SelectCardSectionContainer>
        {nftData?.length > 0 ? (
          <>
            <h2>
              Select a <span>{selectedCraft}</span> Card
            </h2>
            <FilterWrapper>
              <SelectBoxWrapper>
                <SelectBox
                  isFilter
                  options={raritiesOption}
                  placeholder="All Rarities"
                />
              </SelectBoxWrapper>
              <SelectBoxWrapper>
                <SelectBox
                  isFilter
                  options={statusOption}
                  placeholder="Status"
                />
              </SelectBoxWrapper>
              <SortButton>
                <IconSort />
              </SortButton>
            </FilterWrapper>
            <CardGridWrapper>
              {nftData.map((item, key) => (
                <CraftingCardWrapper
                  key={key}
                  active={clickedCard === item.id ? "true" : undefined}
                >
                  <CraftCard
                    onClick={() => onCardClicked(item.id)}
                    bg={item.image}
                  >
                    {item.rarity === 0 && <span>Common</span>}
                    {item.rarity === 1 && <span>Uncommon</span>}
                    {item.rarity === 2 && <span>Rare</span>}
                    <p>{item.name}</p>
                  </CraftCard>
                  <SelectButton
                    className="select-button"
                    disabled={
                      clickedCard !== item.id || selectedCard === item.id
                      // ? "true"
                      // : undefined
                    }
                    onClick={
                      clickedCard !== item.id || selectedCard === item.id
                        ? () => {}
                        : () => onCardSelected(item.id, selectedCraft)
                    }
                  >
                    Select
                  </SelectButton>
                </CraftingCardWrapper>
              ))}
            </CardGridWrapper>
          </>
        ) : (
          <EmptyCards>
            <h3>
              No <span className="capitalize">{selectedCraft}</span> Cards
            </h3>
            <p style={{ maxWidth: "243px" }}>
              It looks like you don’t have any{" "}
              <span className="capitalize">{selectedCraft}</span> cards yet.
            </p>
            <Button className="buy-button" onClick={() => navigate("/buy")}>
              Buy Packs
            </Button>
            <Button
              className="buy-button"
              onClick={() => navigate("/marketplace")}
            >
              Go to Marketplace
            </Button>
          </EmptyCards>
        )}
      </SelectCardSectionContainer>
    </SelectCardSectionWrapper>
  );
};
