import React from "react";
import { CardGridWrapper } from "./styles";
import { DateCardGridProps } from "../../../types";
import { DateCard, PredictionCard } from "../../../components";
import { TriggerCard } from "../../../components/TriggerCard";

export const CardGridSection: React.FC<DateCardGridProps> = ({
  data,
  cardType,
  identityData,
  onCraft,
  onSell,
  onView,
}) => {
  return (
    <CardGridWrapper>
      {data?.map((item, key) =>
        cardType === "trigger" ? (
          <TriggerCard
            key={key}
            {...item}
            onCraft={() => (onCraft ? onCraft("id") : {})}
            onView={() => (onView ? onView("id") : {})}
            onSell={() => (onSell ? onSell("id") : {})}
          />
        ) : (
          <DateCard
            key={key}
            {...item}
            onCraft={() => (onCraft ? onCraft("id") : {})}
            onView={() => (onView ? onView("id") : {})}
            onSell={() => (onSell ? onSell("id") : {})}
          />
        )
      )}
      {identityData?.map((item, key) => (
        <PredictionCard
          height={293}
          key={key}
          {...item}
          onCraft={() => (onCraft ? onCraft("id") : {})}
          onView={() => (onView ? onView("id") : {})}
          onSell={() => (onSell ? onSell("id") : {})}
        />
      ))}
    </CardGridWrapper>
  );
};
