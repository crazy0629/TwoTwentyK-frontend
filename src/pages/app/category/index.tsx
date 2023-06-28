import React, { useEffect, useState } from "react";
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
// import { dateCardData } from "./data";
import { useNavigate } from "react-router-dom";
import { useMyNFTsContext } from "../../../context";

export const CategoriesPage: React.FC = () => {
  const navigate = useNavigate();
  const { myNFTsContext } = useMyNFTsContext();
  const [currentUser, setCurrentUser] = useState<string | null>("");
  const [isView, setIsView] = useState<"view" | "sell" | "">("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    console.log(myNFTsContext);
  }, [myNFTsContext]);

  useEffect(() => {
    setCurrentUser(localStorage.getItem("auth"));
  }, []);

  const handleSellConfirm = () => {
    setModal(true);
    setIsView("");
  };

  const handleView = (id: string | number) => {
    setIsView("view");
  };

  const handleCraft = (id: string | number) => {
    navigate("/crafting/identities?id=" + id);
  };

  const handleSell = (id: string | number) => {
    setIsView("sell");
  };

  return (
    <AppLayout>
      <SellConfirmModal open={modal} onClose={() => setModal(false)} />
      {currentUser ? (
        myNFTsContext?.nft_card_category_data?.length > 0 ? (
          <DatesPageWrapper isview={isView ? "true" : undefined}>
            <DatePageContainer>
              <DatePageTitleWrapper>
                <h3>Category Cards</h3>
                <ButtonGroup>
                  <Button className="buy-button">Buy Cards</Button>
                  <Button
                    className="buy-button"
                    onClick={() => navigate("/buy")}
                  >
                    Buy Packs
                  </Button>
                </ButtonGroup>
              </DatePageTitleWrapper>
              <FilterSection />
              <CardGridSection
                cardType="category"
                data={myNFTsContext?.nft_card_category_data}
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
            <h3>No Category Cards</h3>
            <p>It looks like you don’t have any category cards yet.  </p>
            <Button
              className="buy-button"
              onClick={() => navigate("/marketplace")}
            >
              Buy Cards
            </Button>
            <Button className="buy-button" onClick={() => navigate("/buy")}>
              Buy Packs
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
