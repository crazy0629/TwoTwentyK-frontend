import { styled } from "styled-components";

export const ButtonWrapper = styled.div<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: #000;
  border-radius: 8px;
  height: 53px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
`;
