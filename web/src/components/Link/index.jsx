import {
  Container,
  RowDivider,
  VoteContainer,
  Content,
  LinkInfo,
} from "./styles";
import { useMutation, gql } from "@apollo/client";
import { VOTE_MUTATION } from "../../graphql/mutations";
import { LINKS_FEED } from "../../graphql/queries";

export const Link = ({ linkData, index }) => {
  const [upvoteLink, { data }] = useMutation(VOTE_MUTATION);

  const voteLink = async (linkId) => {
    try {
      await upvoteLink({
        variables: { linkId },
        update: (cache, { data: { upvoteLink } }) => {
          const data = cache.readQuery({ query: LINKS_FEED });
          data.feed = [...data.feed, upvoteLink];
          cache.writeQuery({ query: LINKS_FEED }, data);
        },
      });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container>
      <RowDivider>
        <VoteContainer>
          <p>{index + 1}.</p>
          <span onClick={() => voteLink(linkData.id)}>▲</span>
        </VoteContainer>
      </RowDivider>

      <Content>
        <a rel="noreferrer" target="_blank" href={linkData.url}>
          {linkData.description}
        </a>
        <LinkInfo>
          <p>
            {linkData.votes.length}{" "}
            {linkData.votes.length === 1 ? "vote" : "votes"}
          </p>
          <p>| by {linkData.postedBy.name} 5 minutes ago</p>
        </LinkInfo>
      </Content>
    </Container>
  );
};
