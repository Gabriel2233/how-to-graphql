import { gql } from "@apollo/client";

export const LINKS_FEED = gql`
  query LinksFeed {
    feed {
      count
      links {
        id
        description
        url
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            name
          }
        }
      }
    }
  }
`;

export const SEARCH_LINKS_FEED = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      links {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`