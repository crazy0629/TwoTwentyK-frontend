import { styled } from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    margin-bottom: 6px;
  }

  span {
    font-weight: 400;
    font-size: 10px;
    line-height: 24px;
    color: #ff0000;
  }
`;

export const InputDescWrapper = styled.div`
  margin-top: 14px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(12, 9, 42, 0.5);
`;

export const InputWrapper = styled.div<{ iserror?: string; suffix?: string }>`
  border: 1px solid ${({ iserror }) => (iserror ? "#ff0000" : "#E4E4E4")};
  border-radius: 4px;
  display: flex;
  align-items: center;
  background-color: #fff;
  position: relative;

  input {
    height: 40px;
    width: 100%;
    outline: none;
    padding: 0 16px;
    padding-right: ${({ suffix }) =>
      suffix === "code" ? "95px" : suffix === "password" ? "40px" : "16px"};
    border: none;
    border-radius: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    background-color: transparent;
  }
  div {
    position: absolute;
    display: flex;
    width: fit-content;
    cursor: pointer;
    right: 10px;
    &.code {
      width: 80px;
      font-weight: 700;
      font-size: 12px;
      line-height: 150%;
      color: #0c092a;
      opacity: 0.2;
    }
  }
`;
