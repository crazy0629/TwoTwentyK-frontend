import { useNavigate } from "react-router-dom";

export const useSocialAuth = () => {
  const navigate = useNavigate();

  const onGoogleAuthClicked = (res: any, authType: string) => {
    console.log(res);
    if (authType === "Signup") {
      navigate("/signup/username?email=moulee@example.com");
    }
  };

  const onFacebookAuthClicked = (res: any, authType: string) => {
    console.log(res);
    if (authType === "Signup") {
      navigate("/signup/username");
    }
  };

  const onAppleAuthClicked = (res: any, authType: string) => {
    console.log(res);
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
