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
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../components";
import { ToastContainer, toast } from "react-toastify";
import { craftingPrediction, getMyNFTs } from "../../../actions";
import { useMyNFTsContext } from "../../../context";

export const CraftingPredictionsPage: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const { setMyNFTsContext } = useMyNFTsContext();
  const [currentUser, setCurrentUser] = useState<string | null>("");
  const [selectedCraft, setSelectedCraft] = useState("crafting");
  const [clickedCard, setClickedCard] = useState<number | string | null>(-1);
  const [selectedCard, setSelectedCard] = useState<number | string | null>(-1);
  const [selectedCards, setSelectedCards] = useState<{
    crafting: number | string | null;
    year: number | string | null;
    dayMonth: number | string | null;
    category: number | string | null;
    identity: number | string | null;
    trigger: Array<number | string | null>;
  }>({
    crafting: -1,
    category: -1,
    dayMonth: -1,
    year: -1,
    identity: -1,
    trigger: [],
  });

  useEffect(() => {
    setCurrentUser(localStorage.getItem("auth"));
  }, []);

  useEffect(() => {
    if (params.get("id")) {
      setClickedCard(params.get("id"));
    }
  }, [params]);

  const handleCardClick = (key: string | number | null) => {
    if (key === clickedCard) {
      setClickedCard(-1);
    } else {
      setClickedCard(key);
    }
  };

  const handleCardSelected = (id: string | number | null, craft: string) => {
    if (craft === "trigger") {
      setSelectedCards((prev) => ({ ...prev, trigger: [...prev.trigger, id] }));
    } else {
      setSelectedCards((prev) => ({ ...prev, [craft]: id }));
    }
    setSelectedCard(id);
  };
  const handleCraft = (page: "identity" | "prediction") => {
    page === "prediction" && craftPrediction();
  };

  const craftPrediction = async () => {
    const newCraft = {
      nft_card_crafting_id: Number(selectedCards.crafting),
      nft_card_identity_id: Number(selectedCards.identity),
      nft_card_trigger_ids: [Number(selectedCards.trigger)],
    };
    const res = await craftingPrediction(newCraft);
    if (res.success) {
      toast.success("Crafted Successfully.");
      const myNFTs = await getMyNFTs();
      setMyNFTsContext(myNFTs.data);
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
