import React from "react";
import {
  ItemAction,
  ItemInfo,
  MyProfileWrapper,
  ProfileItemWrapper,
} from "./styles";
import { ProfileItemProps, ProfileProps } from "../../../types";

export const Profile: React.FC<ProfileProps> = ({
  email,
  name,
  password,
  phone,
  username,
  onEdit,
}) => {
  return (
    <MyProfileWrapper>
      <h2>My Profile</h2>
      <ProfileItem
        id="username"
        label="Username"
        value={username}
        isRequired
        onEdit={onEdit}
      />
      <ProfileItem id="name" label="Name" value={name} onEdit={onEdit} />
      <ProfileItem
        id="phone"
        label="Phone Number"
        value={phone}
        onEdit={onEdit}
      />
      <ProfileItem
        id="email"
        label="Email Address"
        onEdit={onEdit}
        value={email}
        isRequired
        isEditable
      />
      <ProfileItem
        id="password"
        onEdit={onEdit}
        label="Password"
        value={password}
        type="password"
      />
    </MyProfileWrapper>
  );
};

const ProfileItem: React.FC<ProfileItemProps> = ({
  id,
  label,
  type,
  value,
  isRequired,
  isEditable,
  onEdit,
}) => {
  return (
    <ProfileItemWrapper>
      <ItemInfo>
        <p>
          {label}
          {isRequired ? "" : <span>{"(Optional)"}</span>}
        </p>
        {type === "password" ? (
          <input type="password" readOnly value={value} />
        ) : (
          <span>{value}</span>
        )}
      </ItemInfo>
      {!isEditable && (
        <ItemAction onClick={onEdit ? () => onEdit(id) : () => {}}>
          {value ? "Edit" : "Add"}
        </ItemAction>
      )}
    </ProfileItemWrapper>
  );
};
