import React, { useEffect, useState } from "react";
import { AppLayout } from "../../../layout/AppLayout";
import { CraftLeftWrapper, CraftRightWrapper, CraftingWrapper } from "./styles";
import {
  CardPreviewSection,
  CraftSection,
  MatchListSection,
  SelectCardSection,
} from "../../../modules";
import { Button } from "../../../components";
import { useNavigate } from "react-router-dom";

export const CraftingIdentitesPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<string | null>("");
  const [selectedCraft, setSelectedCraft] = useState("crafting");
  const [clickedCard, setClickedCard] = useState<number | string | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | string | null>(-1);
  const [selectedCards, setSelectedCards] = useState<{
    crafting: number | string | null;
    year: number | string | null;
    dayMonth: number | string | null;
    category: number | string | null;
  }>({ crafting: -1, category: -1, dayMonth: -1, year: -1 });

  useEffect(() => {
    setCurrentUser(localStorage.getItem("auth"));
  }, []);

  const handleCardClick = (key: string | number | null) => {
    if (key === clickedCard) {
      setClickedCard(-1);
    } else {
      setClickedCard(key);
    }
  };

  const handleCardSelected = (id: string | number | null, craft: string) => {
    setSelectedCards((prev) => ({ ...prev, [craft]: id }));
    setSelectedCard(id);
  };

  return (
    <AppLayout noFooter>
      <CraftingWrapper>
        {currentUser ? (
          <>
            <CraftLeftWrapper>
              <CraftSection
                page="identity"
                onCraftChanged={setSelectedCraft}
                selectedCards={selectedCards}
                selectedCraft={selectedCraft}
              />
              <SelectCardSection
                page="identity"
                clickedCard={clickedCard}
                selectedCard={selectedCard}
                selectedCraft={selectedCraft}
                onCardClicked={handleCardClick}
                onCardSelected={handleCardSelected}
              />
            </CraftLeftWrapper>
            <CraftRightWrapper>
              <MatchListSection page="identity" clickedCard={clickedCard} />
              <CardPreviewSection page="identity" clickedCard={clickedCard} />
            </CraftRightWrapper>
          </>
        ) : (
          <div className="unAuth-display">
            <p>
              Identities are cards crafted by combining a Day-Month card, a Year
              card and a Category card
            </p>
            <h4>Log in to start playing.</h4>
            <Button
              className="login-button"
              onClick={() => navigate("/signin")}
            >
              Login Now
            </Button>
          </div>
        )}
      </CraftingWrapper>
    </AppLayout>
  );
};
