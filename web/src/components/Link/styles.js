import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--main-gray);

  padding: 8px;
`;

export const VoteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RowDivider = styled.div`
  width: 10%;
`;

export const Content = styled.div`
  width: 90%;

  > a {
    text-decoration: none;
    font-size: 1.8rem;
    padding: 8px 6px;
    color: var(--main-text);
  }

  > a:hover {
    text-decoration: underline;
  }

  > p {
    color: var(--secondary-text);
    font-size: 1rem;
    padding: 4px 6px;
  }
`;
