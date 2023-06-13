import React from "react";
import { Modal as ModalWrapper } from "./Modal";
import { ProfileModalProps } from "../../types";
import { ButtonGroup, SellConfirmModalWrapper } from "./styles";
import { Button } from "../Button";

export const ProfileConfirmModal: React.FC<ProfileModalProps> = ({
  title,
  onClose,
  open,
}) => {
  return (
    <ModalWrapper open={open} onClose={onClose} width={365}>
      <SellConfirmModalWrapper>
        <p>Your {title} was updated successfully!</p>
        <ButtonGroup>
          <Button onClick={onClose}>Done</Button>
        </ButtonGroup>
      </SellConfirmModalWrapper>
    </ModalWrapper>
  );
};
