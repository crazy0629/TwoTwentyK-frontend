import React from "react";
import { CardGridWrapper } from "./styles";
import { DateCardGridProps } from "../../../types";
import { DateCard } from "../../../components";

export const CardGridSection: React.FC<DateCardGridProps> = ({
  data,
  onCraft,
  onSell,
  onView,
}) => {
  return (
    <CardGridWrapper>
      {data.map((item, key) => (
        <DateCard
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
