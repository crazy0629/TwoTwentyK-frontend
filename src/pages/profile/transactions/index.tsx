import React from "react";
import { AppLayout } from "../../../layout/AppLayout";
import { TransactionsSection } from "../../../modules";

export const TransactionsPage: React.FC = () => {
  return (
    <AppLayout>
      <TransactionsSection />
    </AppLayout>
  );
};
