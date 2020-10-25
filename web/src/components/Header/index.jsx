import { Container, LogoBox, NavLinks, LoginButton } from "./styles";

export const Header = () => {
  return (
    <Container>
      <LogoBox>
        <img src="a" alt="s" />
        <h2>Hacker News</h2>
      </LogoBox>
      <NavLinks>
        <LoginButton>Login</LoginButton>
      </NavLinks>
    </Container>
  );
};
