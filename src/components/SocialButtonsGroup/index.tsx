import React from "react";
import AppleLogin from "react-apple-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
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
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com" // need to change
        buttonText="Login"
        onSuccess={(res) => onGoogleAuthClicked(res, authType)}
        // onFailure={(res) => onGoogleAuthClicked(res, authType)}
        render={(renderProps) => (
          <SocialAuthButton
            authType={authType}
            socialType="Google"
            onClick={renderProps.onClick}
          />
        )}
        cookiePolicy={"single_host_origin"}
      />
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={(res) => onFacebookAuthClicked(res, authType)}
        render={(renderProps) => (
          <SocialAuthButton
            authType={authType}
            socialType="Facebook"
            onClick={renderProps.onClick}
          />
        )}
      />
      <AppleLogin
        clientId="com.react.apple.login"
        redirectURI="https://redirectUrl.com"
        callback={(res) => onAppleAuthClicked(res, authType)}
        render={(renderProps) => (
          <SocialAuthButton
            authType={authType}
            socialType="Apple"
            onClick={renderProps.onClick}
          />
        )}
      />

      <AuthDividerWrapper>
        <span>Or</span>
      </AuthDividerWrapper>
    </SocialButtonsWrapper>
  );
};
