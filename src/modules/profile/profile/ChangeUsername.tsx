import React, { useState } from "react";
import { ProfileEditContainer } from ".";
import { Button, Input } from "../../../components";

export const ChangeUsername: React.FC<{
  username: string;
  label: string;
  onFinish: (newUsername: string) => void;
  onBack: () => void;
}> = ({ onBack, onFinish, username, label }) => {
  const [input, setInput] = useState(username);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleContinue = () => {
    if (input === "") {
      setError("This field is Required!");
    } else {
      onFinish(input);
    }
  };

  return (
    <ProfileEditContainer onBack={onBack}>
      <Input
        label={label}
        onChange={handleChange}
        name="cPassword"
        value={input}
        error={error}
      />
      <Button className="continue-button" onClick={handleContinue}>
        Continue
      </Button>
    </ProfileEditContainer>
  );
};
