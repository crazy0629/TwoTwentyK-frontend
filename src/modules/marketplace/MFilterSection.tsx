import React from "react";
import { FilterSectionGrid, FilterSectionWrapper } from "./styles";
import { IconSort, SelectBox } from "../../components";
import { SortButton } from "../app/dates/styles";
import {
  cardTypeOption,
  collectionOption,
  statusOption,
  triggerTypeOption,
} from "./data";

export const MFilterSection: React.FC<{ page?: string }> = ({ page }) => {
  return (
    <FilterSectionWrapper>
      <h3>Filter traits</h3>
      <FilterSectionGrid>
        {!page && (
          <>
            <SelectBox
              isFilter
              options={cardTypeOption}
              placeholder="Categories"
            />
            <SelectBox options={collectionOption} placeholder="Collections" />
            <SelectBox isFilter options={statusOption} placeholder="Status" />
          </>
        )}
        {page === "predictions" && (
          <>
            <SelectBox
              isFilter
              options={triggerTypeOption}
              placeholder="Trigger Type"
            />
            <SelectBox
              isFilter
              options={cardTypeOption}
              placeholder="Categories"
            />
            <SelectBox
              isFilter
              options={cardTypeOption}
              placeholder="Collections"
            />
            <SelectBox options={collectionOption} placeholder="All Rarities" />
            <SelectBox isFilter options={statusOption} placeholder="Status" />
          </>
        )}
        <SortButton>
          <IconSort />
        </SortButton>
      </FilterSectionGrid>
    </FilterSectionWrapper>
  );
};
