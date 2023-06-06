import React from "react";
import { SocialAuthButtonWrapper } from "./styles";
import { SocialAuthButtonProps } from "../../types";
import { socialButtons as data } from "./data";

export const SocialAuthButton: React.FC<SocialAuthButtonProps> = ({
  authType,
  socialType,
  onClick,
}) => {
  const social = (key: string) => {
    return data.filter((f) => f.key === key)[0];
  };

  return (
    <SocialAuthButtonWrapper onClick={onClick}>
      <span>{social(socialType).icon}</span>
      <p>
        {authType} with {socialType}
      </p>
    </SocialAuthButtonWrapper>
  );
};
