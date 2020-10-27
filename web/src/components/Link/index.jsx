import {
  Container,
  RowDivider,
  VoteContainer,
  Content,
  LinkInfo,
} from "./styles";
import { useMutation } from "@apollo/client";
import { VOTE_MUTATION } from "../../graphql/mutations";
import { LINKS_FEED } from "../../graphql/queries";

import { formatDistance, format, formatISO, parseISO } from 'date-fns'

export const Link = ({ linkData, index }) => {
  const [upvoteLink, { data }] = useMutation(VOTE_MUTATION);

  const linkDateFromNow = formatDistance(parseISO(linkData.createdAt), new Date());

  const voteLink = async (linkId) => {
    try {
      await upvoteLink({
        variables: { linkId },
        refetchQueries: [{ query: LINKS_FEED}]
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
          {linkData.description} ({linkData.url})
        </a>
        <LinkInfo>
          <p>
            {linkData.votes.length}{" "}
            {linkData.votes.length === 1 ? "vote" : "votes"}
          </p>
          <p>| by {linkData.postedBy.name} {linkDateFromNow} ago</p>
        </LinkInfo>
      </Content>
    </Container>
  );
};
