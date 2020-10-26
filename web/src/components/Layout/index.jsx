import { Container, Wrapper } from "./styles";
import GlobalStyles from "../../styles/Global";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
      <GlobalStyles />
    </Container>
  );
};
