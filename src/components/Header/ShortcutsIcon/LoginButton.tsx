import styled from "styled-components";

const LoginButtonWrapper = styled.div`

`;
const SignInButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #FFF;
`;

const SignUpButton = styled.button`
  background-color: #f4f4f4;
  cursor: pointer;
`;

export const LoginButton = () => {
  return (
    <LoginButtonWrapper>
      <SignInButton>Sign in</SignInButton>
      <SignUpButton>Sign up</SignUpButton>
    </LoginButtonWrapper>
  );
};
