import React, { useEffect, useRef } from "react";
import { CloseButton, NotificationWrapper, NotificationsGroup } from "./styles";
import { notifications } from "./data";
import { NotificationItem } from "../../components/NotificationItem";
import { NotificationProps } from "../../types";

export const Notification: React.FC<NotificationProps> = ({
  onClose,
  open,
}) => {
  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClose();
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NotificationWrapper ref={wrapperRef} open={open}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <h3>Notifications</h3>
      <NotificationsGroup>
        {notifications.map((item, key) => (
          <NotificationItem {...item} key={key} />
        ))}
      </NotificationsGroup>
      <p>Clear All</p>
    </NotificationWrapper>
  );
};
