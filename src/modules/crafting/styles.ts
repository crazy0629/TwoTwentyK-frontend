import { styled } from "styled-components";

export const CraftSectionWrapper = styled.div`
  width: 100%;
  padding: 24px 0 45px;
  max-width: 825px;
  margin: auto;
  height: 414px;
  overflow-y: auto;
  & > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #6c6c6c;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }
  .craft-button {
    max-width: 243px;
    width: 100%;
    height: 42px;
  }
`;

export const CraftCardWrapper = styled.div`
  width: 146px;
  h6 {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
`;

export const EmptyCraftCard = styled.div<{ active?: string }>`
  background: #ffffff;
  cursor: pointer;
  box-shadow: ${({ active }) =>
    active
      ? "inset 1.20078px 1.20078px 19.2125px rgba(51, 47, 255, 0.36), inset 1.20078px 1.20078px 3.60234px rgba(0, 0, 0, 0.2)"
      : "inset 1.20078px 1.20078px 4.20272px rgba(0, 0, 0, 0.2)"};
  border-radius: 7.20467px;
  width: 100%;
  height: 178px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "+";
    font-weight: 500;
    font-size: 55.5777px;
    line-height: 50%;
    position: absolute;
    color: #bcbbeb;
    opacity: 0.35;
  }
`;

export const CraftCardGroup = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: flex-end;
  & > :not(:first-child) {
    margin-left: 28px;
  }
`;

export const SelectCardSectionWrapper = styled.div`
  background: rgba(251, 252, 255, 0.8);
  flex: 1;
  overflow-y: auto;
`;

export const SelectCardSectionContainer = styled.div`
  & > h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 15px;
    span {
      text-transform: capitalize;
    }
  }
  padding: 32px 0;
  max-width: 825px;
  width: 100%;
  margin: auto;
`;

export const FilterWrapper = styled.div`
  display: flex;
  margin-bottom: 14px;
  & > :not(:first-child) {
    margin-left: 10px;
  }
`;

export const SelectBoxWrapper = styled.div`
  width: 180px;
`;

export const CardGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const CraftingCardWrapper = styled.div<{ active?: string }>`
  padding: 14px;
  border-radius: 16px;
  background: ${({ active }) => (active ? "#dbdee8" : "transparent")};
  box-shadow: ${({ active }) =>
    active ? "0px 0px 14.9405px rgba(0, 0, 0, 0.05)" : "none"};
  /* .select-button {
    opacity: ${({ active }) => (active ? 1 : 0.15)};
  } */
`;

export const CraftCard = styled.div<{ bg: string }>`
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: 5px;
  contain: content;
  background-blend-mode: luminosity, normal;
  background: ${({ bg }) => `url(${bg}) no-repeat, #fff`};
  background-size: cover;
  background-position: center;
  &.preview {
    max-width: 230px;
    height: 278px;
    margin: auto;
    margin-bottom: 28px;
  }
  &.crafting-card {
    width: 100%;
    height: 178px;
    border: 1.61734px solid rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.17);
    border-radius: 5px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  span {
    z-index: 1;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 22px;
    min-width: 60px;
    background: #615e5e;
    border-radius: 0px 5px;
    font-weight: 500;
    padding: 0 10px;
    font-size: 10.4583px;
    line-height: 13px;
    right: 0;
    color: #ffffff;
    top: 0;
  }
  p {
    position: absolute;
    bottom: 0;
    background: #d2d4dd;
    font-weight: 400;
    font-size: 11.9981px;
    text-transform: capitalize;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    line-height: 15px;
  }
`;

export const SelectButton = styled.div<{ disabled: boolean }>`
  width: 100%;
  background-color: #000;
  border-radius: 40px;
  height: 32px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.15 : 1)};
`;

export const CardPreviewSectionWrapper = styled.div`
  padding: 38px 46px;
  flex: 1;
  overflow-y: auto;
  & > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    opacity: 0.5;
    text-align: center;
    max-width: 242px;
    width: 100%;
    margin: auto;
    margin-top: 50px;
  }
  & > h2 {
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 29px;
  }
`;

export const MatchListSectionWrapper = styled.div`
  height: 414px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  & > h2 {
    padding: 33px 20px 0;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
  }
  & > p {
    margin-top: 4px;
    margin-bottom: 26px;
    padding: 0 46px;
    text-align: center;
  }
  & > .empty-matched {
    opacity: 0.5;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: auto;
    /* margin-top: 50px; */
    max-width: 242px;
    padding: 0;
  }
`;

export const MatchListGroup = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 46px 20px;
`;

export const MatchListItemWrapper = styled.div`
  padding: 9px 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
`;

export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const ItemContent = styled.div`
  display: grid;
  grid-gap: 9px;
  padding-top: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

export const ItemContentInfoWrapper = styled.div`
  cursor: pointer;
  background: #f3f4fa;
  border: 1px solid transparent;
  border-radius: 4px;
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.15));
  padding: 4px;
  text-align: center;
  h4 {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 2px;
  }
  &.red {
    &.active {
      border: 1px solid #ee3f3f;
    }
    h5 {
      color: #ee3f3f;
    }
  }
  &.green {
    &.active {
      border: 1px solid #23b983;
    }
    h5 {
      color: #23b983;
    }
  }
  &.purple {
    &.active {
      border: 1px solid #8f00ff;
    }
    h5 {
      color: #8f00ff;
    }
  }
  h5 {
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
`;

export const MatchListInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  & > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    flex: 1;
  }
`;

export const ItemIconWrapper = styled.div`
  min-width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4fa;
  border-radius: 4px;
  margin-right: 11px;
  svg {
    width: 27px;
  }
`;

export const TriggerListType = styled.div`
  &::before {
    content: "";
    width: 5px;
    height: 5px;
    margin-right: 5px;
    border-radius: 5px;
    background: #000000;
    opacity: 0.5;
  }
  height: 32px;
  min-width: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 10px;
  background: #f3f4fa;
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  font-weight: 600;
  line-height: 12.604px;
  text-transform: uppercase;
`;

export const AddTrigger = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    color: #000;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.5;
    margin-left: 9px;
  }
  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 1.222px;
    background: #fff;
    box-shadow: 0.20369602739810944px 0.20369602739810944px 0.6110880374908447px
        0px rgba(0, 0, 0, 0.2) inset,
      0.20369602739810944px 0.20369602739810944px 3.259136438369751px 0px
        rgba(51, 47, 255, 0.36) inset;
    color: #bcbbeb50;
    font-size: 23.361px;
    font-weight: 500;
    line-height: 20.558px;
  }
`;
