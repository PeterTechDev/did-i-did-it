// src/styles/Layout.styles.ts
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-wrap: wrap; /* Allows items to wrap onto the next line */
  justify-content: center; /* Center the items */
  gap: 20px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;
