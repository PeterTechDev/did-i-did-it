// src/components/TaskCard.styles.ts
import styled from "styled-components";

export const Card = styled.div<{ completed: boolean }>`
  border-radius: 20px;
  padding: 20px;
  background-color: ${({ completed }) =>
    completed
      ? "#3A86FF"
      : "#333333"}; /* Blue for completed, lighter dark gray for not completed */
  color: ${({ completed }) =>
    completed
      ? "#FFBE0B"
      : "#FF006E"}; /* Yellow for completed text, pink otherwise */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Stronger shadow for better separation */
  border: 1px solid #444444; /* Subtle border to differentiate from background */
  text-align: center;
  position: relative;

  /* Ensure the card has a good width range */
  min-width: 280px;
  max-width: 100%;

  @media (min-width: 768px) {
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
  color: ${({ completed }) =>
    completed
      ? "#FFBE0B"
      : "#FF006E"}; /* Yellow for completed, pink for not completed */
`;

export const CompletionTime = styled.div`
  margin-top: 10px;
`;

export const TimeText = styled.p`
  font-size: 12px;
  color: #ffffff; /* White for the time text */
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #fb5607; /* Orange button */
  color: #ffffff;
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
