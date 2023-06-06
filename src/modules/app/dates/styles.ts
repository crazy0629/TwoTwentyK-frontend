import { styled } from "styled-components";

export const FilterSectionWrapper = styled.div`
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 12px;
  }
  margin-bottom: 20px;
`;

export const FilterGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 18px;
  }
`;
