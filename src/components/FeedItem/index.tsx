import React from "react";
import { FeedImage, FeedInfoWrapper, FeedItemWrapper } from "./styles";
import { FeedItemProps } from "../../types";

export const FeedItem: React.FC<FeedItemProps> = ({
  date,
  desc,
  image,
  tags,
  title,
}) => {
  return (
    <FeedItemWrapper>
      <FeedImage>
        <img src={image} alt="" />
      </FeedImage>
      <FeedInfoWrapper>
        <h4>{date}</h4>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div>
          {tags.map((item, key) => (
            <span key={key}>{item}</span>
          ))}
        </div>
      </FeedInfoWrapper>
    </FeedItemWrapper>
  );
};
