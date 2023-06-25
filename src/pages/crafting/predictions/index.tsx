import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components";
import { ToastContainer, toast } from "react-toastify";
import { craftingPrediction } from "../../../actions";

export const CraftingPredictionsPage: React.FC = () => {
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
    page === "prediction" && craftPrediction();
  };

  const craftPrediction = async () => {
    const newCraft = {
      nft_identity_id: Number(selectedCards.identity),
      nft_trigger_id: Number(selectedCards.trigger),
    };
    const res = await craftingPrediction(newCraft);
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
                page="prediction"
                onCraftChanged={setSelectedCraft}
                selectedCards={selectedCards}
                selectedCraft={selectedCraft}
              />
              <SelectCardSection
                page="prediction"
                selectedCard={selectedCard}
                clickedCard={clickedCard}
                selectedCraft={selectedCraft}
                onCardClicked={handleCardClick}
                onCardSelected={handleCardSelected}
              />
            </CraftLeftWrapper>
            <CraftRightWrapper>
              <MatchListSection page="prediction" clickedCard={clickedCard} />
              <CardPreviewSection page="prediction" clickedCard={clickedCard} />
            </CraftRightWrapper>
          </>
        ) : (
          <>
            <div className="unAuth-display">
              <p>
                Identities are cards crafted by combining an Identity with at
                least one trigger.
              </p>
              <h4>Log in to start playing.</h4>
              <Button
                className="login-button"
                onClick={() => navigate("/signin")}
              >
                Login Now
              </Button>
            </div>
          </>
        )}
      </CraftingWrapper>
    </AppLayout>
  );
};
