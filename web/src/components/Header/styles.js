import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: var(--main-orange);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 24px;
    height: 24px;
    margin-left: 10px;
    border: 1px solid white;
  }

  > h2 {
    padding: 0px 8px;
  }
`;

export const ActionsBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  > a {
    color: var(--main-text);
    text-decoration: none;
    cursor: pointer;
    padding-left: 4px;
    font-size: 1.5rem;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;

  margin-right: 24px;
`;

export const AuthButton = styled.button`
  background: transparent;
  color: black;
  border: 0;
  font-size: 1.5rem;

  cursor: pointer;
`;
