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
import { craftingIdentity, craftingPrediction } from "../../../actions";
import { ToastContainer, toast } from "react-toastify";

export const CraftingIdentitesPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<string | null>("");
  const [selectedCraft, setSelectedCraft] = useState("crafting");
  const [clickedCard, setClickedCard] = useState<number | string | null>(-1);
  const [selectedCard, setSelectedCard] = useState<number | string | null>(-1);
  const [selectedCards, setSelectedCards] = useState<{
    crafting: number | string | null;
    year: number | string | null;
    day: number | string | null;
    month: number | string | null;
    category: number | string | null;
    identity: number | string | null;
    trigger: number | string | null;
  }>({
    crafting: -1,
    category: -1,
    day: -1,
    month: -1,
    year: -1,
    identity: -1,
    trigger: -1,
  });

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
  const handleCraft = (page: "identity" | "prediction") => {
    page === "identity" && craftIdentity();
  };

  const craftIdentity = async () => {
    const newCraft = {
      nft_day_id: Number(selectedCards.day),
      nft_month_id: Number(selectedCards.month),
      nft_year_id: Number(selectedCards.year),
      celebrity_id: Number(selectedCards.crafting),
    };
    const res = await craftingIdentity(newCraft);
    if (res.success) {
      toast.success("Crafted Successfully.");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <AppLayout noFooter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <CraftingWrapper>
        {currentUser ? (
          <>
            <CraftLeftWrapper>
              <CraftSection
                onCraft={handleCraft}
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
