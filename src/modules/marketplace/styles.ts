import { styled } from "styled-components";

export const FilterSectionWrapper = styled.div`
  & > h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 12px;
  }
`;

export const FilterSectionGrid = styled.div`
  display: flex;
  justify-content: space-between;
  & > :not(:first-child) {
    margin-left: 20px;
  }
`;

export const CardGridWrapper = styled.div`
  margin-top: 36px;
  display: grid;
  grid-gap: 42px;
  grid-template-columns: repeat(4, 1fr);
`;

export const MSidebarWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  top: 125px;
  width: 100%;
  max-width: 405px;
  height: calc(100% - 125px);
  right: ${({ open }) => (open ? "0" : "-405px")};
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MSidebarContainer = styled.div`
  position: relative;
  overflow-y: auto;
  padding: 33px 52px;
  width: 100%;
  h2 {
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 32px;
    width: 100%;
  }
  .sell-confirm-button {
    height: 45px;
    margin-top: 30px;
  }
  & > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    opacity: 0.5;
    margin-top: -15px;
    margin-bottom: 25px;
  }
  & > .owner {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-top: 30px;
    opacity: 1;
  }
`;

export const ViewCardWrapper = styled.div`
  max-width: 250px;
  width: 100%;
  margin: auto;
`;

export const MyBalanceWrapper = styled.div`
  display: flex;
  margin-bottom: 33px;
  align-items: center;
  padding: 23px 0;
  position: relative;
  & > * {
    position: relative;
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: -52px;
    right: -52px;
    background: #f9faff;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
  }
`;

export const IconWRapper = styled.div`
  margin-right: 30px;
`;

export const BalanceInfo = styled.div`
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 12px;
  }
  h3 {
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    span {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
