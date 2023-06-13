import React from "react";
import { NotifyProps } from "../../types";
import { NotifyWrapper } from "./styles";
import { IconCheck } from "../Icons";

export const Notify: React.FC<NotifyProps> = ({ text, show }) => {
  return (
    <NotifyWrapper show={show ? "true" : undefined}>
      <IconCheck />
      <span>{text}</span>
    </NotifyWrapper>
  );
};
