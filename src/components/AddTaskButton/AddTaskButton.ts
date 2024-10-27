import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fb5607;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto
  width: 80px;

  &:hover {
    background-color: #ff006e;
  }

  &:active {
    transform: scale(0.98);
  }
`;
