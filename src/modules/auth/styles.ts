import { styled } from "styled-components";

export const AuthFormWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  padding: 32px;
`;

export const ForgotPasswordText = styled.div`
  width: fit-content;
  margin-left: auto;
  a {
    font-weight: 500;
    font-size: 10px;
    line-height: 24px;
    color: #000000;
    cursor: pointer;
    opacity: 0.5;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }
`;

export const FormActionWrapper = styled.div`
  margin-top: 30px;
`;

export const FormActionText = styled.div`
  margin-top: 25px;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  a {
    font-weight: 700;
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const AuthFormDesc = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 17px;
`;

export const CheckEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h3 {
    margin: 32px 0 16px;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #898989;
    max-width: 287px;
    width: 100%;
  }
`;

export const ResendEmail = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-top: 32px;
  color: #898989;
  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const SignUpCheckbox = styled.label`
  display: flex;
  align-items: flex-start;
  margin-top: 26px;
  input {
    min-width: 16px;
    height: 16px;
    margin: 0;
  }
  span {
    margin-left: 12px;
    word-break: break-all;
    font-weight: 400;
    font-size: 11px;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.4);
    a {
      color: #000;
    }
  }
`;
