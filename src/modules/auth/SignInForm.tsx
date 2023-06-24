import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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
import { signin } from "../../actions";

export const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({ email: "", password: "" });
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSignIn = async () => {
    const { isValid, errors } = signinFormValidation(form);
    setError(errors);
    if (isValid) {
      const res = await signin({
        username: form.email,
        password: form.password,
      });
      if (res.success) {
        localStorage.setItem("auth", res.token);
        navigate("/dashboard");
      } else {
        toast.error(res.message);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AuthFormWrapper>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
