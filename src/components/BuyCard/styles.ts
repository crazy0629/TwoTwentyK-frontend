import { styled } from "styled-components";

export const BuyCardWrapper = styled.div`
  cursor: pointer;
  box-shadow: 0px 0px 27.5768px rgba(0, 0, 0, 0.05);
  border-radius: 11px;
  height: 404px;
  background: url("/assets/buy.png") no-repeat;
  cursor: pointer;
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const CardType = styled.div`
  height: 46px;
  min-width: 125px;
  width: fit-content;
  margin-left: auto;
  border-radius: 0px 11px;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;
  font-weight: 500;
  font-size: 18px;
  background: #615e5e;
  line-height: 22px;
`;

export const CardAction = styled.div`
  min-height: 104px;
  padding: 20px 23px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 0 0 11px 11px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.08) 18.23%,
    rgba(0, 0, 0, 0.35) 51.56%,
    rgba(0, 0, 0, 0.8) 100%
  );
  .buy-button {
    height: 46px;
    width: 137px;
  }
  div:first-child {
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      color: #ffffff;
      opacity: 0.5;
    }
    h3 {
      line-height: 100%;
      margin-top: 5px;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      span {
        font-size: 19px;
        font-weight: 700;
      }
    }
  }
`;
