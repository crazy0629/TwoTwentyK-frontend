import React from "react";
import {
  EmptyCraftCard,
  CraftCardGroup,
  CraftCardWrapper,
  CraftSectionWrapper,
  TitleWrapper,
  CraftCard,
} from "./styles";
import { Button } from "../../components";
import { identityCraft, predictionCraft } from "./data";

export const CraftSection: React.FC<{
  page: "identity" | "prediction";
  selectedCards: {
    crafting: number | string | null;
    year: number | string | null;
    dayMonth: number | string | null;
    category: number | string | null;
    [key: string]: string | number | null;
  };
  onCraftChanged: (key: string) => void;
  onCraft: (page: "identity" | "prediction") => void;
  selectedCraft: string;
}> = ({ page, onCraftChanged, selectedCraft, selectedCards, onCraft }) => {
  return (
    <CraftSectionWrapper>
      <TitleWrapper>
        <h3>
          {page === "identity" ? "Craft an Identity" : "Craft a Prediction"}
        </h3>
        {page === "identity" && (
          <Button
            className="craft-button"
            disabled={
              !(
                Number(selectedCards.crafting) > -1 &&
                Number(selectedCards.dayMonth) > -1 &&
                Number(selectedCards.category) > -1 &&
                Number(selectedCards.year) > -1
              )
            }
            onClick={() => onCraft(page)}
          >
            Craft Identity
          </Button>
        )}
        {page === "prediction" && (
          <Button
            className="craft-button"
            disabled={
              !(
                Number(selectedCards.crafting) > -1 &&
                Number(selectedCards.identity) > -1 &&
                Number(selectedCards.trigger) > -1
              )
            }
            onClick={() => onCraft(page)}
          >
            Craft Prediction
          </Button>
        )}
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
              {Number(selectedCards[item.key]) > -1 ? (
                <CraftCard bg={"/assets/nfts/1.png"} className="crafting-card">
                  <span>Rare</span>
                  <p>{item.title}</p>
                </CraftCard>
              ) : (
                <EmptyCraftCard
                  active={selectedCraft === item.key ? "true" : undefined}
                  onClick={() => onCraftChanged(item.key)}
                />
              )}
            </CraftCardWrapper>
          ))}
        {page === "prediction" &&
          predictionCraft.map((item, key) => (
            <CraftCardWrapper key={key}>
              <h6>{item.title}</h6>
              {Number(selectedCards[item.key]) > -1 ? (
                <CraftCard bg={"/assets/nfts/1.png"} className="crafting-card">
                  <span>Rare</span>
                  <p>{item.title}</p>
                </CraftCard>
              ) : (
                <EmptyCraftCard
                  active={selectedCraft === item.key ? "true" : undefined}
                  onClick={() => onCraftChanged(item.key)}
                />
              )}
            </CraftCardWrapper>
          ))}
      </CraftCardGroup>
    </CraftSectionWrapper>
  );
};
