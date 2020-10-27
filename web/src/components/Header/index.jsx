import {
  Container,
  LogoBox,
  LogoWrapper,
  ActionsBox,
  NavLinks,
  AuthButton,
} from "./styles";
import logo from "../../assets/y-combinator-.png";
import { Link, useHistory } from "react-router-dom";
import { AUTH_TOKEN } from "../../constants";
import { getStoragedToken } from "../../utils/token-utils";

export const Header = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);

    history.push("/");
  };

  const authToken = getStoragedToken();

  return (
    <Container>
      <LogoBox>
        <LogoWrapper>
          <img src={logo} alt="Hacker News" />
          <h2>Hacker News</h2>
        </LogoWrapper>

        <ActionsBox>
          <a href="#">new</a>
          <a href="#">| submit</a>
        </ActionsBox>
      </LogoBox>
      <NavLinks>
        {!authToken ? (
          <Link to="/login">
            <AuthButton>login</AuthButton>
          </Link>
        ) : (
          <AuthButton onClick={logout}>logout</AuthButton>
        )}
      </NavLinks>
    </Container>
  );
};
