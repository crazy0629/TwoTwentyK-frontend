import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const AppLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 10;
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
`;

export const MainHeaderWrapper = styled.div`
  background-color: #fff;
  height: 76px;
  display: flex;
  align-items: center;
`;

export const MainHeaderContainer = styled.div`
  max-width: 1280px;
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const HeaderMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 43px;
  }
  @media screen and (max-width: 1200px) {
    & > :not(:first-child) {
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const HeaderNavItem = styled(Link)<{ active?: string }>`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  color: #000;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  text-decoration: none;
  &:hover {
    opacity: ${({ active }) => (active ? 1 : 0.75)};
  }
`;

export const SubHeaderWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  opacity: 0.5;
`;

export const SubHeaderContainer = styled.div`
  width: fit-content;
  cursor: pointer;
  padding: 0 20px;
  overflow-x: hidden;
  display: flex;
  height: 49px;
  align-items: center;
  justify-content: center;
  margin: auto;
  & > :not(:first-child) {
    margin-left: 60px;
  }
  @media screen and (max-width: 1024px) {
    & > :not(:first-child) {
      margin-left: 20px;
    }
  }
`;

export const SubMenuItem = styled(Link)<{ active?: string }>`
  color: #000000;
  font-weight: ${({ active }) => (active ? 700 : 500)};
  font-size: 16px;
  white-space: nowrap;
  line-height: 100%;
  text-decoration: none;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  &:hover {
    opacity: ${({ active }) => (active ? 1 : 0.75)};
  }
`;

export const AppContainer = styled.div<{ issubmenu?: string }>`
  padding-top: ${({ issubmenu }) => (issubmenu ? "125px" : "76px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const HeaderButtonGroup = styled.div`
  display: flex;
  align-items: center;
  .login-button {
    width: 124px;
    height: 47px;
    & > :not(:first-child) {
      margin-left: 16px;
    }
  }
  & > :not(:first-child) {
    margin-left: 18px;
  }
  @media screen and (max-width: 1200px) {
    & > :not(:first-child) {
      margin-left: 10px;
    }
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const HeaderButton = styled.div<{ width?: number }>`
  height: 48px;
  width: ${({ width }) => (width ? width + "px" : "48px")};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  &.active {
    background: #636363;
    color: #fff;
  }
  box-shadow: 1px 1.5px 3px rgba(0, 0, 0, 0.2);
  border-radius: 7.04px;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #00000077;
  cursor: pointer;
  & > :not(:first-child) {
    margin-left: 7px;
  }
`;

export const Badge = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff5c00;
  right: -3px;
  top: -3px;
  border-radius: 100%;
  font-weight: 700;
  font-size: 8.27273px;
  line-height: 10px;
  color: #ffffff;
`;

export const MobileMenuButton = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

export const CloseButton = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 17px;
  top: 12px;
`;

export const NotificationWrapper = styled.div<{ open: boolean }>`
  position: absolute;
  right: 0;
  z-index: 11;
  top: 60px;
  width: 400px;
  padding: 20px 25px;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  background: #ffffff;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  & > p {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    margin-top: 11px;
    cursor: pointer;
    opacity: 0.5;
    width: fit-content;
    margin-left: auto;
  }
  & > h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    color: #000;
    margin-bottom: 11px;
  }
`;

export const NotificationsGroup = styled.div`
  & > :not(:first-child) {
    margin-top: 11px;
  }
`;

export const NotificationButtonWrapper = styled.div`
  display: flex;
  position: relative;
`;
