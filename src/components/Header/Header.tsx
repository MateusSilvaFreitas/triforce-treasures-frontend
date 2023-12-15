import styled from "styled-components";
import { SearchInput } from "./SearchInput/SearchInput";
import { ShortcutsIcons } from "./ShortcutsIcon/ShortcutsIcons";

const HeaderBar = styled.div`
  background-color: #1e2124;
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Header = () => {
  return <HeaderBar>
    <SearchInput />
    <ShortcutsIcons />
  </HeaderBar>;
};
