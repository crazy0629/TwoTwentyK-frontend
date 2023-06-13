import { styled } from "styled-components";

export const ProfileSectionWrapper = styled.div`
  max-width: 400px;
  width: 95%;
  margin-top: 65px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 26px 0 40px;
`;

export const MyProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    text-align: center;
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
    margin-bottom: 35px;
  }
`;

export const ProfileItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 46px;
  &:not(:last-child) {
    border-bottom: 1px solid #00000016;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  p {
    margin-bottom: 10px;
    span {
      margin-left: 5px;
      font-weight: 400;
      opacity: 1;
    }
  }
  & > span,
  & > input {
    color: #0c092a;
    display: block;
    min-height: 21px;
    opacity: 0.5;
    border: none;
    outline: none;
  }
`;

export const ItemAction = styled.div`
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: #0c092a;
  opacity: 0.5;
`;

export const ProfileEditWrapper = styled.div`
  padding: 0 32px;
`;

export const BackProfile = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 125%;
  width: fit-content;
  cursor: pointer;
`;

export const ProfileEditContent = styled.div`
  margin-top: 36px;
  .continue-button {
    margin-top: 20px;
    height: 51px;
  }
`;

export const InputGroup = styled.div`
  & > :not(:first-child) {
    margin-top: 11px;
  }
`;
