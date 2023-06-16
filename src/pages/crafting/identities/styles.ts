import { styled } from "styled-components";

export const CraftingWrapper = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 125px);
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
