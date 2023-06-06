import React from "react";
import { AuthLayout } from "../../../layout";
import { ForgetPasswordForm } from "../../../modules";

export const ForgotPasswordPage: React.FC = () => {
  return (
    <AuthLayout>
      <ForgetPasswordForm />
    </AuthLayout>
  );
};
