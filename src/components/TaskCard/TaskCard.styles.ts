import styled from "styled-components";

export const Card = styled.div<{ completed: boolean }>`
  border-radius: 20px;
  padding: 20px;
  background-color: ${({ completed }) => (completed ? "#3A86FF" : "#333333")};
  color: ${({ completed }) => (completed ? "#FFBE0B" : "#FF006E")};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid #444444;
  text-align: center;
  position: relative;
  width: 110px;
  height: 160px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 150px;

    width: 200px;
  }

  @media (min-width: 1024px) {
    height: 120px;

    width: 260px;
  }
`;

export const TaskText = styled.p`
  font-size: 14px;
  margin: 20px auto 8px auto;
`;

export const Status = styled.p<{ completed: boolean }>`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
  color: ${({ completed }) => (completed ? "#FFBE0B" : "#FF006E")};
`;

export const CompletionTime = styled.div`´
`;

export const TimeText = styled.p`
  margin: 0;
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #fb5607;
  color: #ffffff;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #ff006e;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const SettingsButton = styled.button`
  position: absolute;
  top: -5px;
  left: -15px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  border: none;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 25px;
  left: 20px;
  background-color: #444444;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  width: 100px;
`;

export const DropdownOption = styled.div`
  padding: 10px;
  font-size: 14px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #ff006e;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  position: absolute;
  left: 0;
  justify-self: flex-end;
`;
