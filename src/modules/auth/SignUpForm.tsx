import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FormActionText,
  FormActionWrapper,
  AuthFormWrapper,
  SignUpCheckbox,
} from "./styles";
import {
  AuthFormGroup,
  AuthFormTitle,
  Button,
  Input,
  SocialButtonsGroup,
} from "../../components";
import { signupFormValidation } from "../../utils";
import { register } from "../../actions";
import { ToastContainer, toast } from "react-toastify";

export const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState({ username: "", email: "", password: "" });
  const [isAgree, setIsAgree] = useState(true);

  const handleSignup = async () => {
    const { isValid, errors } = signupFormValidation(form);
    setError(errors);
    if (isValid) {
      const res = await register({ ...form });
      if (res.success) {
        navigate("/check-email?type=signup");
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
      ;<AuthFormTitle>Sign Up</AuthFormTitle>
      <SocialButtonsGroup authType="Signup" />
      <AuthFormGroup>
        <Input
          label="Username"
          value={form.username}
          onChange={handleChange}
          error={error.username}
          name="username"
          placeholder="e.g moulee"
        />
        <Input
          label="Email Address"
          name="email"
          onChange={handleChange}
          error={error.email}
          value={form.email}
          placeholder="e.g moulee@example.com"
        />
        <Input
          label="Password"
          type="password"
          onChange={handleChange}
          error={error.password}
          value={form.password}
          name="password"
          placeholder="Enter password"
        />
      </AuthFormGroup>
      <SignUpCheckbox htmlFor="signup-checkbox">
        <input
          type="checkbox"
          id="signup-checkbox"
          onClick={(e) => setIsAgree(!e.currentTarget.checked)}
        />
        <span>
          {"I am at least 21 years of age and agree to the "}
          <a href="https://google.com">Terms & Conditions</a>
          {" & "}
          <a href="https://google.com">Privacy Policy</a>
          {
            " of TwoTwenkyK and agree to  opt-in to receive TwoTwenkyK’s Newsletter and to receive email, alerts, news and other offers from TwoTwenkyK and/or its affiliated entities."
          }
        </span>
      </SignUpCheckbox>
      <FormActionWrapper>
        <Button onClick={handleSignup} disabled={isAgree}>
          Sign Up
        </Button>
        <FormActionText>
          {"Already have an account? "} <Link to={"/signin"}>Login now</Link>
        </FormActionText>
      </FormActionWrapper>
    </AuthFormWrapper>
  );
};
