import { styled } from "styled-components";

export const CardWrapper = styled.div<{ bg: string }>`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 293px;
  background: ${({ bg }) =>
    bg
      ? `url(${bg}) no-repeat, #fff`
      : "linear-gradient(0deg, #CDCDCD, #CDCDCD), url(.png), #FFFFFF"};
  background-blend-mode: luminosity, normal;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  &:hover {
    .overlay {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const CardTopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CardBottomSection = styled.div`
  height: 75px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.08) 18.23%,
    rgba(0, 0, 0, 0.35) 51.56%,
    rgba(0, 0, 0, 0.8) 100%
  );
  color: #fff;
  border-radius: 0 0 8px 8px;
  padding: 14px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h4 {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 4px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }
`;

export const CardOverlay = styled.div`
  opacity: 0;
  visibility: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(11, 11, 11, 0.6);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > :not(:first-child) {
    margin-top: 12px;
  }
`;

export const Rarity = styled.div`
  height: 30px;
  border-radius: 0 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  min-width: 81px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 20px;
  background: #615e5e;
`;

export const StatusWrapper = styled.div`
  & > * {
    margin-top: 8px;
    padding: 0 7px;
    height: 23px;
    border-radius: 0 4px 4px 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    width: fit-content;
  }
  p {
    background-color: rgba(255, 255, 255, 0.8);
    color: #000;
  }
  span {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
  }
`;
