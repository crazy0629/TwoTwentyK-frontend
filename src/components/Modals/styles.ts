import { styled } from "styled-components";

export const ModalWrapper = styled.div<{ open?: string }>`
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
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
    text-align: center;
    max-width: 228px;
  }
`;

export const IconWrapper = styled.div`
  padding: 24px 0;
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
