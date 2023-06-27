import React, { useState } from "react";
import { ProfileEditContainer } from ".";
import { Button, Input } from "../../../components";
import { updateMyInfo } from "../../../actions";
import { ToastContainer, toast } from "react-toastify";

export const ChangeUsername: React.FC<{
  username: string;
  section: string;
  label: string;
  onFinish: (newUsername: string) => void;
  onBack: () => void;
}> = ({ onBack, onFinish, username, label, section }) => {
  const [input, setInput] = useState(username);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleContinue = async () => {
    if (input === "") {
      setError("This field is Required!");
    } else {
      const res = await updateMyInfo(
        section === "Add Name" ? { name: input } : { username: input }
      );
      if (res.success) {
        onFinish(input);
      } else {
        toast.error(res.message);
      }
    }
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
