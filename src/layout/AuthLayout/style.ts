import styled from "styled-components";

export const AuthLayoutWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const AuthContainer = styled.div`
  padding: 50px 0;
  padding-top: 145px;
  margin: auto;
  width: 95%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  height: 95px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  width: 95%;
  margin: auto;
  max-width: 1280px;
`;

export const FooterWrapper = styled.div`
  max-width: 1280px;
  width: 95%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  padding: 36px 0;
`;

export const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  margin-right: 12px;
  letter-spacing: 0.05em;
  h4 {
    font-weight: 900;
    font-size: 11.8524px;
    line-height: 14px;
  }
  p {
    font-weight: 600;
    font-size: 9.16667px;
    line-height: 11px;
  }
`;

export const FooterDesc = styled.div`
  p {
    font-weight: 400;
    font-size: 7px;
    line-height: 100%;
    letter-spacing: 0.335em;
  }
`;
