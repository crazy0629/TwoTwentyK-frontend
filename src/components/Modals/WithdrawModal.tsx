import React, { EventHandler, useEffect, useState } from "react";
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
import { useMyInfoContext } from "../../context";

export const WithdrawModal: React.FC<WithdrawModalProps> = ({
  onClose,
  onWithdraw,
  open,
}) => {
  const { myInfoContext } = useMyInfoContext();
  const [amount, setAmount] = useState<number>();
  const [account, setAccount] = useState<string | Array<string>>("");
  const [error, setError] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (myInfoContext)
      setBalance(myInfoContext?.balance ? myInfoContext?.balance : 0);
  }, [myInfoContext]);

  const handleWithdraw = () => {
    if (amount === 0) {
      setError("Amount exceeds available balance");
    } else {
      setError("");
      onWithdraw(true);
    }
  };

  function handleInputChange(e: any) {
    !isNaN(e.target.value) && setAmount(e.target.value);
    // const rawValue = parseFloat(
    //   e.target.value.replace(/\./g, "").replace(",", ".")
    // );
    // // Parse the raw value as a number and replace any commas with periods
    // if (!isNaN(rawValue)) {
    //   const formattedValue = rawValue.toLocaleString("en-US", {
    //     minimumFractionDigits: 2,
    //     maximumFractionDigits: 2,
    //   });
    //   // Format the raw value as a currency string with two decimal places
    //   setAmount(formattedValue);
    //   // Update the input value with the formatted string
    // } else {
    //   setAmount("");
    //   // Clear the input value if it's not a valid number
    // }
  }

  const handleClose = () => {
    setAmount(0);
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
            placeholder="0"
            onChange={handleInputChange}
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
            {balance.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            <span>USD</span>
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
