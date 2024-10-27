// src/styles/Layout.styles.ts
import styled from "styled-components";

export const Container = styled.div`
  width: 1300px;
  max-width: 90vw;

  display: flex;
  flex-wrap: wrap; /* Allows items to wrap onto the next line */
  gap: 20px;
  justify-content: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;
