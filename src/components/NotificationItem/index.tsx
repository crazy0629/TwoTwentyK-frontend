import React from "react";
import { NotificationItemWrapper, NotificationTitleWrapper } from "./styles";
import { NotificationProps } from "../../types";

export const NotificationItem: React.FC<NotificationProps> = ({
  date,
  desc,
  isNew,
  title,
}) => {
  return (
    <NotificationItemWrapper>
      <NotificationTitleWrapper>
        <h5>
          <p>{date} - </p>
          {title}
        </h5>
        {isNew && <span>New</span>}
      </NotificationTitleWrapper>
      <p>{desc}</p>
    </NotificationItemWrapper>
  );
};
