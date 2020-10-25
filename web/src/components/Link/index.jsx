import { Container, RowDivider, VoteContainer, Content } from "./styles";

export const Link = ({ linkData }) => {
  return (
    <Container>
      <RowDivider>
        <VoteContainer></VoteContainer>
      </RowDivider>

      <Content>
        <a href={linkData.url}>{linkData.description}</a>
        <p>By: {linkData.postedBy.name}</p>
      </Content>
    </Container>
  );
};
