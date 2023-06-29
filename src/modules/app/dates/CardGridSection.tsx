import React from "react";
import { CardGridWrapper } from "./styles";
import { DateCardGridProps } from "../../../types";
import { DateCard, PredictionCard } from "../../../components";
import { CategoryCard } from "../../../components/CategoryCard";
import { TriggerCard } from "../../../components/TriggerCard";
import { useMarketplaceListContext } from "../../../context";
import { IMarketplaceListing } from "../../../types/actions";

export const CardGridSection: React.FC<DateCardGridProps> = ({
  data,
  cardType,
  identityData,
  onCraft,
  onSell,
  onView,
}) => {
  const { marketplaceListContext } = useMarketplaceListContext();
  return (
    <CardGridWrapper>
      {(cardType === "category") &&
        data?.map((item, key) => (
          <CategoryCard
            // {...data[key]}
            key={key}
            {...item}
            onCraft={onCraft}
            onView={onView}
            onSell={onSell}
          />
        ))}
      {(cardType === "date") &&
        data?.map((item, key) => (
          <DateCard
            // {...data[key]}
            key={key}
            {...item}
            onCraft={onCraft}
            onView={onView}
            onSell={onSell}
          />
        ))}
      {cardType === "trigger" &&
        data?.map((item, key) => (
          <TriggerCard
            key={key}
            {...item}
            onCraft={onCraft}
            onView={onView}
            onSell={onSell}
          />
        ))}
      {/* {data &&
        data?.map(
          ///////// add some filter
          (item, key: number) =>
            cardType === "trigger" ? (
              <TriggerCard
                key={key}
                // {...data[key]}
                {...item}
                onCraft={onCraft}
                onView={onView}
                onSell={onSell}
              />
            ) : (
              <DateCard
                // {...data[key]}
                key={key}
                {...item}
                onCraft={onCraft}
                onView={onView}
                onSell={onSell}
              />
            )
        )} */}
      {identityData &&
        identityData?.map((item, key) => (
          <PredictionCard
            height={293}
            isNotHover={true}
            key={key}
            {...item}
            // onCraft={onCraft}
            onView={onView}
            onSell={onSell}
          />
        ))}
    </CardGridWrapper>
  );
};
