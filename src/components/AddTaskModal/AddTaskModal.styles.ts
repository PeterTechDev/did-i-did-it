import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease-in-out; /* Smooth transition */

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  background-color: #333333;
  padding: 30px;
  border-radius: 15px;
  width: 320px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: #ffffff;
  animation: slideUp 0.4s ease; /* Slide up animation */

  @keyframes slideUp {
    from {
      transform: translateY(30px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const Title = styled.h2`
  color: #ffbe0b;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #444444;
  background-color: #242424;
  color: #ffffff;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: #9e9e9e;
  }
`;

export const InputHint = styled.p`
  font-size: 12px;
  color: #9e9e9e;
  margin-top: 5px;
`;

export const ErrorText = styled.p`
  font-size: 12px;
  color: #ff006e;
  margin-top: 5px;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ primary }) => (primary ? "#FB5607" : "#FF006E")};
  color: #ffffff;
  width: 110px;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;