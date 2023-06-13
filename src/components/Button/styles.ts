import { styled } from "styled-components";

export const ButtonWrapper = styled.div<{
  disabled?: boolean;
  variant?: string;
}>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ variant }) =>
    variant === "outlined" ? "#fff" : "#000"};
  border: 1px solid #000;
  border-radius: 8px;
  height: 53px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ variant }) => (variant === "outlined" ? "#000" : "#fff")};
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  & > :not(:first-child) {
    margin-left: 10px;
  }
`;
