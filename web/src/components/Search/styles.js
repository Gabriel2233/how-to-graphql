import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > h2 {
    color: var(--secondary-gray);
    padding-right: 4px;
  }
`

export const SearchInput = styled.input`
  padding: 6px;
  border: 1px solid var(--main-text);
  margin: 8px 0px;
`