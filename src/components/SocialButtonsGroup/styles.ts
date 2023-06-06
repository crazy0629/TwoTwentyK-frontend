import { styled } from "styled-components";

export const SocialButtonsWrapper = styled.div`
  & > :not(:first-child) {
    margin-top: 16px;
  }
  margin-bottom: 20px;
`;

export const AuthDividerWrapper = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  span {
    margin: 0 5px;
  }
  &::after,
  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #000;
    opacity: 0.15;
  }
`;
