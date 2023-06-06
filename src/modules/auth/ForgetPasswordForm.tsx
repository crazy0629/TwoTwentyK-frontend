import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AuthFormDesc,
  AuthFormWrapper,
  FormActionText,
  FormActionWrapper,
} from "./styles";
import { AuthFormTitle, Button, Input } from "../../components";
import { forgotPasswordFormValidation } from "../../utils";

export const ForgetPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSendEmail = () => {
    const { isValid, error } = forgotPasswordFormValidation(email);
    setError(error);
    if (isValid) {
      navigate("/check-email?type=forgot");
    }
  };

  return (
    <AuthFormWrapper>
      <AuthFormTitle>Forgot Password</AuthFormTitle>
      <AuthFormDesc>
        {
          "Enter the email associated with your account and we’ll send an email with instructions to reset your password"
        }
      </AuthFormDesc>
      <Input
        label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="e.g moulee@example.com"
        error={error}
      />
      <FormActionWrapper>
        <Button onClick={handleSendEmail}>Send Email</Button>
        <FormActionText>
          {"Don’t have an account? "} <Link to={"/signup"}>Sign Up now</Link>
        </FormActionText>
      </FormActionWrapper>
    </AuthFormWrapper>
  );
};
