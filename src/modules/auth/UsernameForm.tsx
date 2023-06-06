import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthFormWrapper, FormActionWrapper, SignUpCheckbox } from "./styles";
import { AuthFormGroup, AuthFormTitle, Button, Input } from "../../components";
import { useQuery } from "../../hooks";
import { usernameFormValidation } from "../../utils";

export const UsernameForm: React.FC = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const [isAgree, setIsAgree] = useState(true);
  const [form, setForm] = useState({ username: "", email: "" });
  const [error, setError] = useState({ username: "", email: "" });

  const handleClick = () => {
    const { isValid, errors } = usernameFormValidation(
      form,
      !query.get("email")
    );
    if (isValid) {
      if (query.get("email")) {
        navigate("/");
      } else {
        navigate("/check-email?type=signup");
      }
    } else {
      setError(errors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AuthFormWrapper>
      <AuthFormTitle>Create a Username</AuthFormTitle>
      <AuthFormGroup>
        <Input
          label="Username"
          placeholder="e.g moulee"
          value={form.username}
          name="username"
          error={error.username}
          onChange={handleChange}
        />
        {!query.get("email") && (
          <Input
            label="Email Address"
            placeholder="e.g moulee@example.com"
            value={form.email}
            name="email"
            error={error.email}
            onChange={handleChange}
          />
        )}
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
        <Button onClick={handleClick} disabled={isAgree}>
          Enter
        </Button>
      </FormActionWrapper>
    </AuthFormWrapper>
  );
};
