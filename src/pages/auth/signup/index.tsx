import React from "react";
import { AuthLayout } from "../../../layout";
import { SignUpForm } from "../../../modules";

export const SignUpPage: React.FC = () => {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};
