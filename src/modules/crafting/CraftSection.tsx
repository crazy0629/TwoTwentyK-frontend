import React, { useEffect, useState } from "react";
import {
  EmptyCraftCard,
  CraftCardGroup,
  CraftCardWrapper,
  CraftSectionWrapper,
  TitleWrapper,
  CraftCard,
  AddTrigger,
} from "./styles";
import { Button } from "../../components";
import { identityCraft, predictionCraft } from "./data";
import {
  nft_card_category_data,
  nft_card_crafting_data,
  nft_card_day_month_data,
  nft_card_identity_data,
  nft_card_trigger_data,
  nft_card_year_data,
} from "../../data/nfts";

export const CraftSection: React.FC<{
  page: "identity" | "prediction";
  selectedCards: {
    crafting: number | string | null;
    year: number | string | null;
    dayMonth: number | string | null;
    category: number | string | null;
    identity: number | string | null;
    trigger: Array<number | string | null>;
    [key: string]: string | number | null | Array<string | number | null>;
  };
  onCraftChanged: (key: string) => void;
  onCraft: (page: "identity" | "prediction") => void;
  selectedCraft: string;
}> = ({ page, onCraftChanged, selectedCraft, selectedCards, onCraft }) => {
  const [isAdd, setIsAdd] = useState(false);

  type CardProps = {
    id: number;
    rarity: number;
    image: string;
    name: string | number;
  }[];

  type NFTData = {
    crafting: CardProps;
    dayMonth: CardProps;
    year: CardProps;
    category: CardProps;
    identity: CardProps;
    trigger: CardProps;
  } & any;

  const [nftData, setNftData] = useState<NFTData>({
    crafting: [],
    dayMonth: [],
    year: [],
    category: [],
    identity: [],
    trigger: [],
  });

  useEffect(() => {
    let tempData: NFTData = {
      category: [],
      crafting: [],
      dayMonth: [],
      year: [],
      identity: [],
      trigger: [],
    };
    // if (selectedCraft === "crafting") {
    tempData.crafting = nft_card_crafting_data
      .filter((f) => !f.is_crafted)
      .map((item) => {
        return {
          id: item.id,
          rarity: item.rarity,
          image: item.image,
          name: "Crafting",
        };
      });
    // } else if (selectedCraft === "dayMonth") {
    tempData.dayMonth = nft_card_day_month_data
      .filter((f) => !f.is_crafted)
      .map((item) => {
        return {
          id: item.id,
          rarity: item.rarity,
          image: item.image,
          name: item.day + "/" + item.month,
        };
      });
    // } else if (selectedCraft === "year") {
    tempData.year = nft_card_year_data
      .filter((f) => !f.is_crafted)
      .map((item) => {
        return {
          id: item.id,
          rarity: item.rarity,
          image: item.image,
          name: item.year,
        };
      });
    // } else if (selectedCraft === "category") {
    tempData.category = nft_card_category_data
      .filter((f) => !f.is_crafted)
      .map((item) => {
        return {
          id: item.id,
          rarity: item.rarity,
          image: item.image,
          name: item.category,
        };
      });
    // } else if (selectedCraft === "identity") {
    tempData.identity = nft_card_identity_data
      .filter((f) => !f.is_crafted)
      .map((item) => {
        return {
          id: item.id,
          rarity: item.rarity,
          image: item.image,
          name: item.category,
        };
      });
    // } else if (selectedCraft === "trigger") {
    tempData.trigger = nft_card_trigger_data
      .filter((f) => !f.is_crafted)
      .map((item) => {
        return {
          id: item.id,
          rarity: item.rarity,
          image: item.image,
          name: item.trigger,
        };
      });
    // }
    setNftData(tempData);
    setIsAdd(false);
  }, [selectedCards]);

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
                selectedCards.trigger.length > 0
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
                <CraftCard
                  bg={
                    nftData[item.key].filter(
                      (f: any) => f.id === Number(selectedCards[item.key])
                    )[0]?.image
                  }
                  className="crafting-card"
                >
                  {nftData[item.key].filter(
                    (f: any) => f.id === Number(selectedCards[item.key])
                  )[0]?.rarity === 0 && <span>Common</span>}
                  {nftData[item.key].filter(
                    (f: any) => f.id === Number(selectedCards[item.key])
                  )[0]?.rarity === 1 && <span>Uncommon</span>}
                  {nftData[item.key].filter(
                    (f: any) => f.id === Number(selectedCards[item.key])
                  )[0]?.rarity === 2 && <span>Rare</span>}
                  <p>
                    {
                      nftData[item.key].filter(
                        (f: any) => f.id === Number(selectedCards[item.key])
                      )[0]?.name
                    }
                  </p>
                </CraftCard>
              ) : (
                <EmptyCraftCard
                  active={selectedCraft === item.key ? "true" : undefined}
                  onClick={() => onCraftChanged(item.key)}
                />
              )}
            </CraftCardWrapper>
          ))}
        {page === "prediction" && (
          <>
            {predictionCraft.map((item, key) => {
              if (item.key !== "trigger")
                return (
                  <CraftCardWrapper key={key}>
                    <h6>{item.title}</h6>
                    {Number(selectedCards[item.key]) > -1 ? (
                      <CraftCard
                        bg={
                          nftData[item.key].filter(
                            (f: any) => f.id === Number(selectedCards[item.key])
                          )[0]?.image
                        }
                        className="crafting-card"
                      >
                        {nftData[item.key].filter(
                          (f: any) => f.id === Number(selectedCards[item.key])
                        )[0]?.rarity === 0 && <span>Common</span>}
                        {nftData[item.key].filter(
                          (f: any) => f.id === Number(selectedCards[item.key])
                        )[0]?.rarity === 1 && <span>Uncommon</span>}
                        {nftData[item.key].filter(
                          (f: any) => f.id === Number(selectedCards[item.key])
                        )[0]?.rarity === 2 && <span>Rare</span>}
                        <p>
                          {
                            nftData[item.key].filter(
                              (f: any) =>
                                f.id === Number(selectedCards[item.key])
                            )[0]?.name
                          }
                        </p>
                      </CraftCard>
                    ) : (
                      <EmptyCraftCard
                        active={selectedCraft === item.key ? "true" : undefined}
                        onClick={() => onCraftChanged(item.key)}
                      />
                    )}
                  </CraftCardWrapper>
                );
              else
                return (
                  <>
                    {selectedCards.trigger.length > 0 ? (
                      selectedCards.trigger.map((tItem, key) => (
                        <CraftCardWrapper key={key}>
                          <h6>{item.title}</h6>
                          <CraftCard
                            bg={
                              nftData[item.key].filter(
                                (f: any) => f.id === tItem
                              )[0]?.image
                            }
                            className="crafting-card"
                          >
                            {nftData[item.key].filter(
                              (f: any) => f.id === tItem
                            )[0]?.rarity === 0 && <span>Common</span>}
                            {nftData[item.key].filter(
                              (f: any) => f.id === tItem
                            )[0]?.rarity === 1 && <span>Uncommon</span>}
                            {nftData[item.key].filter(
                              (f: any) => f.id === tItem
                            )[0]?.rarity === 2 && <span>Rare</span>}
                            <p>
                              {
                                nftData[item.key].filter(
                                  (f: any) => f.id === tItem
                                )[0]?.name
                              }
                            </p>
                          </CraftCard>
                        </CraftCardWrapper>
                      ))
                    ) : (
                      <CraftCardWrapper key={key}>
                        <h6>{item.title}</h6>
                        <EmptyCraftCard
                          active={
                            selectedCraft === item.key ? "true" : undefined
                          }
                          onClick={() => {
                            onCraftChanged(item.key);
                          }}
                        />
                      </CraftCardWrapper>
                    )}
                    {isAdd && (
                      <CraftCardWrapper key={key}>
                        <h6>{item.title}</h6>
                        <EmptyCraftCard
                          active={
                            selectedCraft === item.key ? "true" : undefined
                          }
                          onClick={() => {
                            onCraftChanged(item.key);
                          }}
                        />
                      </CraftCardWrapper>
                    )}
                  </>
                );
              // return (
              //   <CraftCardWrapper key={key}>
              //     <h6>{item.title}</h6>
              //     {selectedCards.trigger.length > 0 ? (
              //       <CraftCard
              //         bg={"/assets/nfts/1.png"}
              //         className="crafting-card"
              //       >
              //         <span>Rare</span>
              //         <p>{item.title}</p>
              //       </CraftCard>
              //     ) : (
              //       <EmptyCraftCard
              //         active={selectedCraft === item.key ? "true" : undefined}
              //         onClick={() => onCraftChanged(item.key)}
              //       />
              //     )}
              //   </CraftCardWrapper>
              // );
            })}
            {selectedCards.trigger.length > 0 && (
              <AddTrigger onClick={() => setIsAdd(true)}>
                <span>+</span>
                <p>Add Trigger</p>
              </AddTrigger>
            )}
          </>
        )}
      </CraftCardGroup>
    </CraftSectionWrapper>
  );
};
