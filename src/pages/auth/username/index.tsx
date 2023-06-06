import React from "react";
import { AuthLayout } from "../../../layout";
import { UsernameForm } from "../../../modules";

export const UsernamePage: React.FC = () => {
  return (
    <AuthLayout>
      <UsernameForm />
    </AuthLayout>
  );
};
