import React from "react";
import { Modal as ModalWrapper } from "./Modal";
import { ModalProps } from "../../types";
import { ButtonGroup, BuyPackConfirmModalWrapper } from "./styles";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

export const BuyPackConfirmModal: React.FC<ModalProps> = ({
  onClose,
  open,
}) => {
  const navigate = useNavigate();
  return (
    <ModalWrapper onClose={onClose} open={open} width={365}>
      <BuyPackConfirmModalWrapper>
        <h3>Success!</h3>
        <p>Your transaction was completed successfully.</p>
        <ButtonGroup>
          <Button onClick={() => navigate("/dashboard/packs")}>
            Buy More Packs{" "}
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Open Packs
          </Button>
        </ButtonGroup>
      </BuyPackConfirmModalWrapper>
    </ModalWrapper>
  );
};
