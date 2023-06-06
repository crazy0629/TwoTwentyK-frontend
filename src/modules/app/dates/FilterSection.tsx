import React from "react";
import { FilterGroupWrapper, FilterSectionWrapper } from "./styles";

export const FilterSection: React.FC = () => {
  return (
    <FilterSectionWrapper>
      <p>Filter traits</p>
      <FilterGroupWrapper></FilterGroupWrapper>
    </FilterSectionWrapper>
  );
};
