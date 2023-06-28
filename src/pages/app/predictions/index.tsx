import React, { useEffect, useState } from "react";
import { AppLayout } from "../../../layout/AppLayout";
import {
  ButtonGroup,
  DatePageContainer,
  DatePageTitleWrapper,
  DatesPageWrapper,
  EmptyCards,
} from "../dates/styles";
import { Button, SellConfirmModal } from "../../../components";
import {
  CardGridSection,
  FilterSection,
  SellDateCardSection,
  ViewDateCardSection,
} from "../../../modules";
import { predictionData } from "./data";
import { useLocation, useNavigate } from "react-router-dom";
import { useMyNFTsContext } from "../../../context";

export const PredictionsPage: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<string | null>("");
  const [isView, setIsView] = useState<"view" | "sell" | "">("");
  const { myNFTsContext } = useMyNFTsContext();

  useEffect(() => {
    if (params.get("id")) {
      setIsView("view");
    }
  }, [params]);

  useEffect(() => {
    setCurrentUser(localStorage.getItem("auth"));
  }, []);

  const [modal, setModal] = useState(false);
  const handleSellConfirm = () => {
    setModal(true);
    setIsView("");
  };

  const handleView = (id: string | number) => {
    setIsView("view");
  };

  const handleCraft = (id: string | number) => {
    navigate("/crafting/predictions?id=" + id);
  };

  const handleSell = (id: string | number) => {
    setIsView("sell");
  };

  return (
    <AppLayout>
      <SellConfirmModal open={modal} onClose={() => setModal(false)} />
      {currentUser ? (
        myNFTsContext?.nft_card_prediction_data?.length > 0 ? (
          <DatesPageWrapper isview={isView ? "true" : undefined}>
            <DatePageContainer>
              <DatePageTitleWrapper>
                <h3>Predictions</h3>
                <ButtonGroup>
                  <Button
                    className="craft-button"
                    onClick={() => navigate("/crafting/predictions")}
                  >
                    Craft Prediction
                  </Button>
                </ButtonGroup>
              </DatePageTitleWrapper>
              <FilterSection />
              <CardGridSection
                identityData={myNFTsContext?.nft_card_prediction_data}
                onCraft={handleCraft}
                onSell={handleSell}
                cardType="identity"
                onView={handleView}
              />
              <ViewDateCardSection
                isView={isView === "view"}
                cardType="prediction"
                id={"asdfa"}
                onClose={() => {
                  setIsView("");
                  navigate("/dashboard/predictions");
                }}
              />
              <SellDateCardSection
                onSellConfirm={handleSellConfirm}
                cardType="prediction"
                isView={isView === "sell"}
                id={"asdfa"}
                onClose={() => {
                  setIsView("");
                  navigate("/dashboard/predictions");
                }}
              />
            </DatePageContainer>
          </DatesPageWrapper>
        ) : (
          <EmptyCards>
            <h3>No Predictions Yet</h3>
            <p>
              Predictions are created by combining an Identity and one or more
              Trigger cards
            </p>
            <Button
              className="buy-button"
              onClick={() => navigate("/crafting/identities")}
            >
              Craft Prediction
            </Button>
          </EmptyCards>
        )
      ) : (
        <EmptyCards className="login">
          <p>Explanatory text. Log in to start playing.</p>
          <Button className="buy-button" onClick={() => navigate("/signin")}>
            Login Now
          </Button>
        </EmptyCards>
      )}
    </AppLayout>
  );
};
