import React from "react";
import { SellModalProps } from "../../types";
import { Modal as ModalWrapper } from "./Modal";
import { ButtonGroup, IconWrapper, SellConfirmModalWrapper } from "./styles";
import { IconConfirm } from "../Icons";
import { Button } from "../Button";

export const SellConfirmModal: React.FC<SellModalProps> = ({
  open,
  onClose,
  isMarket,
  isOffer,
}) => {
  return (
    <ModalWrapper open={open} onClose={onClose} width={365}>
      <SellConfirmModalWrapper>
        <IconWrapper>
          <IconConfirm />
        </IconWrapper>
        <p>
          {isOffer
            ? "Success! How will you know if accepted or denied message"
            : "Congratulations! Your card is now listed for sale"}
        </p>
        <ButtonGroup>
          <Button onClick={onClose}>Done</Button>
          {!isMarket && <Button onClick={() => {}}>View In Marketplace</Button>}
        </ButtonGroup>
      </SellConfirmModalWrapper>
    </ModalWrapper>
  );
};
