import { Container } from "./styles";
import GlobalStyles from "../../styles/Global";

export const Layout = ({ children }) => {
  return (
    <Container>
      {children}
      <GlobalStyles />
    </Container>
  );
};
