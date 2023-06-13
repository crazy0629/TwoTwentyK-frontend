import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ForgotPasswordText,
  FormActionText,
  FormActionWrapper,
  AuthFormWrapper,
} from "./styles";
import {
  AuthFormGroup,
  AuthFormTitle,
  Button,
  Input,
  SocialButtonsGroup,
} from "../../components";
import { signinFormValidation } from "../../utils";

export const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({ email: "", password: "" });
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSignIn = () => {
    const { isValid, errors } = signinFormValidation(form);
    setError(errors);
    if (isValid) {
      localStorage.setItem("auth", form.email);
      navigate("/dashboard");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AuthFormWrapper>
      <AuthFormTitle>Log In</AuthFormTitle>
      <SocialButtonsGroup authType="Login" />
      <AuthFormGroup>
        <Input
          label="Email Address"
          onChange={handleChange}
          name="email"
          value={form.email}
          error={error.email}
          placeholder="e.g moulee@example.com"
        />
        <Input
          label="Password"
          onChange={handleChange}
          name="password"
          value={form.password}
          error={error.password}
          type="password"
          placeholder="Enter password"
        />
      </AuthFormGroup>
      <ForgotPasswordText>
        <Link to="/forgot-password">Forgot Password</Link>
      </ForgotPasswordText>
      <FormActionWrapper>
        <Button onClick={handleSignIn}>Enter</Button>
        <FormActionText>
          {"Don’t have an account? "} <Link to={"/signup"}>Sign Up now</Link>
        </FormActionText>
      </FormActionWrapper>
    </AuthFormWrapper>
  );
};
