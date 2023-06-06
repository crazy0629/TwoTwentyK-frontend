import React from "react";
import { NotificationWrapper, NotificationsGroup } from "./styles";
import { notifications } from "./data";
import { NotificationItem } from "../../components/NotificationItem";

export const Notification: React.FC = () => {
  // const wrapperRef = useRef(null);
  // useEffect(() => {
  //     /**
  //      * Alert if clicked on outside of element
  //      */
  //     const handleClickOutside = (event) => {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         alert("You clicked outside of me!");
  //       }
  //     }
  //     // Bind the event listener
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       // Unbind the event listener on clean up
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]);
  return (
    <NotificationWrapper>
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
