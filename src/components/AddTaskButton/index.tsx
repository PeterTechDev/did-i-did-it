// src/components/AddTaskButton.tsx
import styled from "styled-components";

interface AddTaskButtonProps {
  onClick: () => void;
}

export function AddTaskButton({ onClick }: AddTaskButtonProps) {
  return <Button onClick={onClick}>+ Add Task</Button>;
}

// Styled Component
const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fb5607;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff006e;
  }

  &:active {
    transform: scale(0.98);
  }
`;
