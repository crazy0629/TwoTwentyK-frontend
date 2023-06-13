import React, { useState } from "react";
import {
  BackProfile,
  ProfileEditContent,
  ProfileEditWrapper,
  ProfileSectionWrapper,
} from "./styles";
import { Profile } from "./Profile";
import { ChangePassword } from "./ChangePassword";
import { ProfileEditProps } from "../../../types";
import { ProfileConfirmModal } from "../../../components/Modals/ProfileConfirmModal";
import { ChangeUsername } from "./ChangeUsername";
import { Notify } from "../../../components";
import { ChangePhoneNumber } from "./ChangePhoneNumber";

export const ProfileSection: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [modal, setModal] = useState(false);
  const [notify, setNotify] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [data, setData] = useState({
    username: "Moulee",
    name: "",
    phone: "352 285 4769",
    email: "moulee@example.com",
    password: "123456789",
  });

  const handleModalClose = () => {
    setStatus("");
    setModal(false);
  };

  const handleBack = () => {
    setStatus("");
  };

  const handleEdit = (key: string) => {
    setStatus(key);
  };

  const handleChangePassword = (password: string) => {
    setData((prev) => ({ ...prev, password: password }));
    setModalTitle("Password");
    setModal(true);
  };

  const handleChangeUsername = (username: string) => {
    setData((prev) => ({ ...prev, username: username }));
    setModalTitle("username");
    setNotify(true);
    setTimeout(() => {
      setNotify(false);
    }, 3000);
    handleBack();
  };

  const handleChangeName = (name: string) => {
    setData((prev) => ({ ...prev, name: name }));
    setModalTitle("name");
    setNotify(true);
    setTimeout(() => {
      setNotify(false);
    }, 3000);
    handleBack();
  };

  const handleChangePhone = (phone: string) => {
    setData((prev) => ({ ...prev, phone: phone }));
    setModalTitle("Phone Number");
    setModal(true);
  };

  return (
    <ProfileSectionWrapper>
      {status === "" && <Profile {...data} onEdit={handleEdit} />}
      {status === "username" && (
        <ChangeUsername
          onBack={handleBack}
          label="Enter New Username"
          onFinish={handleChangeUsername}
          username={data.username}
        />
      )}
      {status === "name" && (
        <ChangeUsername
          onBack={handleBack}
          label="Enter Name"
          onFinish={handleChangeName}
          username={data.name}
        />
      )}
      {status === "phone" && (
        <ChangePhoneNumber
          onBack={handleBack}
          onFinish={handleChangePhone}
          phone={data.phone}
        />
      )}
      {status === "password" && (
        <ChangePassword
          onBack={handleBack}
          onFinish={handleChangePassword}
          password={data.password}
        />
      )}
      <ProfileConfirmModal
        open={modal}
        onClose={handleModalClose}
        title={modalTitle}
      />
      <Notify text={`Your ${modalTitle} was updated`} show={notify} />
    </ProfileSectionWrapper>
  );
};

export const ProfileEditContainer: React.FC<ProfileEditProps> = ({
  onBack,
  children,
}) => {
  return (
    <ProfileEditWrapper>
      <BackProfile onClick={onBack}>{"< Change Password"}</BackProfile>
      <ProfileEditContent>{children}</ProfileEditContent>
    </ProfileEditWrapper>
  );
};
