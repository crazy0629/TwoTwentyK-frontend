import React from "react";
import { FilterSectionGrid, FilterSectionWrapper } from "./styles";
import { IconSort, SelectBox } from "../../components";
import { SortButton } from "../app/dates/styles";
import { cardTypeOption, collectionOption, statusOption } from "./data";

export const MFilterSection: React.FC = () => {
  return (
    <FilterSectionWrapper>
      <h3>Filter traits</h3>
      <FilterSectionGrid>
        <SelectBox isFilter options={cardTypeOption} placeholder="Categories" />
        <SelectBox options={collectionOption} placeholder="Collections" />
        <SelectBox isFilter options={statusOption} placeholder="All Rarities" />
        <SortButton>
          <IconSort />
        </SortButton>
      </FilterSectionGrid>
    </FilterSectionWrapper>
  );
};
