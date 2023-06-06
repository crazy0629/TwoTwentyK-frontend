import React, { useState } from "react";
import { AuthFormDesc, AuthFormWrapper, FormActionWrapper } from "./styles";
import { AuthFormGroup, AuthFormTitle, Button, Input } from "../../components";
import { resetPassFormValidation } from "../../utils";
import { useNavigate } from "react-router-dom";

export const ResetPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ password: "", rPassword: "" });
  const [error, setError] = useState({ password: "", rPassword: "" });

  const handleClick = () => {
    const { isValid, errors } = resetPassFormValidation(form);
    setError(errors);
    if (isValid) {
      navigate("/signin");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <AuthFormWrapper>
      <AuthFormTitle>Create a new password</AuthFormTitle>
      <AuthFormDesc>Please enter your new password</AuthFormDesc>
      <AuthFormGroup>
        <Input
          label="Password"
          name="password"
          error={error.password}
          onChange={handleChange}
          value={form.password}
          type="password"
          placeholder="Enter password"
        />
        <Input
          label="Confirm Password"
          name="rPassword"
          error={error.rPassword}
          onChange={handleChange}
          value={form.rPassword}
          type="password"
          placeholder="Enter password"
        />
      </AuthFormGroup>
      <FormActionWrapper>
        <Button onClick={handleClick}>Reset and Login</Button>
      </FormActionWrapper>
    </AuthFormWrapper>
  );
};
