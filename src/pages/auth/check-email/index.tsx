import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../../layout";
import { CheckEmailForm } from "../../../modules";
import { useQuery } from "../../../hooks";

export const CheckEmailPage: React.FC = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleResendEmail = () => {
    if (query.get("type") === "signup") {
      // navigate("/");
    } else if (query.get("type") === "forgot") {
      navigate("/reset-password");
    }
  };

  useEffect(() => {
    if (query.get("type") === "signup") {
      setTitle("We sent you an email!");
      setDesc(
        "Please click on the link provided to confirm your email address."
      );
    } else if (query.get("type") === "forgot") {
      setTitle("Check your mail");
      setDesc("A password reset email has been sent your email address.");
    }
  }, [query]);

  return (
    <AuthLayout>
      <CheckEmailForm title={title} desc={desc} onResend={handleResendEmail} />
    </AuthLayout>
  );
};
