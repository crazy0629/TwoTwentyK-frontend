import React, { useEffect, useState } from "react";
import {
  Badge,
  HeaderButton,
  HeaderButtonGroup,
  HeaderMenuWrapper,
  HeaderNavItem,
  HeaderWrapper,
  MainHeaderContainer,
  MainHeaderWrapper,
  MobileMenuButton,
  NotificationButtonWrapper,
  SubHeaderContainer,
  SubHeaderWrapper,
  SubMenuItem,
} from "./styles";
import {
  HeaderLogo,
  IconAlarm,
  IconCoins,
  IconMenu,
  IconProfile,
} from "../../components";
import { headerData } from "./data";
import { useLocation } from "react-router-dom";
import { AppHeaderMenuItemProps } from "../../types";
// import { Notification } from "./Notification";

export const Header: React.FC = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<AppHeaderMenuItemProps>();

  useEffect(() => {
    setCurrentPath(
      headerData.filter(
        (f) => f.to === "/" + location.pathname.split("/")[1]
      )[0]
    );
  }, [location]);

  return (
    <HeaderWrapper>
      <MainHeaderWrapper>
        <MainHeaderContainer>
          <HeaderLogo />
          <HeaderMenuWrapper>
            {headerData.map((item, key) => (
              <HeaderNavItem
                key={key}
                to={item.to}
                active={currentPath?.to === item.to ? "true" : undefined}
              >
                {item.label}
              </HeaderNavItem>
            ))}
          </HeaderMenuWrapper>
          <HeaderButtonGroup>
            <HeaderButton width={124}>
              <IconCoins />
              <span>$1,325.00</span>
            </HeaderButton>
            <HeaderButton width={124}>
              <IconProfile />
              <span>Username</span>
            </HeaderButton>
            <NotificationButtonWrapper>
              <HeaderButton>
                <IconAlarm />
                <Badge>5</Badge>
              </HeaderButton>
              {/* <Notification /> */}
            </NotificationButtonWrapper>
          </HeaderButtonGroup>
          <MobileMenuButton>
            <HeaderButton>
              <IconMenu />
            </HeaderButton>
          </MobileMenuButton>
        </MainHeaderContainer>
      </MainHeaderWrapper>
      {currentPath?.children && (
        <SubHeaderWrapper>
          <SubHeaderContainer id="submenu">
            {currentPath?.children.map((item, key) => (
              <SubMenuItem
                key={key}
                to={currentPath.to + "/" + item.to}
                active={
                  location.pathname.split("/")[2] === item.to
                    ? "true"
                    : undefined
                }
              >
                {item.label}
              </SubMenuItem>
            ))}
          </SubHeaderContainer>
        </SubHeaderWrapper>
      )}
    </HeaderWrapper>
  );
};
