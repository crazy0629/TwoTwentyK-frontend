import React, { useState } from "react";
import {
  EmptyCraftCard,
  CraftCardGroup,
  CraftCardWrapper,
  CraftSectionWrapper,
  TitleWrapper,
} from "./styles";
import { Button } from "../../components";
import { identityCraft, predictionCraft } from "./data";

export const CraftSection: React.FC<{ page: "identity" | "prediction" }> = ({
  page,
}) => {
  const [selectedCraft, setSelectedCraft] = useState("crafting");
  return (
    <CraftSectionWrapper>
      <TitleWrapper>
        <h3>
          {page === "identity" ? "Craft an Identity" : "Craft a Prediction"}
        </h3>
        <Button className="craft-button" disabled>
          Craft {page === "identity" ? "Identity" : "Prediction"}
        </Button>
      </TitleWrapper>
      <p>
        {page === "identity"
          ? "Identities are cards crafted by combining a Day-Month card, a Year card and a Category card. Select one card of each type to craft an Identity."
          : "Select an Identity and then add at least one trigger to craft a Prediction."}
      </p>
      <CraftCardGroup>
        {page === "identity" &&
          identityCraft.map((item, key) => (
            <CraftCardWrapper key={key}>
              <h6>{item.title}</h6>
              <EmptyCraftCard
                active={selectedCraft === item.key ? "true" : undefined}
                onClick={() => setSelectedCraft(item.key)}
              />
            </CraftCardWrapper>
          ))}
        {page === "prediction" &&
          predictionCraft.map((item, key) => (
            <CraftCardWrapper key={key}>
              <h6>{item.title}</h6>
              <EmptyCraftCard
                active={selectedCraft === item.key ? "true" : undefined}
                onClick={() => setSelectedCraft(item.key)}
              />
            </CraftCardWrapper>
          ))}
      </CraftCardGroup>
    </CraftSectionWrapper>
  );
};
