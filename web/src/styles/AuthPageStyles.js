import styled from "styled-components";

export const Home = styled.div`
  width: 100%;
  text-align: start;

  margin: 24px;

  h2 {
    color: var(--main-text);
    font-size: 1.3rem;
    text-decoration: none;
  }
`;

export const FormContainer = styled.form`
  width: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 6rem;

  h3 {
    width: 100%;
    text-align: center;
    color: var(--main-text);
    cursor: pointer;
    margin-top: 2rem;
    text-decoration: none;
  }
`;

export const InputElement = styled.input`
  width: 100%;
  padding: 16px;
  border: 1px solid var(--main-gray);
  margin: 8px 0px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  color: white;
  background: var(--main-orange);
  padding: 16px;
  display: block;
  border: 0;
  cursor: pointer;
`;
