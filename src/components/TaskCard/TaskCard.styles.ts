// src/components/TaskCard.styles.ts
import styled from "styled-components";

export const Card = styled.div<{ completed: boolean }>`
  border-radius: 20px;
  padding: 20px;
  background-color: #1c1c1e;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;

  /* Ensure the card has a good width range */
  min-width: 280px;
  max-width: 100%;

  @media (min-width: 768px) {
    /* Larger screen behavior, cards grow if there's room */
    max-width: 350px;
  }
`;

export const TaskText = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Status = styled.p<{ completed: boolean }>`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
  color: ${({ completed }) => (completed ? "#00FF00" : "#FF0000")};
`;

export const CompletionTime = styled.div`
  margin-top: 10px;
`;

export const TimeText = styled.p`
  font-size: 12px;
  color: #9e9e9e;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;
