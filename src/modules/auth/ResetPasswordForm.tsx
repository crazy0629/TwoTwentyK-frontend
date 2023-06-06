import React, { useState } from "react";
import { AuthFormDesc, AuthFormWrapper, FormActionWrapper } from "./styles";
import { AuthFormGroup, AuthFormTitle, Button, Input } from "../../components";

export const ResetPasswordForm: React.FC = () => {
  const [form, setForm] = useState({ password: "", rPassword: "" });
  const [error, setError] = useState({ password: "", rPassword: "" });
  const handleClick = () => {};
  return (
    <AuthFormWrapper>
      <AuthFormTitle>Create a new password</AuthFormTitle>
      <AuthFormDesc>Please enter your new password</AuthFormDesc>
      <AuthFormGroup>
        <Input label="Password" type="password" placeholder="Enter password" />
        <Input
          label="Confirm Password"
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
