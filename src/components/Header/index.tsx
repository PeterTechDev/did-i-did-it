// src/components/Header.tsx
import styled from "styled-components";

interface HeaderProps {
  onOpenModal: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  return (
    <HeaderContainer>
      <Title>Daily Reminder</Title>
      <AddTaskButton onClick={onOpenModal}>+ Add Task</AddTaskButton>
    </HeaderContainer>
  );
}

// Styled Components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #242424;
  margin: 5px auto 20px auto;
  width: 360px;
`;

const Title = styled.h1`
  color: #ffbe0b;
  font-size: 26px;
`;

const AddTaskButton = styled.button`
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
