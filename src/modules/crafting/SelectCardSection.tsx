import React from "react";
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
import { useMarketplaceListContext } from "../../context";
import { EmptyCards } from "../../pages/app/category/styles";
import { useNavigate } from "react-router-dom";

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
  const { marketplaceListContext } = useMarketplaceListContext();

  return (
    <SelectCardSectionWrapper>
      <SelectCardSectionContainer>
        {marketplaceListContext?.length > 0 ? (
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
              {craftingCardData.map((item, key) => (
                <CraftingCardWrapper
                  key={key}
                  active={clickedCard === key ? "true" : undefined}
                >
                  <CraftCard onClick={() => onCardClicked(key)} bg={item.image}>
                    <span>{item.rarities}</span>
                    <p>{selectedCraft}</p>
                  </CraftCard>
                  <SelectButton
                    className="select-button"
                    disabled={
                      clickedCard !== key || selectedCard === key
                      // ? "true"
                      // : undefined
                    }
                    onClick={
                      clickedCard !== key || selectedCard === key
                        ? () => {}
                        : () => onCardSelected(key, selectedCraft)
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
