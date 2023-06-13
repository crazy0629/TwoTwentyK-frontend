import React, { useState } from "react";
import { ProfileEditContainer } from ".";
import { Button, Input } from "../../../components";

export const ChangePhoneNumber: React.FC<{
  onBack: () => void;
  onFinish: (phone: string) => void;
  phone: string;
}> = ({ onBack, onFinish, phone }) => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    nPhone: phone,
    code: "",
  });
  const [error, setError] = useState({
    nPhone: "",
    code: "",
  });
  const [time, setTime] = useState(30);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContinue = () => {
    if (step === 0) {
      if (form.nPhone === "") {
        setError((prev) => ({ ...prev, nPhone: "This field is required" }));
      } else {
        setStep(1);
        setInterval(() => {
          setTime((prev) => (prev === 0 ? 30 : prev - 1));
        }, 1000);
      }
    } else {
      if (form.code === "") {
        setError((prev) => ({ ...prev, code: "Enter your code." }));
      } else {
        onFinish(form.nPhone);
      }
    }
  };
  return (
    <ProfileEditContainer onBack={onBack}>
      {step === 0 && (
        <>
          <Input
            label="Enter New Phone Number"
            onChange={handleChange}
            name="nPhone"
            value={form.nPhone}
            error={error.nPhone}
            desc="We’ll send you a text containing a 6 digit code."
          />
          <Button className="continue-button" onClick={handleContinue}>
            Continue
          </Button>
        </>
      )}
      {step === 1 && (
        <>
          <Input
            label="Enter OTP Code"
            onChange={handleChange}
            name="code"
            placeholder="Enter Code"
            value={form.code}
            code={`Resend (${time}s)`}
            error={error.code}
            desc="We sent an SMS with a code on +49 177 986 69577 please enter it here."
          />
          <Button className="continue-button" onClick={handleContinue}>
            Continue
          </Button>
        </>
      )}
    </ProfileEditContainer>
  );
};
