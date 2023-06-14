import { styled } from "styled-components";

export const NotFoundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    font-weight: 700;
    font-size: 72px;
    line-height: 87px;
  }
  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 160%;
    margin-top: 10px;
  }
  .not-found-button {
    margin-top: 32px;
    width: 300px;
    height: 50px;
  }
`;
