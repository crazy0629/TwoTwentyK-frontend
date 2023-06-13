import { styled } from "styled-components";

export const ClaimsSectionWrapper = styled.div`
  margin-top: 62px;
  max-width: 1100px;
  width: 95%;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 28px 24px 0;
  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
    margin-bottom: 26px;
  }
`;

export const ClaimsTableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
  tr:nth-child(even) {
    background: #f2f5ff;
  }
  span {
    color: #000;
  }
  span.amount-cell {
    color: #b01212;
  }
  tr:nth-child(odd) {
    background: #fff;
  }
  tr,
  td,
  th {
    border-collapse: collapse;
  }
  th {
    border-bottom: 1px solid #e1e3e7;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
  }
  td {
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.5);
  }
  th,
  td {
    padding: 12px 15px;
    text-align: left;
  }
`;

export const Status = styled.div<{ color: string; bg: string }>`
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  padding: 2px 10px;
  width: fit-content;
`;

export const PaginatonWrapper = styled.div`
  margin-top: 26px;
  padding: 12px 0;
  display: flex;
  width: 100%;
  align-items: center;
  border-top: 1px solid #e1e3e7;
  justify-content: space-between;
  & > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    opacity: 0.5;
  }
  .page-link {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1px;
    padding: 0;
  }
`;

export const EmptyData = styled.div`
  padding: 100px 0 124px;
  text-align: center;
  .empty-button {
    width: 203px;
    height: 51px;
    margin: auto;
    margin-top: 20px;
  }
`;
