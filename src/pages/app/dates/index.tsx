import React, { useState } from "react";
import { AppLayout } from "../../../layout/AppLayout";
import {
  ButtonGroup,
  DatePageContainer,
  DatePageTitleWrapper,
  DatesPageWrapper,
  EmptyCards,
} from "./styles";
import { Button, SellConfirmModal } from "../../../components";
import {
  CardGridSection,
  FilterSection,
  SellDateCardSection,
  ViewDateCardSection,
} from "../../../modules";
import { dateCardData } from "./date";

export const DatesPage: React.FC = () => {
  const [isView, setIsView] = useState<"view" | "sell" | "">("");

  const [modal, setModal] = useState(false);
  const handleSellConfirm = () => {
    setModal(true);
    setIsView("");
  };

  const handleView = (id: string | number) => {
    setIsView("view");
  };

  const handleCraft = (id: string | number) => {};

  const handleSell = (id: string | number) => {
    setIsView("sell");
  };

  return (
    <AppLayout>
      <SellConfirmModal open={modal} onClose={() => setModal(false)} />
      {dateCardData.length > 0 ? (
        <DatesPageWrapper isview={isView ? "true" : undefined}>
          <DatePageContainer>
            <DatePageTitleWrapper>
              <h3>Date Cards</h3>
              <ButtonGroup>
                <Button className="buy-button">Buy Cards</Button>
                <Button className="buy-button">Buy Packs</Button>
              </ButtonGroup>
            </DatePageTitleWrapper>
            <FilterSection />
            <CardGridSection
              data={dateCardData}
              onCraft={handleCraft}
              onSell={handleSell}
              onView={handleView}
            />
            <ViewDateCardSection
              isView={isView === "view"}
              id={"asdfa"}
              onClose={() => setIsView("")}
            />
            <SellDateCardSection
              onSellConfirm={handleSellConfirm}
              isView={isView === "sell"}
              id={"asdfa"}
              onClose={() => setIsView("")}
            />
          </DatePageContainer>
        </DatesPageWrapper>
      ) : (
        <EmptyCards>
          <h3>No Date Cards</h3>
          <p>It looks like you don’t have any date cards yet. </p>
          <Button className="buy-button">Buy Cards</Button>
          <Button className="buy-button">Buy Packs</Button>
        </EmptyCards>
      )}
    </AppLayout>
  );
};
