import React from "react";
import { AppLayout } from "../../../layout/AppLayout";
import { ButtonGroup, DatePageTitleWrapper, DatesPageWrapper } from "./styles";
import { Button } from "../../../components";
import { FilterSection } from "../../../modules";

export const DatesPage: React.FC = () => {
  return (
    <AppLayout>
      <DatesPageWrapper>
        <DatePageTitleWrapper>
          <h3>Date Cards</h3>
          <ButtonGroup>
            <Button className="buy-button">Buy Cards</Button>
            <Button className="buy-button">Buy Packs</Button>
          </ButtonGroup>
        </DatePageTitleWrapper>
        <FilterSection />
      </DatesPageWrapper>
    </AppLayout>
  );
};
