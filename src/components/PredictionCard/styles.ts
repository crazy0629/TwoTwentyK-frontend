import { styled } from "styled-components";

export const PredictionCardWrapper = styled.div<{
  bg?: string;
  height?: number;
  isnothover?: string;
}>`
  cursor: pointer;
  position: relative;
  width: 100%;
  contain: content;
  border-radius: 6px;
  box-shadow: 0px 0px 15.3925px rgba(0, 0, 0, 0.05);
  background: ${({ bg }) =>
    bg
      ? `url(${bg}) no-repeat, #fff `
      : "linear-gradient(0deg, #fff, #fff), #FFFFFF;"};
  background-blend-mode: luminosity;
  background-size: cover;
  background-position: center;
  height: ${({ height }) => (height ? height + "px" : "225px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ isnothover }) =>
    isnothover &&
    `
    &:hover {
      z-index: 2;
      .overlay {
        opacity: 1;
        visibility: visible;
      }
    }
  `}
`;

export const CardTopWrapper = styled.div`
  display: flex;
  color: #fff;
  /* align-items: center; */
  justify-content: space-between;
  & > div.trigger {
    font-weight: 600;
    font-size: 9.91751px;
    line-height: 10px;
    display: flex;
    align-items: center;
    padding: 9px;
    &::before {
      width: 4px;
      height: 4px;
      content: "";
      background-color: #fff;
      margin-right: 5px;
      border-radius: 4px;
    }
  }
`;

export const CardBottomWrapper = styled.div`
  background-color: #e4e4e4;
  position: relative;
  display: flex;
  height: 36px;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 10.7747px;
  border-radius: 0 0 6px 6px;
  line-height: 13px;
`;

export const CardDateWrapper = styled.div`
  display: flex;
  div {
    height: 23px;
    font-weight: 500;
    font-size: 8.46587px;
    line-height: 8px;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  .date {
    border-radius: 5px 0px;
  }

  .year,
  .month {
    border-radius: 0 0 5px 5px;
    margin-left: 4px;
  }
`;

export const CardTypeWrapper = styled.div`
  height: 30px;
  max-width: 62px;
  font-weight: 400;
  font-size: 10.7747px;
  line-height: 13px;
  width: 100%;
  background-color: #615e5e;
  padding: 0 10px;
  display: flex;
  border-radius: 0 5px;
  justify-content: center;
  align-items: center;
`;

export const AmountWrapper = styled.div`
  right: 4px;
  top: -18px;
  position: absolute;
  width: 14px;
  height: 14px;
  font-weight: 500;
  font-size: 8.46587px;
  line-height: 8px;
  border-radius: 3px;
  background: rgb(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const CardBodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 20px;
    font-weight: 600;
    font-size: 8.4532px;
    line-height: 8px;
    text-transform: uppercase;
    color: #989898;
  }
`;
