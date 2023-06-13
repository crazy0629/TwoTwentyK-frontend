import React from "react";
import { Modal as ModalWrapper } from "./Modal";
import type { WithdrawModalProps } from "../../types";
import { BalanceForWithdrawModalWrapper, IconWrapper } from "./styles";
import { IconPigMoney } from "../Icons";
import { Button } from "../Button";

export const BalanceForWithdrawModal: React.FC<WithdrawModalProps> = ({
  onClose,
  onWithdraw,
  open,
}) => {
  return (
    <ModalWrapper onClose={onClose} open={open} width={349}>
      <BalanceForWithdrawModalWrapper>
        <h3>My Balance</h3>
        <IconWrapper>
          <IconPigMoney />
        </IconWrapper>
        <p>Your Balance</p>
        <h4>
          $1.324.00 <span>USD</span>
        </h4>
        <Button className="withdraw-button" onClick={() => onWithdraw()}>
          Withdraw
        </Button>
      </BalanceForWithdrawModalWrapper>
    </ModalWrapper>
  );
};
