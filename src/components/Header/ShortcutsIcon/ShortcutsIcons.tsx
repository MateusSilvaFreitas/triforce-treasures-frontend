import styled from "styled-components";
import "./ShortcutsIcons.css"
import { LoginButton } from "./LoginButton";

const ShortcutsWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  width: 35%;
`;

export const ShortcutsIcons = () => {
  return (
    <ShortcutsWrapper>
      <i className="lar la-heart icon-heart"></i>
      <i className="las la-shopping-basket icon-basket"></i>
      <LoginButton />
    </ShortcutsWrapper>
  );
};
