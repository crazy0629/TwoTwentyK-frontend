import { styled } from "styled-components";

export const NotifyWrapper = styled.div<{ show?: string }>`
  position: fixed;
  bottom: 60px;
  right: ${({ show }) => (show ? "60px" : "-100%")};
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: #fff;
  padding: 0 18px;
  background: #000000;
  border: 1px solid rgba(0, 0, 0, 0.02);
  box-shadow: 0px 2px 12px 4px rgba(113, 127, 141, 0.1);
  border-radius: 12px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  height: 57px;
  display: flex;
  align-items: center;
  min-width: 286px;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  span {
    margin-left: 10px;
  }
`;
