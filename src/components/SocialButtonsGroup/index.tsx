import React from "react";
import { AuthDividerWrapper, SocialButtonsWrapper } from "./styles";
import { SocialAuthButton } from "../SocialAuthButton";
import { SocialButtonsGroupProps } from "../../types";
import { useSocialAuth } from "../../hooks/useSocialAuth";

export const SocialButtonsGroup: React.FC<SocialButtonsGroupProps> = ({
  authType,
}) => {
  const { onGoogleAuthClicked, onAppleAuthClicked, onFacebookAuthClicked } =
    useSocialAuth();
  return (
    <SocialButtonsWrapper>
      <SocialAuthButton
        authType={authType}
        socialType="Google"
        onClick={() => onGoogleAuthClicked(authType)}
      />
      <SocialAuthButton
        authType={authType}
        socialType="Facebook"
        onClick={() => onFacebookAuthClicked(authType)}
      />
      <SocialAuthButton
        authType={authType}
        socialType="Apple"
        onClick={() => onAppleAuthClicked(authType)}
      />
      <AuthDividerWrapper>
        <span>Or</span>
      </AuthDividerWrapper>
    </SocialButtonsWrapper>
  );
};
