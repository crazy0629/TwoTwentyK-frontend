import React from "react";
import { FeedImage, FeedInfoWrapper, FeedItemWrapper } from "./styles";
// import { FeedItemProps } from "../../types";
import { IArticle } from "../../types/actions";

export const FeedItem: React.FC<IArticle> = ({
  created_at,
  excerpt,
  tags,
  thumbnail_src,
  title,
  url,
}) => {
  return (
    <FeedItemWrapper>
      <FeedImage>
        <img src={thumbnail_src} alt="" />
      </FeedImage>
      <FeedInfoWrapper>
        <h4>{created_at ? new Date(created_at).toDateString() : ""}</h4>
        <h3 onClick={() => window.open(url)}>{title}</h3>
        <p>{excerpt}</p>
        <div>
          {tags?.map((item, key) => (
            <span key={key}>{item}</span>
          ))}
        </div>
      </FeedInfoWrapper>
    </FeedItemWrapper>
  );
};
