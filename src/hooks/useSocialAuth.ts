import { useNavigate } from "react-router-dom";

export const useSocialAuth = () => {
  const navigate = useNavigate();

  const onGoogleAuthClicked = (authType: string) => {
    if (authType === "Signup") {
      navigate("/signup/username?email=moulee@example.com");
    }
  };

  const onFacebookAuthClicked = (authType: string) => {
    if (authType === "Signup") {
      navigate("/signup/username");
    }
  };

  const onAppleAuthClicked = (authType: string) => {
    if (authType === "Signup") {
      navigate("/signup/username");
    }
  };
  return {
    onGoogleAuthClicked,
    onFacebookAuthClicked,
    onAppleAuthClicked,
  };
};
