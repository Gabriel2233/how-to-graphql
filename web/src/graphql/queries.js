import { gql } from "@apollo/client";

export const LINKS_FEED = gql`
  query LinksFeed {
    feed {
      count
      links {
        id
        description
        url
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
