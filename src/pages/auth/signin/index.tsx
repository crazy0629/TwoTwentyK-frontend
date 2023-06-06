import React from "react";
import { AuthLayout } from "../../../layout";
import { SignInForm } from "../../../modules";

export const SignInPage: React.FC = () => {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
};
