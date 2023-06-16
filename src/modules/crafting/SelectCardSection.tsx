import React, { useState } from "react";
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
}> = ({ page }) => {
  const [clickedCard, setClickedCard] = useState<number>(-1);

  const handleCardClick = (id: number) => {
    setClickedCard(id);
  };

  const handleSelectClick = (id: number) => {};

  return (
    <SelectCardSectionWrapper>
      <SelectCardSectionContainer>
        <h2>Select a Crafting Card</h2>
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
              <CraftCard onClick={() => handleCardClick(key)} bg={item.image}>
                <span>{item.rarities}</span>
                <p>Crafting</p>
              </CraftCard>
              <SelectButton
                className="select-button"
                onClick={() => handleSelectClick(key)}
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
