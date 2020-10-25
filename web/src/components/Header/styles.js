import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: var(--main-orange);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;

  margin: 18px;

  > h2 {
    padding: 0px 8px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;

  margin: 24px;
`;

export const LoginButton = styled.button`
  background: transparent;
  color: black;
  border: 0;
  font-size: 1.5rem;

  cursor: pointer;
`;
