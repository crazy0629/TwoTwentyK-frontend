import { styled } from "styled-components";

export const TransactionsWrapper = styled.div`
  margin-top: 62px;
  padding: 28px 0;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  max-width: 806px;
  width: 95%;
  h2 {
    padding: 0 24px;
    margin-bottom: 26px;
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
  }
`;

export const TransactionActionWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #e1e3e7;
  padding: 28px 24px 0;
  .withdraw-button {
    width: 255px;
    height: 45px;
  }
`;
