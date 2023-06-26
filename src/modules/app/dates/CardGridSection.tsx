import React from "react";
import { CardGridWrapper } from "./styles";
import { DateCardGridProps } from "../../../types";
import { DateCard, PredictionCard } from "../../../components";
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
      {data &&
        marketplaceListContext?.map(
          ///////// add some filter
          (item: IMarketplaceListing, key: number) =>
            cardType === "trigger" ? (
              <TriggerCard
                key={key}
                {...data[key]}
                {...item}
                onCraft={() => (onCraft ? onCraft("id") : {})}
                onView={() => (onView ? onView("id") : {})}
                onSell={() => (onSell ? onSell("id") : {})}
              />
            ) : (
              <DateCard
                {...data[key]}
                key={key}
                {...item}
                onCraft={() => (onCraft ? onCraft("id") : {})}
                onView={() => (onView ? onView("id") : {})}
                onSell={() => (onSell ? onSell("id") : {})}
              />
            )
        )}
      {identityData &&
        marketplaceListContext?.map(
          (item: IMarketplaceListing, key: number) => (
            <PredictionCard
              {...identityData[key]}
              height={293}
              isNotHover={true}
              key={key}
              {...item}
              onCraft={() => (onCraft ? onCraft("id") : {})}
              onView={() => (onView ? onView("id") : {})}
              onSell={() => (onSell ? onSell("id") : {})}
            />
          )
        )}
    </CardGridWrapper>
  );
};
