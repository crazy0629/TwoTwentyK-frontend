import { styled } from "styled-components";

export const FeedItemWrapper = styled.div`
  background: #f2f2f2;
  width: 100%;
  border-radius: 8px;
  padding: 18px;
  display: flex;
  align-items: center;
`;

export const FeedImage = styled.div`
  margin-right: 21px;
  width: 78px;
  height: 78px;
  display: flex;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const FeedInfoWrapper = styled.div`
  position: relative;
  flex: 1;
  h3 {
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 3px;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  p {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #666666;
    opacity: 0.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  div {
    & > :not(:first-child) {
      margin-left: 6px;
    }
    margin-top: 5px;
    span {
      opacity: 0.5;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
    }
  }
  h4 {
    position: absolute;
    right: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #8f00ff;
    top: 0;
  }
  @media screen and (max-width: 500px) {
    h3 {
      font-size: 14px;
    }
    h4 {
      font-size: 12px;
    }
  }
`;
