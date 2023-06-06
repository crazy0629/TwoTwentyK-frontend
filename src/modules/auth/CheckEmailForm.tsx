import React from "react";
import { AuthFormWrapper, CheckEmailWrapper, ResendEmail } from "./styles";
import { IconMailbox } from "../../components";
import { checkEmailFormProps } from "../../types";

export const CheckEmailForm: React.FC<checkEmailFormProps> = ({
  title,
  desc,
  onResend,
}) => {
  return (
    <AuthFormWrapper>
      <CheckEmailWrapper>
        <IconMailbox />
        <h3>{title}</h3>
        <p>{desc}</p>
        <ResendEmail>
          {"Didn’t receive an email? "}{" "}
          <span onClick={onResend}>Resend now</span>
        </ResendEmail>
      </CheckEmailWrapper>
    </AuthFormWrapper>
  );
};
