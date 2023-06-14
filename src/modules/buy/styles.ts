import { styled } from "styled-components";

export const BuyPackWrapper = styled.div`
  padding: 50px 0;
  max-width: 1240px;
  margin: auto;
  width: 95%;
  & > h2 {
    margin-bottom: 30px;
    padding: 0 72px;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const BuyPackTextWrapper = styled.div`
  padding: 0 72px;

  h3 {
    margin-bottom: 14px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    opacity: 0.5;
    margin-bottom: 24px;
  }
`;

export const BuyPackSlider = styled.div`
  .mySwiper {
    padding: 0px 72px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #676161;
    height: 100%;
    background-color: #f2f5ff;
    top: 0;

    margin-top: 0;
    width: 50px;
    &::after {
      font-size: 20px;
      font-weight: 900;
    }
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    right: 0;
  }
`;

export const BuyPackCollectionWrapper = styled.div<{ isview?: string }>`
  margin-bottom: 30px;
`;

export const BuyDetailsWrapper = styled.div<{ isview?: string }>`
  z-index: 10;
  max-width: 405px;
  width: 100%;
  height: calc(100% - 77px);
  background-color: #fff;
  position: fixed;
  top: 77px;
  right: ${({ isview }) => (isview ? "0" : "-405px")};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BuyPackSectionWrapper = styled.div<{ isview?: string }>`
  width: 100%;
  padding-right: ${({ isview }) => (isview ? "405px" : "0px")};
  @media screen and (max-width: 1300px) {
    padding-right: 0;
  }
`;

export const BuyDetailsContainer = styled.div`
  position: relative;
  overflow-y: auto;
  padding: 33px 52px;
  width: 100%;
  .buy-confirm-button {
    height: 45px;
    margin-top: 30px;
  }
`;

export const PreviewCard = styled.div`
  margin-top: 30px;
  background: url("/assets/buy.png") no-repeat;
  background-size: cover;
  background-position: center;
  height: 301px;
  border-radius: 10px;
  width: 100%;
  & > div {
    width: 100px;
    height: 37px;
    background-color: #615e5e;
    font-weight: 500;
    font-size: 15.7196px;
    line-height: 19px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 10px;
    margin-left: auto;
  }
`;

export const TotalPrice = styled.div`
  border-top: 1px solid #00000016;
  margin-top: 10px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  p {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
  }
  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }
`;

export const BuyCounterWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  margin-top: 16px;
  padding: 20px 0;
  &::after {
    position: absolute;
    content: "";
    background-color: #f9faff;
    top: 0;
    bottom: 0;
    right: -52px;
    left: -52px;
  }
  p {
    position: relative;
    z-index: 1;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    span {
      font-weight: 700;
      font-size: 14px;
      line-height: 100%;
    }
  }
`;

export const Counter = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  background: #fff;
  div {
    cursor: pointer;
  }
  div,
  span {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
  }
  span {
    background: rgba(215, 215, 215, 0.5);
  }
`;

export const BackButton = styled.div`
  display: flex;
  position: absolute;
  left: 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  top: 25px;
  cursor: pointer;
  width: fit-content;
`;

export const SummaryWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  padding: 28px 0;
  margin-bottom: 40px;
  & > * {
    position: relative;
    z-index: 1;
  }
  h3 {
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 18px;
  }
  &::after {
    position: absolute;
    background-color: #f9faff;
    content: "";
    top: 0;
    bottom: 0;
    right: -52px;
    left: -52px;
  }
`;

export const SummaryContent = styled.div`
  display: flex;
  align-items: center;
  mix-blend-mode: luminosity;
  img {
    min-width: 117px;
    height: 117px;
    border-radius: 4px;
    margin-right: 32px;
  }
  & > div {
    div {
      &:not(:first-child) {
        margin-top: 12px;
      }
      p {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        /* margin-bottom: 6px; */
      }
      span {
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
      }
    }
  }
`;

export const PaymentMethodWrapper = styled.div`
  h3 {
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 30px;
  }
  .pay-button {
    height: 49px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 20px;
  }
`;
