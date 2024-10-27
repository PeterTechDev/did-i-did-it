import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #242424;
  margin: 5px auto 0 auto;
  width: 320px;

  @media (min-width: 768px) {
    width: 600px;
  }

  @media (min-width: 1024px) {
    width: 1300px;
  }
`;

export const Title = styled.h1`
  color: #ffbe0b;
  font-size: 30px;
`;
