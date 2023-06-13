import React from "react";
import { TransactionActionWrapper, TransactionsWrapper } from "./styles";
import { ClaimsTableWrapper } from "../claims/styles";
import { transactionsData } from "./data";
import { Button } from "../../../components";

export const TransactionsSection: React.FC = () => {
  return (
    <TransactionsWrapper>
      <h2>Transactions</h2>
      <ClaimsTableWrapper>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {transactionsData.map((item, key) => (
            <tr key={key}>
              <td>{item.date}</td>
              <td>
                <span className={item.amount < 0 ? "amount-cell" : ""}>
                  {item.amount < 0 && "-"}$
                  {item.amount >= 0 ? item.amount : item.amount * -1}
                </span>
              </td>
              <td>
                <span>{item.type}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </ClaimsTableWrapper>
      <TransactionActionWrapper>
        <Button className="withdraw-button">Withdraw Funds</Button>
      </TransactionActionWrapper>
    </TransactionsWrapper>
  );
};
