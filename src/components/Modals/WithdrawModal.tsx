import React, { useState } from "react";
import { Modal as ModalWrapper } from "./Modal";
import { WithdrawModalProps } from "../../types";
import {
  AvailableAmount,
  ButtonGroup,
  WithdrawInputGroup,
  WithdrawModalWrapper,
} from "./styles";
import { Input } from "../Input";
import { SelectBox } from "../SelectBox";
import { Button } from "../Button";
import { withdrawAccountList } from "./data";

export const WithdrawModal: React.FC<WithdrawModalProps> = ({
  onClose,
  onWithdraw,
  open,
}) => {
  const [amount, setAmount] = useState("1,400.00");
  const [account, setAccount] = useState<string | Array<string>>("");
  const [error, setError] = useState("");
  const handleWithdraw = () => {
    if (amount === "") {
      setError("Amount exceeds available balance");
    } else {
      setError("");
      onWithdraw(true);
    }
  };

  const handleClose = () => {
    setAmount("");
    setAccount("");
    setError("");
    onClose();
  };

  return (
    <ModalWrapper onClose={onClose} open={open} width={349}>
      <WithdrawModalWrapper>
        <h3>Withdraw</h3>
        <WithdrawInputGroup>
          <Input
            label="Set the amount"
            value={amount}
            error={error}
            onChange={(e) => setAmount(e.target.value)}
          />
          <SelectBox
            border
            onChange={setAccount}
            value={account}
            label="Withdraw to"
            placeholder="Select the account"
            options={withdrawAccountList}
          />
        </WithdrawInputGroup>
        <AvailableAmount>
          <span>Available</span>
          <p>
            1,324.00 <span>USD</span>
          </p>
        </AvailableAmount>
        <ButtonGroup>
          <Button onClick={handleWithdraw} disabled={account === ""}>
            Confirm Withdraw
          </Button>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
        </ButtonGroup>
      </WithdrawModalWrapper>
    </ModalWrapper>
  );
};
