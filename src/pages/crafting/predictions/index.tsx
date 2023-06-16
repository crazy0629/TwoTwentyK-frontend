import React from "react";
import { AppLayout } from "../../../layout/AppLayout";
import {
  CraftLeftWrapper,
  CraftRightWrapper,
  CraftingWrapper,
} from "../identities/styles";
import {
  CardPreviewSection,
  CraftSection,
  MatchListSection,
  SelectCardSection,
} from "../../../modules";

export const CraftingPredictionsPage: React.FC = () => {
  return (
    <AppLayout noFooter>
      <CraftingWrapper>
        <CraftLeftWrapper>
          <CraftSection page="prediction" />
          <SelectCardSection page="prediction" />
        </CraftLeftWrapper>
        <CraftRightWrapper>
          <MatchListSection page="prediction" />
          <CardPreviewSection page="prediction" />
        </CraftRightWrapper>
      </CraftingWrapper>
    </AppLayout>
  );
};
