import React from "react";
import { Modal as ModalWrapper } from "./Modal";
import { UseBalanceBuyModalProps } from "../../types";
import {
  BuyActionWrapper,
  IconWrapper,
  UseBalanceBuyModalWrapper,
} from "./styles";
import { IconPigMoney } from "../Icons";
import { Button } from "../Button";

export const UseBalanceBuyModal: React.FC<UseBalanceBuyModalProps> = ({
  onClose,
  onBuyClick,
  open,
}) => {
  return (
    <ModalWrapper onClose={onClose} open={open} width={351}>
      <UseBalanceBuyModalWrapper>
        <IconWrapper>
          <IconPigMoney />
        </IconWrapper>
        <p>Your Balance</p>
        <h3>
          $1.325.00 <span>USD</span>
        </h3>
        <BuyActionWrapper>
          <div>
            <h4>$1.140 USD</h4>
            <span onClick={onClose}>Back to details</span>
          </div>
          <Button className="buy-button" onClick={onBuyClick}>
            Buy
          </Button>
        </BuyActionWrapper>
      </UseBalanceBuyModalWrapper>
    </ModalWrapper>
  );
};
