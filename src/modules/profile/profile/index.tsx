import React, { useEffect, useState } from "react";
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
import { useMyInfoContext } from "../../../context";

export const ProfileSection: React.FC = () => {
  const { myInfoContext } = useMyInfoContext();
  const [status, setStatus] = useState<string>("");
  const [modal, setModal] = useState(false);
  const [notify, setNotify] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [data, setData] = useState<any>({
    username: "Moulee",
    name: "",
    phone: "352 285 4769",
    email: "moulee@example.com",
    password: "123456789",
  });

  useEffect(() => {
    if (myInfoContext)
      setData((prev: any) => ({
        username: myInfoContext?.username,
        name: myInfoContext?.name ? myInfoContext?.name : "",
        phone: myInfoContext?.phone_number ? myInfoContext?.phone_number : "",
        email: myInfoContext?.email,
        password: myInfoContext?.password,
      }));
  }, [myInfoContext]);

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
    setData((prev: any) => ({ ...prev, password: password }));
    setModalTitle("Password");
    setModal(true);
  };

  const handleChangeUsername = (username: string) => {
    setData((prev: any) => ({ ...prev, username: username }));
    setModalTitle("username");
    setNotify(true);
    setTimeout(() => {
      setNotify(false);
    }, 3000);
    handleBack();
  };

  const handleChangeName = (name: string) => {
    setData((prev: any) => ({ ...prev, name: name }));
    setModalTitle("name");
    setNotify(true);
    setTimeout(() => {
      setNotify(false);
    }, 3000);
    handleBack();
  };

  const handleChangePhone = (phone: string) => {
    setData((prev: any) => ({ ...prev, phone: phone }));
    setModalTitle("Phone Number");
    setModal(true);
  };

  return (
    <ProfileSectionWrapper>
      {status === "" && <Profile {...data} onEdit={handleEdit} />}
      {status === "username" && (
        <ChangeUsername
          onBack={handleBack}
          section="Edit Username"
          label="Enter New Username"
          onFinish={handleChangeUsername}
          username={data.username}
        />
      )}
      {status === "name" && (
        <ChangeUsername
          onBack={handleBack}
          section="Add Name"
          label="Enter Name"
          onFinish={handleChangeName}
          username={data.name}
        />
      )}
      {status === "phone" && (
        <ChangePhoneNumber
          section="Change Phone Number"
          onBack={handleBack}
          onFinish={handleChangePhone}
          phone={data.phone}
        />
      )}
      {status === "password" && (
        <ChangePassword
          section="Change Password"
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
  section,
  children,
}) => {
  return (
    <ProfileEditWrapper>
      <BackProfile onClick={onBack}>{"< " + section}</BackProfile>
      <ProfileEditContent>{children}</ProfileEditContent>
    </ProfileEditWrapper>
  );
};
