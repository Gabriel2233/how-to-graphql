import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--main-gray);
  padding-top: 6px;
`;

export const VoteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0px 8px;

  > p {
    font-size: 1.3rem;
  }

  > span {
    color: var(--secondary-gray);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const RowDivider = styled.div``;

export const Content = styled.div`
  width: 100%;

  a {
    text-decoration: none;
    font-size: 1.5rem;
    padding: 8px 6px;
    color: var(--main-text);
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    color: var(--secondary-text);
    font-size: 1rem;
    padding: 0px 8px 4px 0px;
  }
`;

export const LinkInfo = styled.div`
  width: 100%;
  padding: 6px 8px;
  display: flex;
`;
