import React from "react";
import { AuthLayout } from "../../../layout";
import { ResetPasswordForm } from "../../../modules";

export const ResetPasswordPage: React.FC = () => {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
};
