import { styled } from "styled-components";

export const MarketplacePageWrapper = styled.div<{ sidebar?: string }>`
  width: 100%;
  position: relative;
  padding-top: 30px;
  margin-right: ${({ sidebar }) => (sidebar ? "405px" : "0")};
`;

export const MarketplacePageContainer = styled.div`
  width: 95%;
  max-width: 1100px;
  margin: auto;
  & > h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 18px;
  }
`;
