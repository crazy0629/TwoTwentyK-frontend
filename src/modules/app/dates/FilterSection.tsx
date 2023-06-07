import React from "react";
import { FilterGroupWrapper, FilterSectionWrapper, SortButton } from "./styles";
import { IconSort, SelectBox } from "../../../components";
import {
  categoryOption,
  collectionOption,
  rarityOption,
  statusOption,
} from "./data";

export const FilterSection: React.FC = () => {
  return (
    <FilterSectionWrapper>
      <p>Filter traits</p>
      <FilterGroupWrapper>
        <SelectBox isFilter options={categoryOption} placeholder="Categories" />
        <SelectBox options={collectionOption} placeholder="Collections" />
        <SelectBox isFilter options={rarityOption} placeholder="All Rarities" />
        <SelectBox isFilter options={statusOption} placeholder="Status" />
        <SortButton>
          <IconSort />
        </SortButton>
      </FilterGroupWrapper>
    </FilterSectionWrapper>
  );
};
