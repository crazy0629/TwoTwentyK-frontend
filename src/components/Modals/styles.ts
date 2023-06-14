import { styled } from "styled-components";

export const ModalWrapper = styled.div<{ open?: boolean }>`
  position: fixed;
  width: 100%;
  height: 100vh;
  padding: 50px 0;
  left: 0;
  top: 0;
  display: flex;
  z-index: 100;
  align-items: center;
  justify-content: center;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
`;

export const ModalOverlay = styled.div`
  background: rgba(36, 36, 36, 0.5);
  backdrop-filter: blur(2px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalContainer = styled.div<{ width?: number }>`
  position: absolute;
  padding: 30px 35px;
  z-index: 1;
  background: #ffffff;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  width: 95%;
  max-width: ${({ width }) => (width ? width + "px" : "768px")};
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 21px;
  cursor: pointer;
  right: 21px;
  font-size: 30px;
  line-height: 20px;
  color: #898989;
`;

export const SellConfirmModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    padding-top: 24px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
    text-align: center;
    max-width: 228px;
  }
`;

export const IconWrapper = styled.div`
  padding: 24px 0 0;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  & > :not(:first-child) {
    margin-top: 16px;
  }
  & > div {
    height: 42px;
  }
`;

export const BuyPackConfirmModalWrapper = styled.div`
  padding-top: 15px;
  text-align: center;
  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 129.02%;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    max-width: 228px;
    margin: auto;
    width: 100%;
    margin-top: 34px;
    margin-bottom: 34px;
  }
`;

export const UseBalanceBuyModalWrapper = styled.div`
  text-align: center;
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }
  h3 {
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    span {
      line-height: 24px;
      font-weight: 400;
      font-size: 20px;
    }
  }
`;

export const BalanceBuyConfirmModalWrapper = styled.div`
  padding-top: 15px;
  text-align: center;
  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 129.02%;
    margin-bottom: 12px;
  }
  p {
    max-width: 280px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    opacity: 0.5;
    margin-bottom: 12px;
  }
  h4 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    span {
      font-size: 16px;
      line-height: 19px;
      font-weight: 400;
    }
    margin-bottom: 22px;
  }
`;

export const BuyActionWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 35px;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    bottom: -30px;
    left: -35px;
    right: -35px;
    background: #f2f5ff;
    border-radius: 0 0 20px 20px;
  }
  .buy-button {
    width: 106px;
    height: 45px;
  }
  & > * {
    display: relative;
    z-index: 1;
  }
  & > div:first-child {
    h4 {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 2px;
    }
    span {
      color: #027fee;
      display: flex;
      width: fit-content;
      cursor: pointer;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
    }
  }
`;

export const BalanceForWithdrawModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    width: 100%;
    text-align: left;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 10px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin: 8px 0;
  }
  h4 {
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    span {
      font-size: 20px;
      line-height: 24px;
      font-weight: 400;
    }
  }
  .withdraw-button {
    height: 45px;
    margin-top: 40px;
  }
`;

export const WithdrawModalWrapper = styled.div`
  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 24px;
  }
`;

export const WithdrawInputGroup = styled.div`
  & > :not(:first-child) {
    margin-top: 20px;
  }
`;

export const AvailableAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 15px;
  line-height: 32px;
  span {
    opacity: 0.5;
  }
`;

export const WithdrawConfirmModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 129.02%;
  }
  p {
    margin: 20px auto;
    font-weight: 500;
    font-size: 14px;
    line-height: 125%;
    max-width: 228px;
    a {
      color: 000;
    }
  }
`;
