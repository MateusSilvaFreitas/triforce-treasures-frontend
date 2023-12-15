import styled from "styled-components";
import "./SearchInput.css";

const InputWrapper = styled.div`
  width: 55%;
`;

export const SearchInput = () => {
  return (
    <InputWrapper>
      <input
        type="search"
        className="input-search"
        placeholder="Search for products. Ex.: T-shirt, bags or something you want!"
      />
    </InputWrapper>
  );
};
