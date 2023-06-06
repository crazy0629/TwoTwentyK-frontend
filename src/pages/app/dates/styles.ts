import { styled } from "styled-components";

export const DatesPageWrapper = styled.div`
  max-width: 1100px;
  width: 95%;
  margin: auto;
  padding: 20px 0;
`;

export const DatePageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }
  margin-bottom: 8px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  .buy-button {
    height: 51px;
    width: 118px;
  }
  & > :not(:first-child) {
    margin-left: 19px;
  }
`;
