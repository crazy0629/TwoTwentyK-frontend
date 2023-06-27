import React, { useState } from "react";
import { Button, Input } from "../../../components";
import { ProfileEditContainer } from ".";
import { InputGroup } from "./styles";
import { resetPassFormValidation } from "../../../utils";
import { updateMyInfo } from "../../../actions";
import { ToastContainer, toast } from "react-toastify";

export const ChangePassword: React.FC<{
  password: string;
  section: string;
  onFinish: (newPassword: string) => void;
  onBack: () => void;
}> = ({ password, onFinish, onBack, section }) => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    cPassword: "",
    nPassword: "",
    rPassword: "",
  });
  const [error, setError] = useState({
    cPassword: "",
    nPassword: "",
    rPassword: "",
  });

  const handleContinue = async () => {
    if (step === 0) {
      if (password === form.cPassword) {
        setStep((prev) => prev + 1);
      } else {
        setError((prev) => ({ ...prev, cPassword: "Wrong Password!" }));
      }
    } else {
      const { isValid, errors } = resetPassFormValidation({
        password: form.nPassword,
        rPassword: form.rPassword,
      });
      setError((prev) => ({
        ...prev,
        rPassword: errors.rPassword,
        nPassword: errors.password,
      }));
      if (isValid) {
        const res = await updateMyInfo({ password: form.nPassword });
        if (res.success) {
          onFinish(form.nPassword);
        } else {
          toast.error(res.message);
        }
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <ProfileEditContainer onBack={onBack} section={section}>
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
      {step === 0 && (
        <>
          <Input
            label="Enter Current Password"
            onChange={handleChange}
            name="cPassword"
            type="password"
            value={form.cPassword}
            error={error.cPassword}
          />
          <Button className="continue-button" onClick={handleContinue}>
            Continue
          </Button>
        </>
      )}
      {step === 1 && (
        <>
          <InputGroup>
            <Input
              label="Enter New Password"
              onChange={handleChange}
              name="nPassword"
              type="password"
              value={form.nPassword}
              error={error.nPassword}
            />
            <Input
              label="Confirm New Password"
              onChange={handleChange}
              name="rPassword"
              type="password"
              value={form.rPassword}
              error={error.rPassword}
            />
          </InputGroup>
          <Button className="continue-button" onClick={handleContinue}>
            Continue
          </Button>
        </>
      )}
    </ProfileEditContainer>
  );
};
