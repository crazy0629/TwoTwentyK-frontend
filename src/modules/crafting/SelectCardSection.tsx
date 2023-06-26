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
import { IconSort, SelectBox } from "../../components";
import { craftingCardData, raritiesOption, statusOption } from "./data";
import { SortButton } from "../app/dates/styles";

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
  return (
    <SelectCardSectionWrapper>
      <SelectCardSectionContainer>
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
            <SelectBox isFilter options={statusOption} placeholder="Status" />
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
      </SelectCardSectionContainer>
    </SelectCardSectionWrapper>
  );
};
