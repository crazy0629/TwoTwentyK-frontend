import { styled } from "styled-components";

export const NotificationItemWrapper = styled.div`
  background: #efefef;
  border-radius: 8px;
  padding: 10px 12px;
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #000;
  }
`;

export const NotificationTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #000;
  h5 {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 16.94px;
    p {
      font-weight: 400;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
      line-height: 15px;
    }
  }
  span {
    display: flex;
    height: 24px;
    width: 38px;
    align-items: center;
    justify-content: center;
    background: #17d190;
    border-radius: 4px;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    color: #fff;
  }
`;
