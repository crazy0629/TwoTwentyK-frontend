import React from "react";
import { BalanceBuyConfirmModalProps } from "../../types";
import { Modal as ModalWrapper } from "./Modal";
import { BalanceBuyConfirmModalWrapper, ButtonGroup } from "./styles";
import { Button } from "../Button";

export const BalanceBuyConfirmModal: React.FC<BalanceBuyConfirmModalProps> = ({
  onClose,
  onConfirm,
  isOffer,
  open,
}) => {
  return (
    <ModalWrapper open={open} onClose={onClose} width={365}>
      <BalanceBuyConfirmModalWrapper>
        <h3>Confirm {isOffer ? "your Offer" : "Payment"}</h3>
        <p className="confirm">
          {isOffer
            ? "Confirmation message"
            : "This amount will be withdrawn from your TwoTwentyK account balance."}
        </p>
        <h4>
          $1,140.00 <span>USD</span>
        </h4>
        <ButtonGroup>
          <Button onClick={onConfirm}>Confirm</Button>
          <Button variant="outlined" onClick={onClose}>
            Back
          </Button>
        </ButtonGroup>
      </BalanceBuyConfirmModalWrapper>
    </ModalWrapper>
  );
};
