import { styled } from "styled-components";

export const CraftingWrapper = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 125px);
  & > .unAuth-display {
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin: 50px auto;
    align-items: center;
    justify-content: center;
    & > p,
    & > h4 {
      text-align: center;
      font-size: 16px;
      line-height: 125%;
      max-width: 315px;
      margin: auto;
    }
    & > p {
      font-weight: 400;
    }
    & > h4 {
      font-weight: 600;
      margin-top: 12px;
    }
    & > .login-button {
      width: 255px;
      margin-top: 28px;
      height: 51px;
    }
  }
`;

export const CraftLeftWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CraftRightWrapper = styled.div`
  max-width: 405px;
  width: 100%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  background: #f9faff;
  display: flex;
  flex-direction: column;
`;
